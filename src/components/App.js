import React, { useState, useRef } from "react";
import "../styles/App.scss";

import Team from "./Team";
import GroupRow from "./GroupRow";
import Group from "./Group";

import { groups } from "../constants";

function App() {
  return (
    <div className="App flex flex-wrap my-40 justify-center items-start gap-20">
      {groups.map(({ name, teams }) => (
        <Group name={name} teams={teams} />
      ))}
    </div>
  );
}

export default App;
