import React, { useState } from 'react';
import Square from './components/Square';
import './App.css';

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);
  return (
    <div className="App">
      <Square squares={squares}
        setSquares={setSquares}
        player={player}
        setPlayer={setPlayer}></Square>
    </div>
  );
}
console.log(props.squares, props.player)


export default App;
