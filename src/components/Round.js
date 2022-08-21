import Game from "./Game";

export default function Round({ round, games, knockout, setKnockout }) {
  console.log(games);
  return (
    <div className="flex flex-col grow w-80 min-h-full">
      <h1 className="text-center text-2xl">{round}</h1>
      <div className="flex flex-col justify-around grow">
        {games.map((game) => (
          <Game
            game={game}
            gameID={game.id}
            teamFirst={game.teams.first}
            teamSecond={game.teams.second}
            nextID={game.next}
            knockout={knockout}
            setKnockout={setKnockout}
            won={game.won}
          />
        ))}
      </div>
    </div>
  );
}
