import React, { useState } from "react";
import { rulesContent } from "../../../data";
import "./rules.css";

function Rules() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="rules">
      <div className="some-text">
        <div className="blurred"></div>
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
        <p>
          Weblio’s mission is to expand mankind’s possibilties. Our tutors’ role
          is important in fullfiling our mission by conducting quality lessons
          to our customers. Our tutor rates start from PHP 100 per hour to as
          much as PHP 200 per hour. Weblio tutors are considered independent
          contractors. Please see the rates below so that you can have an idea.
        </p>
      </div>
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
