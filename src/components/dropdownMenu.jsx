import React from "react";
import "../styles/dropdown.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useGlobalContext from "../context/globalcontext";

function DropDownMenu({
  header,
  selection,
  logo,
  selectedDropDown,
  setselectedDropDown,
}) {
  const { setisOpen, isOpen } = useGlobalContext();
  const navigate = useNavigate();

  const openDropDownMenu = () => {
    setisOpen(true);
    if (selectedDropDown == header) {
      setselectedDropDown(null);
    } else {
      setselectedDropDown(header);
    }
  };

  const navigateUser = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
    setisOpen(false);
  };

  return (
    <div className="dropdown" onClick={() => openDropDownMenu()}>
      <div>
        <div className="icon">{logo}</div>
        <h3 className={`${isOpen ? "show-link" : ""} dropdown-link`}>
          {header}
        </h3>
        <div className="arrow">
          {selectedDropDown == header ? <FiChevronUp /> : <FiChevronDown />}
        </div>
      </div>
      {selectedDropDown == header &&
        selection.map(({ name, path }, i) => (
          <p key={i} onClick={() => navigateUser(path)}>
            {name}
          </p>
        ))}
    </div>
  );
}

export default DropDownMenu;
