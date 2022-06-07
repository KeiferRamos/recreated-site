import React from "react";
import { useNavigate } from "react-router-dom";
import useGlobalcontext from "../context/globalcontext";

function Link({ name, logo, path }) {
  const { setisOpen } = useGlobalcontext();
  const navigate = useNavigate();

  const navigateUser = () => {
    window.scrollTo(0, 0);
    navigate(path);
    setisOpen(false);
  };

  return (
    <div className="link" onClick={() => navigateUser()}>
      <div className="icon">{logo}</div>
      <h3>{name}</h3>
    </div>
  );
}

export default Link;
