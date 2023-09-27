import React, { useState, useEffect } from 'react';
import './index.css';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 10) {
      document.title = 'Dah 10 Bang!';
    } else {
      document.title = 'Kel 19 Kece';
    }
  }, [count]);

  useEffect(() => {
    if (count === 19) {
      document.title = 'akwoaokwkooka!';
    } else {
    }
  }, [count]);

  const countUp = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    setCount(count - 1);
};

  return (
    <div className="App">
      <h1>Tugas Modul 3 Kelompok 19</h1>
      <p>Counter: {count}</p>
      <div className="ViewButton"> 
        <div className="ViewButton2">
            <button onClick={countUp}> + </button>
            <button onClick={countDown}> - </button>
            </div>
         </div>
         {count === 10 ? <p2>Counter dah 10 bang!</p2> : null}
         {count === 19 ? <p2>Kelompok 19 Ni Bos!!</p2> : null}
    </div>
  );
}

export default App;
