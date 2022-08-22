import { useState } from "react";
import { useLocation } from "react-router";
import Xarrow from "react-xarrows";
import { Link } from "react-router-dom";

import Round from "../components/Round";
import Arrows from "../components/Arrows";

export default function KnockoutPage() {
  let {
    state: { state },
  } = useLocation();

  const [knockout, setKnockout] = useState(state);
  console.log(knockout);

  console.log(state);
  return (
    <div className="flex flex-col items-center gap-4 pt-3 pb-10">
      <div className="flex flew-row gap-20 justify-around px-5 py-3 w-full">
        <Round
          knockout={knockout}
          setKnockout={setKnockout}
          round={"Round of 16"}
          games={knockout.slice(0, 8)}
        />
        <Round
          knockout={knockout}
          setKnockout={setKnockout}
          round={"Quarterfinals"}
          games={knockout.slice(8, 12)}
        />
        <Round
          knockout={knockout}
          setKnockout={setKnockout}
          round={"Semifinals"}
          games={knockout.slice(12, 14)}
        />
        <Round
          knockout={knockout}
          setKnockout={setKnockout}
          round={"Final"}
          games={knockout.slice(14)}
        />
        <Arrows />
      </div>
      <div>
        <Link
          style={{
            backgroundColor: "#56C0FF",
          }}
          className="py-4 px-6 rounded-xl text-white text-lg"
          to="/"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
