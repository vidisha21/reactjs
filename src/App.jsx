import React, { useState } from 'react';
import styled from 'styled-components';
import ScoreCard from './component/scoreCard';
import Button from './component/button';


const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
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
       <Button label="Reset" />
    </ScoreButtons>
    </AppWrapper>
  );
}

export default App;
