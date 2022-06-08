import React from "react";
import { ratePerLessonInfo } from "../data";

function RateInfo() {
  return (
    <div>
      <div>
        <header className="rate-info">
          <h4>rank</h4>
          <h4>per lesson</h4>
          <h4>per hour</h4>
          <h4 className="note">note</h4>
        </header>
        {ratePerLessonInfo.map(({ rank, perLesson, perHour, note }, i) => {
          return (
            <div className="rate-info" key={i}>
              <p>{rank}</p>
              <p>{perLesson}</p>
              <p>{perHour}</p>
              <p className="note">{note}</p>
            </div>
          );
        })}
      </div>
      <div></div>
      <ul className="more-info">
        <li>
          Tutor rank will increase or decrease depending on whether or not you
          comply to the criteria set by the company. This will be disclosed in
          the Tutor Contract once you become a Weblio Tutor.
        </li>
        <li>
          To move up a rank, you should deliver fun and satisfying lessons all
          the time with your customers. You will learn more about this during
          the New Tutors Workshop.
        </li>
      </ul>
    </div>
  );
}

export default RateInfo;
