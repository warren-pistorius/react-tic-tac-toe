export default function Log({ log }) {
  return (
    <ol id="log">
      {log &&
        log.map(({ player, square: { row, col } }) => (
          <li key={`${player}-${row}-${col}`}>
            {player} selected {row}, {col}
          </li>
        ))}
    </ol>
  );
}
