import React, { useEffect, useState } from "react";
import "../styles/sidebar.css";
import useGlobalcontext from "../context/globalcontext";
import { FaTimes, FaBars } from "react-icons/fa";
import { dropdownInfo, links } from "../data.js";
import Link from "./link";
import DropDownMenu from "./dropdownMenu";

function Sidebar() {
  const { isOpen, setisOpen } = useGlobalcontext();
  const [selectedDropDown, setselectedDropDown] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setselectedDropDown(null);
    }
  }, [isOpen]);

  return (
    <div className={`${isOpen ? "show" : ""} sidebar`}>
      <div className="header">
        <button
          className="sidebar-btn"
          onClick={() => setisOpen(isOpen ? false : true)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <img
          src="https://weblioph.com/wp-content/uploads/2021/08/cropped-Weblio-Logo.png"
          className="logo"
        />
      </div>
      <div className="links">
        {links.map((link, i) => {
          return <Link key={i} {...link} />;
        })}
      </div>
      {dropdownInfo.map((item, i) => {
        return (
          <DropDownMenu
            key={i}
            {...item}
            isOpen={isOpen}
            selectedDropDown={selectedDropDown}
            setselectedDropDown={setselectedDropDown}
          />
        );
      })}
    </div>
  );
}

export default Sidebar;
