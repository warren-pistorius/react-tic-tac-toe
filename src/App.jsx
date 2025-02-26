import { useState } from "react";
import Player from "./Components/Player/Player";
import GameBoard from "./Components/GameBoard/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function onGameBoardPress() {
    setActivePlayer((prevActivePlayer) =>
      prevActivePlayer === "X" ? "O" : "X"
    );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            initialName="Player 1"
            isActivePlayer={activePlayer === "X"}
          />
          <Player
            name="Player 2"
            symbol="O"
            initialName="Player 2"
            isActivePlayer={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onGameBoardPress={onGameBoardPress}
          activePlayer={activePlayer}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
