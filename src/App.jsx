import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ScoreCard from './component/scoreCard';
import Button from './component/button';
// import {  AppWrapper } from '.';


const ScoreButtons = styled.div`{
  display: flex;
  justify-content: center;
  height: 45px;
  Button{
    width: 80px;
  }
}
`;

const AppWrapper = styled.div`
display: flex;
flex-direction: column;
width: 30%;
height:80%;
margin: auto;
background : url('https://img.freepik.com/premium-photo/soccer-stadium-evening-arena-with-crowd-fans-d-illustration_336913-373.jpg?size=626&ext=jpg&ga=GA1.1.1522961941.1691787232&semt=ais');
background-repeat: no-repeat;
`;

const App = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [overs, setOvers] = useState(0);

  const prevScoreRef = useRef();
  const prevWicketsRef = useRef();
  const prevBallsRef = useRef();
  const prevOversRef = useRef();

  useEffect(() => {
    prevScoreRef.current = totalScore;
    prevWicketsRef.current = wickets;
    prevBallsRef.current = balls;
    prevOversRef.current = overs;
  }, [totalScore, wickets, balls, overs]);


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


  const handleNoBallButtonClick = (runs) => {
    if (wickets < 10 && balls < 6 && typeof runs === 'number') {
      setTotalScore(totalScore + runs);   
    }  
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


  const handleWideBall = (type) => {
    if (wickets < 10 && balls < 6 && (type === 'wide') ) {
      setTotalScore(totalScore + 1);
    }
  }

  const handleNoBall = (type,runs) => {
    if (wickets < 10 && balls < 6 && (type === 'noball') ) {
      setTotalScore(totalScore + 1);
      handleNoBallButtonClick(runs);
    }
  }


  const handleBye = (type) => {
    if (wickets < 10 && balls < 6 && (type === 'bye') ) {
      setTotalScore(totalScore + 1);
      handleNoBallButtonClick();
    }
  }

  const handleLegBye = (type,runs) => {
    if (wickets < 10 && balls < 6 && (type === 'legBye') ) {
      setTotalScore(totalScore + 1);
      handleNoBallButtonClick(runs);
    }
  }
  

  const handleUndo = () => {
    setTotalScore(prevScoreRef.current);
    setWickets(prevWicketsRef.current);
    setBalls(prevBallsRef.current);
    setOvers(prevOversRef.current);
  }
  


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
      <Button label="Wide" type = "wide" onClick = {handleWideBall}/>
      <Button label="No Ball" type = "noball" onClick = {handleNoBall}/>
      <Button label="Bye" type = "bye" onClick = {handleBye}/>  
    </ScoreButtons>

    <ScoreButtons>
      <Button label="Leg Bye" type = "legBye" onClick = {handleLegBye} />
      <Button label="Wicket" onClick={handleWicketButtonClick}  />
      <Button label="Undo" type = "undo" onClick = {handleUndo}/>
    </ScoreButtons>
      
    <ScoreButtons>
       <Button label="Reset" onClick={() => handleRunButtonClick('reset')} />
    </ScoreButtons>
    </AppWrapper>
  );
}

export default App;
