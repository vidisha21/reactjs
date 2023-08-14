import React from 'react';

const RunSelector = ({ onSelectRun, countRuns }) => {
  const handleRunSelect = (e) => {
    const selectedRun = parseInt(e.target.value);
    if (countRuns) {
      onSelectRun(selectedRun);
    }
  };

  return (
    <select onChange={handleRunSelect}>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="6">6</option>
      
    </select>
  );
};

export default RunSelector;
