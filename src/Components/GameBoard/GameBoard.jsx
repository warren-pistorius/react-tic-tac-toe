import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onGameBoardPress, activePlayer }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function onCellClick(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      //NOTE: Don't change the previous gameboard. Create a new one.
      const newGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      newGameBoard[rowIndex][colIndex] = activePlayer; // or "O" based on the current player
      return newGameBoard;
    });

    onGameBoardPress();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <span key={colIndex} className="game-cell">
                <button onClick={() => onCellClick(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </span>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
