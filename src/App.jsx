import React, { useRef, useState } from 'react';
import ScoreCard from './component/scoreCard';
import Button from './component/button';
import { ScoreButtons, Wrapper } from './style';
import Swal from 'sweetalert2';

const App = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [overs, setOvers] = useState(0);

  const prevGameStateRef = useRef({ totalScore, wickets, balls, overs });

  const [last10Balls, setLast10Balls] = useState([]);

  const updatePrevGameState = () => {
    prevGameStateRef.current = { totalScore, wickets, balls, overs };
  };

  const handleRunButtonClick = (runs, type) => {
      if (wickets<10 && balls < 6 && typeof runs === 'number') {
        setTotalScore(totalScore + runs);
        setBalls(balls + 1);

        if (type) {
          updateLast10Balls(runs, type);
        }
      }
      else if( runs === 'reset'){
        setTotalScore(0);
        setBalls(0);
        setWickets(0);
        setOvers(0);
        setLast10Balls([]);
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
    updatePrevGameState();
  }

  const updateLast10Balls = (runs, type) => {
    let label = runs;
    if (type === 'wide') label = 'wd';
    else if (type === 'noball') label = 'nb';
    else if (type === 'bye') label = 'bye';
    else if (type === 'legBye') label = 'lbye';
    else if (type === 'wicket') label = 'w';

    const updatedLast10Balls = [...last10Balls, label];
    if (updatedLast10Balls.length > 10) {
      updatedLast10Balls.shift();
    }
    setLast10Balls(updatedLast10Balls);
  };


  const handleNoBall = () => {
      if (wickets < 10 && balls < 6) {
        Swal.fire({
          title: 'Enter runs scored',
          input: 'number',
          showCancelButton: true,
          confirmButtonText: 'Submit',
          preConfirm: (runs) => {
            if (!isNaN(runs)) {
              setTotalScore(totalScore + Number(runs) + 1); 
              
            } else {
              Swal.showValidationMessage('Please enter a valid number');
            }
            updatePrevGameState();
          },
        });
      }
    }

  const handleBye = () => {
    if (wickets < 10 && balls < 6) {
      Swal.fire({
        title: 'Enter runs scored',
        input: 'number',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        preConfirm: (runs) => {
          if (!isNaN(runs)) {
            setTotalScore(totalScore + Number(runs)); 
            setBalls(balls + 1);
            updateOvers();
          } else {
            Swal.showValidationMessage('Please enter a valid number');
          }
          updatePrevGameState();
        },
      });
    }
  }

  const handleLegBye = () => {
    if (wickets < 10 && balls < 6) {
      Swal.fire({
        title: 'Enter runs scored',
        input: 'number',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        preConfirm: (runs) => {
          if (!isNaN(runs)) {
            setTotalScore(totalScore + Number(runs)); 
            setBalls(balls + 1);
            updateOvers();
          } else {
            Swal.showValidationMessage('Please enter a valid number');
          }
          updatePrevGameState();
        },
      });
    }
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

    <last10Balls>
      <h2>
        {last10Balls.map((label, index) => (
          <span key={index} style={{ margin: '10px' }}>
            {label}
          </span>
        ))}
      </h2>
    </last10Balls>

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
      <Button label="Wicket" type = "wicket"onClick = {handleWicketButtonClick}  />
      <Button label="Undo" type = "undo" onClick = {handleUndo}/>
    </ScoreButtons>
      
    <ScoreButtons>
       <Button label="Reset" onClick={() => handleRunButtonClick('reset')} />
    </ScoreButtons>
    </Wrapper>
  );
}

export default App;