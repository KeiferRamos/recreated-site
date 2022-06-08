import React from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

function SimulatorTable({
  header,
  data,
  days,
  lesson,
  total,
  selected,
  setSelected,
}) {
  const openTable = () => {
    if (selected == header) {
      setSelected(null);
    } else {
      setSelected(header);
    }
  };

  return (
    <div className="simulator-table" onClick={() => openTable()}>
      <div className="simulator-table-header">
        <h3>{header}</h3>
        <div>{selected == header ? <FiChevronUp /> : <FiChevronDown />}</div>
      </div>
      {selected == header && (
        <>
          <div className="rate-info">
            <h4 className="note">NAME</h4>
            <h4>RANK</h4>
            <h4 className="note">DAYS</h4>
            <h4 className="note">LESSON PER DAY</h4>
            <h4>TOTAL LESSON</h4>
            <h4>GROSS</h4>
          </div>
          <div>
            {data.map(({ name, rank, gross }, i) => {
              return (
                <div className="rate-info" key={i}>
                  <p className="note">{name}</p>
                  <p>{rank}</p>
                  <p className="note">{days}</p>
                  <p className="note">{lesson}</p>
                  <p>{total}</p>
                  <p>{gross}</p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default SimulatorTable;
