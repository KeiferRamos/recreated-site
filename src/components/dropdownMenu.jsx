import React from "react";
import "../styles/dropdown.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function DropDownMenu({
  header,
  selection,
  logo,
  selectedDropDown,
  setselectedDropDown,
  isOpen,
}) {
  const openDropDownMenu = () => {
    if (selectedDropDown == header) {
      setselectedDropDown(null);
    } else {
      setselectedDropDown(header);
    }
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
        selection.map(({ name, path }, i) => <p key={i}>{name}</p>)}
    </div>
  );
}

export default DropDownMenu;
