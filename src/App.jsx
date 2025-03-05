import { useState } from "react";
import Player from "./Components/Player/Player";
import GameBoard from "./Components/GameBoard/GameBoard";
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./Components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

//Deriving state

function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({ X: "Player 1", Y: "Player 2" });

  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = derivedActivePlayer(gameTurns);

  //console.log(WINNING_COMBINATIONS);

  let gameBoard = [...initialGameBoard.map((array) => [...array])];
  let winner;
  const hasDraw = gameTurns.length === 9 && !winner;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    //console.log(combination);
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol == thirdSquareSymbol
    ) {
      console.log("WINNER!!!");
      winner = players[firstSquareSymbol];
    }
  }

  function onGameBoardPress(rowIndex, colIndex) {
    setGameTurns((previousTurns) => {
      const currentPlayer = derivedActivePlayer(previousTurns);

      const newTurn = {
        square: { row: rowIndex, col: colIndex },
        player: currentPlayer,
      };

      if (
        previousTurns.length > 0 &&
        previousTurns[0].square.row == newTurn.square.row &&
        previousTurns[0].square.col == newTurn.square.col
      ) {
        console.warn("Clicking the same cell again...");
        return previousTurns;
      }

      let updatedTurns = [newTurn, ...previousTurns];
      return updatedTurns;
    });
    console.log(gameTurns);
  }

  function rematch() {
    setGameTurns([]);
    console.log("Rematch");
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((previousPlayers) => {
      return {
        ...previousPlayers,
        //NOTE: This syntax to set symbol
        [symbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            initialName="Player 1"
            isActivePlayer={currentPlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            name="Player 2"
            symbol="O"
            initialName="Player 2"
            isActivePlayer={currentPlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} rematch={rematch} />}
        <GameBoard
          onGameBoardPress={onGameBoardPress}
          activePlayer={currentPlayer}
          board={gameBoard}
        />
      </div>
      <Log log={gameTurns} />
    </main>
  );
}

export default App;
