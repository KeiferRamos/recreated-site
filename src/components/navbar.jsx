import React from "react";
import "../styles/navbar.css";
import { FaBars } from "react-icons/fa";
import useGlobalContext from "../context/globalcontext";

function Navbar() {
  const { setisOpen } = useGlobalContext();

  return (
    <div className="navbar">
      <img
        src="https://weblioph.com/wp-content/uploads/2021/08/cropped-Weblio-Logo.png"
        className="logo"
      />
      <FaBars className="hamburger" onClick={() => setisOpen(true)} />
    </div>
  );
}

export default Navbar;
