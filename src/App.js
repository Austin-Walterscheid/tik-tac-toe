import React, { useState } from 'react';
import Square from './components/Square';
import './App.css';

function App() {

  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);
  function calculateWinner(arr) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            arr[a] &&
            arr[a] === arr[b] &&
            arr[a] === arr[c]
        ) {
            return `${arr[a]} won!`;
        }
    }
    return "Who will win?";
}
  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""])
    setPlayer(true)

}
  return (
    <div className="App">
      <button onClick={handleClick}>Reset</button>
        <div className="container">
            {squares.map((val, index) => {
                return (
                    <Square
                        setSquares={setSquares}
                        index={index}
                        squareValue={val}
                        squares={squares}
                        player={player}
                        setPlayer={setPlayer}
                    />
                );
            })}
            
        </div>
        <span>{calculateWinner(squares)}</span>
    </div>
);
}



export default App;
