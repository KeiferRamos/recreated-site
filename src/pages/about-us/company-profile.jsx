import React from "react";
import { companyHistory, companyInfo } from "../../data";
import "./company-profile.css";

function CompanyProfile() {
  return (
    <div className="company-profile">
      <h1>History</h1>
      <div className="history">
        {companyHistory.map(({ img, date, details }, i) => {
          return (
            <div key={i}>
              <img src={img} alt="" />
              <div>
                <h3>{date}</h3>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="overview">
        {companyInfo.map(({ title, details }, i) => {
          return (
            <div key={i}>
              <h1>{title}</h1>
              <p>{details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CompanyProfile;
