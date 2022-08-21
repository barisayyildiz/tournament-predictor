import { useState } from "react";
import { Link } from "react-router-dom";

import Group from "../components/Group";
import { groups } from "../constants";

export default function GroupPage() {
  const [groupState, setGroupState] = useState(groups);
  console.log(groupState);

  const generateKnockOutGames = () => {
    return [
      {
        id: 0,
        teams: {
          first: groupState["B"][1],
          second: groupState["A"][2],
        },
        next: 8,
      },
      {
        id: 1,
        teams: {
          first: groupState["C"][0],
          second: groupState["D"][3],
        },
        next: 8,
      },
      {
        id: 2,
        teams: {
          first: groupState["A"][0],
          second: groupState["B"][3],
        },
        next: 9,
      },
      {
        id: 3,
        teams: {
          first: groupState["D"][1],
          second: groupState["C"][2],
        },
        next: 9,
      },
      {
        id: 4,
        teams: {
          first: groupState["B"][0],
          second: groupState["A"][3],
        },
        next: 10,
      },
      {
        id: 5,
        teams: {
          first: groupState["C"][1],
          second: groupState["D"][2],
        },
        next: 10,
      },
      {
        id: 6,
        teams: {
          first: groupState["A"][1],
          second: groupState["B"][2],
        },
        next: 11,
      },
      {
        id: 7,
        teams: {
          first: groupState["D"][0],
          second: groupState["C"][3],
        },
        next: 11,
      },
      {
        id: 8,
        teams: {
          first: null,
          second: null,
        },
        next: 12,
      },
      {
        id: 9,
        teams: {
          first: null,
          second: null,
        },
        next: 12,
      },
      {
        id: 10,
        teams: {
          first: null,
          second: null,
        },
        next: 13,
      },
      {
        id: 11,
        teams: {
          first: null,
          second: null,
        },
        next: 13,
      },
      {
        id: 12,
        teams: {
          first: null,
          second: null,
        },
        next: 14,
      },
      {
        id: 13,
        teams: {
          first: null,
          second: null,
        },
        next: 14,
      },
      {
        id: 14,
        teams: {
          first: null,
          second: null,
        },
        next: null,
      },
    ];
  };

  return (
    <div className="flex flex-col justify-between items-center">
      <div className="flex flex-wrap my-40 justify-center items-start gap-20">
        {Object.keys(groupState).map((name, index) => {
          return (
            <Group
              name={name}
              teams={groupState[name]}
              groups={groupState}
              setGroups={setGroupState}
            />
          );
        })}
      </div>
      <div>
        <Link
          style={{
            backgroundColor: "#56C0FF",
          }}
          className="py-4 px-6 rounded-xl text-white text-lg"
          to="/knockout"
          state={{ state: generateKnockOutGames() }}
        >
          Continue
        </Link>
      </div>
    </div>
  );
}
