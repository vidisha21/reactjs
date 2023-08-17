import React, { useRef, useState } from 'react';
import ScoreCard from './component/scoreCard';
import { Wrapper, ScoreButton,ResetButton } from './style';
import Swal from 'sweetalert2';


const App = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [overs, setOvers] = useState(0);
  const [last10Balls, setLast10Balls] = useState([]);

  const prevGameStateRef = useRef({ totalScore, wickets, balls, overs });

  const updatePrevGameState = () => {
    prevGameStateRef.current = { totalScore, wickets, balls, overs };
  };

  const handleRunButtonClick = (runs, type) => {
      if (wickets<10 && balls < 6 && typeof runs === 'number') {
        setTotalScore(totalScore + runs);
        setBalls(balls + 1);
        
      if (type) {
         updateLast10Balls(type);
      } else {
      updateLast10Balls(runs); 
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

  const handleWicketButtonClick = (type) => {
    if (wickets < 10) {
      setWickets(wickets + 1);
      setBalls(balls + 1);
      updateOvers();
      updateLast10Balls('W', type);
      updatePrevGameState();
    }
  };

  const handleWideBall = (type) => {
    if (wickets < 10 && balls < 6 && (type === 'wide') ) {
      setTotalScore(totalScore + 1);
      updateLast10Balls('wd', type);
    }
    updatePrevGameState();
  }

  const updateLast10Balls = (runs, type) => {
    let label = runs;
    if (type === 'wide') label = 'wd';
    else if (type === 'noball') label = 'nb';
    else if (type === 'bye') label = 'bye';
    else if (type === 'wicket') label = 'w';

    const updatedLast10Balls = [...last10Balls, label];
    if (updatedLast10Balls.length > 10) {
      updatedLast10Balls.shift();
    }
    setLast10Balls(updatedLast10Balls);
  };

  const handleNoBall = (type) => {
      if (wickets < 10 && balls < 6) {
        Swal.fire({
          title: 'Enter runs scored',
          input: 'number',
          showCancelButton: true,
          confirmButtonText: 'Submit',
          preConfirm: (runs) => {
            if (!isNaN(runs)) {
              setTotalScore(totalScore + Number(runs) + 1);    
              updateLast10Balls('nb', type);
            } else {
              Swal.showValidationMessage('Please enter a valid number');
            }
            updatePrevGameState();
          },
        });
      }
    }

  const handleBye = (type) => {
    if (wickets < 10 && balls < 6) {
      Swal.fire({
        title: 'Enter runs scored',
        input: 'number',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        preConfirm: (runs) => {
          if (!isNaN(runs)) {
            setTotalScore(totalScore + Number(runs)); 
            updateLast10Balls('b', type);
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
    <div>
    <ScoreCard totalScore={totalScore} wickets={wickets} overs={overs} balls={balls} />
      <Wrapper>
        <last10Balls>
      <h2>
        {last10Balls.map((label, index) => (
          <span key={index} style={{ margin: '10px' }}>
            {label}
          </span>
        ))}
      </h2>
    </last10Balls>

    <div>
    <ScoreButton label="0" onClick={() => handleRunButtonClick(0)} >0</ScoreButton>
          <ScoreButton label="1" onClick={() => handleRunButtonClick(1)} >1</ScoreButton>
          <ScoreButton label="2" onClick={() => handleRunButtonClick(2)} >2</ScoreButton>
          <ScoreButton label="3" onClick={() => handleRunButtonClick(3)} >3</ScoreButton>

      </div>

      <div>
    
    <ScoreButton label="4" onClick={() => handleRunButtonClick(4)}>4</ScoreButton>
    <ScoreButton label="6" onClick={() => handleRunButtonClick(6)}>6</ScoreButton>
    <ScoreButton label="No Ball" type = "noball"  onClick={() => handleNoBall('noball')} >No Ball</ScoreButton>
    <ScoreButton label="Wide" type = "wide" onClick={() => handleWideBall('wide')}> Wide</ScoreButton>
    </div>

    <div>
      
    <ScoreButton label="Wicket" type = "wicket"  onClick={() => handleWicketButtonClick('wicket')} >Wicket</ScoreButton>
    <ScoreButton label="bye" type = "bye" onClick={() => handleBye('bye')}>Bye</ScoreButton>
    <ScoreButton label="legbye" type = "bye" onClick={() => handleBye('bye')}>LegBye</ScoreButton>  
    <ScoreButton label="Undo" type = "undo" onClick={handleUndo}>Undo</ScoreButton>
    </div>
   
    <div>
    
       <ResetButton label="Reset" onClick={() => handleRunButtonClick('reset')} >Reset</ResetButton>
       </div>
      </Wrapper>
    
    </div>
  );
}

export default App;