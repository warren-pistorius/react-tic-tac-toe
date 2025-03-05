import React, { useState } from "react";

export default function GameBoard({ onGameBoardPress, board }) {
  //

  // function onCellClick(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     //NOTE: Don't change the previous gameboard. Create a new one.
  //     const newGameBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     newGameBoard[rowIndex][colIndex] = activePlayer; // or "O" based on the current player
  //     return newGameBoard;
  //   });

  //   onGameBoardPress();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <span key={colIndex} className="game-cell">
                <button
                  onClick={() => onGameBoardPress(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
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
