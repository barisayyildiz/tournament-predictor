import React, { useState, useRef } from "react";
import "../styles/App.scss";

import Team from "./Team";
import GroupRow from "./GroupRow";
import Group from "./Group";

function App() {
  return (
    <div className="App flex my-40 justify-center align-middle gap-20">
      <Group
        name="A"
        teams={[
          "Turkey",
          "Spain",
          "Montenegro",
          "Georgia",
          "Bulgaria",
          "Belgium",
        ]}
      />
      <Group
        name="A"
        teams={[
          "Turkey",
          "Spain",
          "Montenegro",
          "Georgia",
          "Bulgaria",
          "Belgium",
        ]}
      />
      <Group
        name="A"
        teams={[
          "Turkey",
          "Spain",
          "Montenegro",
          "Georgia",
          "Bulgaria",
          "Belgium",
        ]}
      />
      <Group
        name="A"
        teams={[
          "Turkey",
          "Spain",
          "Montenegro",
          "Georgia",
          "Bulgaria",
          "Belgium",
        ]}
      />
    </div>
  );
}

export default App;
