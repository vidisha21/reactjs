import React from 'react';
import { ScoreInfo, Wrapper } from './style';

const ScoreCard = ({ totalScore, wickets, overs, balls }) => {
  return (
    <Wrapper>
      <h1>Cricket Scorecard</h1>
      <ScoreInfo>
        <h2>Score: {totalScore}/{wickets === 10 ? '' : wickets} ({`${overs}.${balls}`})</h2>      
      </ScoreInfo>
    </Wrapper>
  );
};

export default ScoreCard;