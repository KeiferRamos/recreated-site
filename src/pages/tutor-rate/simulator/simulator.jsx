import React, { useEffect, useState } from "react";
import Message from "../../../components/message";
import { hourlyRate } from "../../../data";
import "./simulator.css";

function Simulator() {
  const [selectedLessonCount, setSelectedLessonCount] = useState("1");
  const [selectedHourlyrate, setSelectedHourlyrate] = useState("200");
  const [taxRate, setTaxRate] = useState("");
  const [fee, setFee] = useState(0);

  useEffect(() => {
    setFee((selectedHourlyrate * selectedLessonCount) / 2);
  }, [selectedHourlyrate, selectedLessonCount]);

  useEffect(() => {
    setTaxRate(fee * 0.1);
  }, [fee]);

  return (
    <div className="simulator">
      <Message />
      <div className="simulator-calculator">
        <h1>Tutor Rate Simulator</h1>
        <h4>
          Fill up white cells on the left side to simulate your monthly tutorial
          fee!
          <span>
            This is assuming that there are no deductions for lesson attendance.
          </span>
        </h4>
        <div className="calculator">
          <div>
            <h4>Tutorial Fee</h4>
            <div className="input-field">
              <label>Completed Lessons*</label>
              <input
                required
                name="Completed Lessons"
                type="number"
                value={selectedLessonCount}
                onChange={(e) => setSelectedLessonCount(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label>Hourly Rate*</label>
              <select
                name="Hourly Rate"
                value={selectedHourlyrate}
                onChange={(e) => setSelectedHourlyrate(e.target.value)}
              >
                {hourlyRate.map((el, i) => (
                  <option value={el} key={i}>
                    {el}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="fee-info">
            <h3>Gross Tutorial Fee: {fee}</h3>
            <h3>Withholding Tax: {taxRate}</h3>
            <h3>Net Tutorial Fee: {fee - taxRate}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Simulator;
