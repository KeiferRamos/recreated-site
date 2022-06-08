import React, { useState } from "react";
import { simulatorInfo } from "../data";
import SimulatorTable from "./simulator-table";

function SimulatorInfo() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="simulator-info">
      <h3>Your compensation is calculated with the following formula:</h3>
      <ul>
        <li>Hourly rate * Number of completed lessons</li>
        <li>Less penalty</li>
        <li>Less withholding tax</li>
      </ul>
      <div className="rate-guide">
        <h4>
          We have prepared a Simulator so you can have an estimate on your
          tutorial fee. Note: The Simulator shows gross pay (before taxes in
          accordance to the law) given a tutor has 0 penalties
        </h4>
        <div>
          {simulatorInfo.map((table, i) => {
            return (
              <SimulatorTable
                key={i}
                {...table}
                selected={selected}
                setSelected={setSelected}
              />
            );
          })}
        </div>
      </div>
      <ul className="more-info">
        <li>
          Constant opening of schedule would attract loyal students in the
          future.
        </li>
        <li>
          If you are busy, you may still open and conduct your lessons whenever
          you want to. Enjoy flexible home-based teaching!
        </li>
      </ul>
    </div>
  );
}

export default SimulatorInfo;
