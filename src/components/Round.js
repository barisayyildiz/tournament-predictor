import Game from "./Game";

export default function Round({ round, games, knockout, setKnockout }) {
  return (
    <div className="flex flex-col justify-start items-center w-80 min-h-full">
      <h1 className="text-center text-2xl">{round}</h1>
      {games.map((game) => (
        <Game
          gameID={game.id}
          teamFirst={game.teams.first}
          teamSecond={game.teams.second}
          nextID={game.next}
          knockout={knockout}
          setKnockout={setKnockout}
        />
      ))}
    </div>
  );
}
