import React, { useState } from 'react';
import { sortByFrequencyAndValue } from './functionsort'; 
import './App.css'; 

function App() {
  const [inputArray, setInputArray] = useState([2, 3, 4, 4, 34, 6, 7, 2, 3, 7, 8, 8, 8, 7, 9, 10, 41, 8]);
  const [sortedArray, setSortedArray] = useState([]);

  const handleSort = () => {
    const result = sortByFrequencyAndValue(inputArray);
    setSortedArray(result);
  };

  return (
    <div className="container">
      <h1>Programming Testing 1</h1>
      
      <div className="array-display">
        <h2>ค่าเลข Input ที่กำหนดในโค๊ด</h2>
        <ul className="array-list">
          {inputArray.map((num, index) => (
            <li key={index} className="array-item">{num}</li>
          ))}
        </ul>
      </div>

      <button onClick={handleSort}>กดเพื่อเรียงตามโจทย์</button>
      
      <div className="sorted-display">
        <h2>ผลการเรียงเลข</h2>
        <ul className="array-list">
          {sortedArray.map((num, index) => (
            <li key={index} className="array-item">{num}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
