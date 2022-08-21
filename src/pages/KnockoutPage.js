import { useState } from "react";
import { useLocation } from "react-router";
import Xarrow from "react-xarrows";

import Round from "../components/Round";

export default function KnockoutPage() {
  let {
    state: { state },
  } = useLocation();

  const [knockout, setKnockout] = useState(state);
  console.log(knockout);

  console.log(state);
  return (
    <div className="flex flew-row gap-10 items-center justify-around">
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
      <Xarrow start={"0"} end={"8"} strokeWidth={2} path={"grid"} />
      <Xarrow start={"1"} end={"8"} strokeWidth={2} path={"grid"} />
      <Xarrow start={"2"} end={"9"} strokeWidth={2} path={"grid"} />
      <Xarrow start={"3"} end={"9"} strokeWidth={2} path={"grid"} />
      <Xarrow start={"4"} end={"10"} strokeWidth={2} path={"grid"} />
      <Xarrow start={"5"} end={"10"} strokeWidth={2} path={"grid"} />
      <Xarrow start={"6"} end={"11"} strokeWidth={2} path={"grid"} />
      <Xarrow start={"7"} end={"11"} strokeWidth={2} path={"grid"} />
      <Xarrow start={"8"} end={"12"} strokeWidth={2} path={"grid"} />
      <Xarrow start={"9"} end={"12"} strokeWidth={2} path={"grid"} />
      <Xarrow start={"10"} end={"13"} strokeWidth={2} path={"grid"} />
      <Xarrow start={"11"} end={"13"} strokeWidth={2} path={"grid"} />
      <Xarrow start={"12"} end={"14"} strokeWidth={2} path={"grid"} />
      <Xarrow start={"13"} end={"14"} strokeWidth={2} path={"grid"} />
    </div>
  );
}
