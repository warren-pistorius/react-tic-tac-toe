import Player from "./Components/Player/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" initialName="Player 1" />
          <Player name="Player 2" symbol="O" initialName="Player 2" />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
