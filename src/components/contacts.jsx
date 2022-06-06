import React from "react";

function Contacts({ title, details }) {
  return (
    <div className="address">
      <h4>{title}</h4>
      {details.map((detail, i) => (
        <p key={i}>{detail}</p>
      ))}
    </div>
  );
}

export default Contacts;
