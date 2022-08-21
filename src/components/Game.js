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
  won,
}) {
  const handleOnClick = (name) => {
    if (!nextID) {
      const temp = [...knockout];
      temp[gameID].won = name;
      setKnockout(temp);
      return;
    }

    const curGame = knockout[gameID];
    curGame.won = name;
    const temp = [...knockout];
    const nextGame = knockout.find((k) => k.id === nextID);
    if (nextGame) {
      if (gameID % 2 === 0) {
        nextGame.teams.first = name;
      } else {
        nextGame.teams.second = name;
      }
    }
    temp.splice(nextID, 1, nextGame);
    let nextRounds;
    let nextRoundStart;

    // 1 tur ve sonrasındaki galipleri siler
    if (gameID <= 7) {
      nextRoundStart = 8;
      nextRounds = temp.slice(nextRoundStart);
    } else if (gameID <= 11) {
      nextRoundStart = 12;
      nextRounds = temp.slice(nextRoundStart);
    }

    if (nextRounds) {
      nextRounds = nextRounds.map((nextR) => {
        return {
          ...nextR,
          won: null,
        };
      });
      temp.splice(nextRoundStart, nextRounds.length, ...nextRounds);
    }

    // 2 tur ve sonrasındaki maçları siler
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
          won: null,
        };
      });
      setKnockout(
        temp.splice(nextRoundStart, nextRounds.length, ...nextRounds)
      );
      setKnockout(temp);
    } else {
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
            won === teamFirst && teamFirst ? "rgb(86, 192, 255)" : ""
          }`,
          color: `${won === teamFirst && teamFirst ? "#ffffff" : ""}`,
        }}
        onClick={() => handleOnClick(teamFirst)}
        // onClick={() => setSelected(selected !== 1 && teamFirst ? 1 : null)}
        name={teamFirst}
      />
      <TeamWrapper
        style={{
          backgroundColor: `${
            won === teamSecond && teamSecond ? "rgb(86, 192, 255)" : ""
          }`,
          color: `${won === teamSecond && teamSecond ? "#ffffff" : ""}`,
        }}
        onClick={() => handleOnClick(teamSecond)}
        // onClick={() => setSelected(selected !== 2 && teamSecond ? 2 : null)}
        name={teamSecond}
      />
    </div>
  );
}
