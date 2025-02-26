const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <span key={colIndex} className="game-cell">
                <button>{playerSymbol}</button>
              </span>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
