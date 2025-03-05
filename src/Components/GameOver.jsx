export default function GameOver({ winner, rematch }) {
  return (
    <div id="game-over">
      <h2>Game over</h2>

      {winner && <p>{winner} won!</p>}
      {!winner && <p>No winner! Draw!</p>}
      <p>
        <button onClick={rematch}>Rematch!</button>
      </p>
    </div>
  );
}
