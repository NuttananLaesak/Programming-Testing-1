import React, { useState } from 'react';
import { sortByFrequencyAndValue } from './functionsort'; 
import './App.css'; 

// ใช้ useState ของ React เพื่อสร้างสถานะ (state) สำหรับเก็บข้อมูลของอาร์เรย์ต้นทาง (inputArray) และอาร์เรย์ที่เรียงแล้ว (sortedArray)
function App() {
  const [inputArray] = useState([2, 3, 4, 4, 34, 6, 7, 2, 3, 7, 8, 8, 8, 7, 9, 10, 41, 8]);
  const [sortedArray, setSortedArray] = useState([]);

// ใช้ฟังชั่น (sortByFrequencyAndValue) เรียงเลขโดยนับความถี่จำนวนเลขของ (inputArray) เเล้วนำไปเก็บที่ (setSortedArray)
  const handleSort = () => {
    const result = sortByFrequencyAndValue(inputArray);
    setSortedArray(result);
  };

  return (
    <div className="container">
      <h1>ระบบเรียงเลขตามความถี่จำนวนตัวเลข</h1>
      
      <div className="array-display">
        <h2>ค่าเลข Input ที่กำหนด</h2>
        <ul className="array-list">
          {inputArray.map((num, index) => (
            <li key={index} className="array-item">{num}</li>
          ))}
        </ul>
      </div>

      <button onClick={handleSort}>กดเพื่อเรียงเลข</button>
      
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
