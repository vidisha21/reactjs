import React, { useRef, useState } from 'react';
import ScoreCard from './component/scoreCard';
import Button from './component/button';
import { ScoreButtons, Wrapper } from './style';
import swal from 'sweetalert2';



const App = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [overs, setOvers] = useState(0);

  const prevGameStateRef = useRef({ totalScore, wickets, balls, overs });

  const updatePrevGameState = () => {
    prevGameStateRef.current = { totalScore, wickets, balls, overs };
  };

  const handleUndo = () => {
    const prevGameState = prevGameStateRef.current;
    setTotalScore(prevGameState.totalScore);
    setWickets(prevGameState.wickets);
    setBalls(prevGameState.balls);
    setOvers(prevGameState.overs);
  };

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
      updatePrevGameState();
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
      updatePrevGameState();
    }
  };

  const handleWideBall = (type) => {
    if (wickets < 10 && balls < 6 && (type === 'wide') ) {
      setTotalScore(totalScore + 1);
    }
  }
  const handleNoBallButtonClick =(runs) =>{
    if (wickets<10 && balls < 6 && typeof runs === 'number'){
      setTotalScore(totalScore + runs);
    }
  }

  const handleNoBall = (type,runs) => {
    if (wickets < 10 && balls < 6 && (type === 'noball') ) {
      swal.fire("enter runs scored");
    }
    handleNoBallButtonClick(runs);
  }
  const handleLegButtonClick = (runs) => {
    if (wickets<10 && balls < 6 && typeof runs === 'number') {
      setTotalScore(totalScore + runs);
    
    }
  };

  const handleBye = (type) => {
    if (wickets < 10 && balls < 6 && (type === 'bye') ) {
      swal.fire("enter runs scored");
     
    }
    handleLegButtonClick();
  }

  const handleLegBye = (type,runs) => {
    if (wickets < 10 && balls < 6 && (type === 'legBye') ) {
      swal.fire("enter runs scored");
    }
    handleLegButtonClick();
  }
  
  
  return (
    <Wrapper>
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
      <Button label="Wicket" onClick = {handleWicketButtonClick}  />
      <Button label="Undo" type = "undo" onClick = {handleUndo}/>
    </ScoreButtons>
      
    <ScoreButtons>
       <Button label="Reset" onClick={() => handleRunButtonClick('reset')} />
    </ScoreButtons>
    </Wrapper>
  );
}

export default App;
