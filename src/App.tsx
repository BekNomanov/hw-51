import React, {useState} from 'react';
import NumberBall from './Person/Person';
import './App.css';

const App: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

  const generateNewNumbers = () => {
    const newNumbers: number[] = [];
    while (newNumbers.length < 5) {
      const randomNumber: number = Math.floor(Math.random() * 32) + 5;
      if (!newNumbers.includes(randomNumber)) {
        newNumbers.push(randomNumber);
      }
    }
    newNumbers.sort((a, b) => a - b);
    setNumbers(newNumbers);
  };

  return (
    <div className='box'>
      <div style={{display: 'flex'}}>
        {numbers.map((num) => (
          <NumberBall key={num} number={num}/>
        ))}
      </div>
      <button className="btn" onClick={generateNewNumbers}>New numbers</button>
    </div>
  );
};

export default App;