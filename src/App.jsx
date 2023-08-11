import React, { useState } from 'react';
import styled from 'styled-components';
import ScoreCard from './component/scoreCard';
import Button from './component/button';


const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height:80%;
  margin: auto;
  background : url('https://img.freepik.com/premium-photo/soccer-stadium-evening-arena-with-crowd-fans-d-illustration_336913-373.jpg?size=626&ext=jpg&ga=GA1.1.1522961941.1691787232&semt=ais');
  background-repeat: no-repeat;
`;

const ScoreButtons = styled.div`
  display: flex;
  justify-content: center;
  height: 45px;
  
  Button{
    width: 80px;
  }
`;




const App = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [overs, setOvers] = useState(0);

  const handleRunButtonClick = (runs) => {
    
      if (wickets<10 && balls < 6 && typeof runs === 'number') {
        setTotalScore(totalScore + runs);
        setBalls(balls + 1);
      }
      else if( runs === 'reset'){
        setTotalScore(0);
        setBalls(0);
        setWickets(0);
        setOvers(0)
      }
      updateOvers();
  
  };

  const updateOvers = () => {
      if(balls===5){
        setBalls(0);
        setOvers(overs + 1);
      }
  }

  const handleWicketButtonClick = () => {
    if (wickets < 10) {
      setWickets(wickets + 1);
      setBalls(balls + 1);
      updateOvers();
    }
  };


  // const handleWideBall = () => {

  // }
  


  return (
    <AppWrapper>
    <ScoreCard totalScore={totalScore} wickets={wickets} overs={overs} balls={balls} />
    <ScoreButtons>
      <Button label="0" onClick={() => handleRunButtonClick(0)}/>
      <Button label="1" onClick={() => handleRunButtonClick(1)}/>
      <Button label="2" onClick={() => handleRunButtonClick(2)}/>
    </ScoreButtons>

    <ScoreButtons>
      <Button label="3" onClick={() => handleRunButtonClick(3)}/>
      <Button label="4" onClick={() => handleRunButtonClick(4)}/>
      <Button label="6" onClick={() => handleRunButtonClick(6)}/>
    </ScoreButtons>

    <ScoreButtons>
      <Button label="Wide" />
      <Button label="No Ball" />
      <Button label="Bye" />  
    </ScoreButtons>

    <ScoreButtons>
      <Button label="Leg Bye" />
      <Button label="Wicket" onClick={handleWicketButtonClick}  />
      <Button label="Undo" />
    </ScoreButtons>
      
    <ScoreButtons>
       <Button label="Reset" onClick={() => handleRunButtonClick('reset')} />
    </ScoreButtons>
    </AppWrapper>
  );
}

export default App;
