import React from "react";

function Info({ img, title, details }) {
  return (
    <div className="info">
      <img src={img} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{details}</p>
      </div>
    </div>
  );
}

export default Info;
