import { useState } from "react";
import Xarrow from "react-xarrows";

import Team from "./Team";

const TeamWrapper = ({ name, onClick, style }) => {
  return (
    <div
      style={{
        cursor: "pointer",
        width: "100%",
        ...style,
      }}
      className="py-2 px-4"
      onClick={onClick}
    >
      <Team name={name}></Team>
    </div>
  );
};

export default function Game({
  teamFirst,
  teamSecond,
  gameID,
  nextID,
  knockout,
  setKnockout,
}) {
  const [selected, setSelected] = useState(null);

  const handleOnClick = (name) => {
    const temp = [...knockout];
    const nextGame = knockout.find((k) => k.id === nextID);
    if (gameID % 2 === 0) {
      nextGame.teams.first = name;
    } else {
      nextGame.teams.second = name;
    }
    temp.splice(nextID, 1, nextGame);
    let nextRounds;
    let nextRoundStart;

    if (gameID <= 7) {
      nextRoundStart = 12;
      nextRounds = temp.slice(nextRoundStart);
    } else if (gameID <= 11) {
      nextRoundStart = 14;
      nextRounds = temp.slice(nextRoundStart);
    }

    if (nextRounds) {
      nextRounds = nextRounds.map((nextR) => {
        return {
          ...nextR,
          teams: {
            first: null,
            second: null,
          },
        };
      });
      setKnockout(
        temp.splice(nextRoundStart, nextRounds.length, ...nextRounds)
      );
      setSelected(selected !== name ? name : selected);
      setKnockout(temp);
    } else {
      setSelected(selected !== name ? name : selected);
      setKnockout(temp);
    }
  };

  return (
    <div
      id={gameID}
      style={{
        backgroundColor: "#f2f2f2",
      }}
      className="flex flex-col self-start  w-full my-4 justify-center items-start gap-2"
    >
      <TeamWrapper
        style={{
          backgroundColor: `${
            selected === teamFirst && teamFirst ? "rgb(86, 192, 255)" : ""
          }`,
          color: `${selected === teamFirst && teamFirst ? "#ffffff" : ""}`,
        }}
        onClick={() => handleOnClick(teamFirst)}
        // onClick={() => setSelected(selected !== 1 && teamFirst ? 1 : null)}
        name={teamFirst}
      />
      <TeamWrapper
        style={{
          backgroundColor: `${
            selected === teamSecond && teamSecond ? "rgb(86, 192, 255)" : ""
          }`,
          color: `${selected === teamSecond && teamSecond ? "#ffffff" : ""}`,
        }}
        onClick={() => handleOnClick(teamSecond)}
        // onClick={() => setSelected(selected !== 2 && teamSecond ? 2 : null)}
        name={teamSecond}
      />
    </div>
  );
}
