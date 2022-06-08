import React, { useState } from "react";
import Message from "../../../components/message";
import { rulesContent } from "../../../data";
import "./rules.css";

function Rules() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="rules">
      <Message />
      <div className="rules-selection">
        {rulesContent.map(({ header }, i) => (
          <h4
            style={{ background: `${selected == i ? "#7fa27d" : "#e1d57f"}` }}
            key={i}
            onClick={() => setSelected(i)}
          >
            {header}
          </h4>
        ))}
      </div>
      {rulesContent[selected].content}
    </div>
  );
}

export default Rules;
