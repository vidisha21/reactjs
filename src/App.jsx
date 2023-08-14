import React, { useRef, useState } from 'react';
import ScoreCard from './component/scoreCard';
import Button from './component/button';
import { ScoreButtons, Wrapper } from './style';



const App = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [overs, setOvers] = useState(0);

  const prevGameStateRef = useRef({ totalScore, wickets, balls, overs });

  const updatePrevGameState = () => {
    prevGameStateRef.current = { totalScore, wickets, balls, overs };
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

  const handleNoBallButtonClick = (runs) => {
    if (wickets < 10 && balls < 6 && typeof runs === 'number') {
      setTotalScore(totalScore + runs);   
    }  
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
 


  const handleNoBall = (type) => {
    if (wickets < 10 && balls < 6 && (type === 'noball') ) {
      setTotalScore(totalScore + 1);
    
      updatePrevGameState();

    
    }
    handleNoBallButtonClick(runs);
  }

  // const handleNoBall = () => {
  //   if (wickets < 10 && balls < 6) {
  //     swal.fire({
  //       title: 'Enter runs scored',
  //       input: 'number',
  //       showCancelButton: true,
  //       confirmButtonText: 'Submit',
  //       preConfirm: (runs) => {
  //         if (!isNaN(runs)) {
  //           setTotalScore(totalScore + Number(runs)); // Add runs to the total score
  //         } else {
  //           swal.showValidationMessage('Please enter a valid number');
  //         }
  //       },
  //     });
  //   }
  // };
  

  const handleLegButtonClick = (runs) => {
    if (wickets<10 && balls < 6 && typeof runs==='number' ) {
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
      setTotalScore(totalScore + 1);
      handleNoBallButtonClick(runs);
    }
    handleLegButtonClick();
  }

  const handleUndo = () => {
    const prevGameState = prevGameStateRef.current;
    setTotalScore(prevGameState.totalScore);
    setWickets(prevGameState.wickets);
    setBalls(prevGameState.balls);
    setOvers(prevGameState.overs);
  };

  

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
