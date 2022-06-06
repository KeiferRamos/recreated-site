import React, { useState } from "react";
import "./home.css";
import { qualificationAndRequirements } from "../../data";
import Info from "../../components/info";

function Home() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="home">
      <div className="image-container">
        <div className="blurred"></div>
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1532&q=80"
          alt=""
        />
        <div className="text">
          <h1>BE A HOME-BASED TUTOR NOW</h1>
          <button>APPLY NOW</button>
        </div>
      </div>
      <div className="selection">
        {qualificationAndRequirements.map((data, i) => {
          return (
            <h3
              key={i}
              style={{ background: `${selected == i ? "#4e693f" : "#ebbd42"}` }}
              onClick={() => setSelected(i)}
            >
              {data.title}
            </h3>
          );
        })}
      </div>
      <div className="information">
        {qualificationAndRequirements[selected].datas.map((data, i) => {
          return <Info key={i} {...data} />;
        })}
      </div>
      <img
        src="https://weblioph.com/wp-content/uploads/2020/09/new-application-map2020.png"
        className="application-map"
      />
    </div>
  );
}

export default Home;
