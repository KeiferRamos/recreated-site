import React from "react";
import { useNavigate } from "react-router-dom";

function Link({ name, logo, path }) {
  const navigate = useNavigate();
  return (
    <div className="link" onClick={() => navigate(path)}>
      <div className="icon">{logo}</div>
      <h3>{name}</h3>
    </div>
  );
}

export default Link;
