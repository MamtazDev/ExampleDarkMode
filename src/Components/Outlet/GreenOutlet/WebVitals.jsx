import React from "react";
import "./GreenOutlet.css";
import bankcard from "../../../assets/Images/bank-card-line.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ToolTip from "./ToolTip";

const WebVitals = () => {
  return (
    <div className="section2_main">
      <div style={{ marginTop: "15px" }} className="row section_2_container">
        {/* first div */}
        <div className="col-sm-12 col-lg-4">
          <h2 className="gmt_heading">GTMetrix Grade</h2>
          <div iv className="gmt_child">
            <div className="B_div">
              <h1>B</h1>
            </div>
            <div className="B_div">
              <p>
                <img src={bankcard} alt="" />
              </p>
              <h1>Performance</h1>
            </div>
            <div className="B_div">
              <p>
                <img src={bankcard} alt="" />
              </p>
              <h1>Structure</h1>
            </div>
          </div>
        </div>
        {/* first div */}

        {/* second div */}
        <div className="col-sm-12 col-lg-4">
          <h2 className="gmt_heading">Core Web Vitals</h2>
          <div className="gmt_child">
            <div className="B_div">
              <p>
                <img src={bankcard} alt="" />
              </p>
              <h1>Label 1</h1>
            </div>
            <div className="B_div">
              <p>
                <img src={bankcard} alt="" />
              </p>
              <h1>Label 1</h1>
            </div>
            <div className="B_div">
              <p>
                <img src={bankcard} alt="" />
              </p>
              <h1>Label 1</h1>
            </div>
          </div>
        </div>
        {/* second div */}
        <div className="col-sm-12 col-lg-4 progressbar">
          <h2 className="gmt_heading">Lighthouse</h2>
          <div style={{ width: "200px", color: "#1A7B58", fontSize: "16px" }}>
            <CircularProgressbar
              value={80}
              text={`${80}/100`}
              styles={{
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                textColor: "#f88",
                trailColor: "#1A7B58",
                backgroundColor: "#1A7B58",
              }}
            />
          </div>
        </div>
      </div>

      <ToolTip />
    </div>
  );
};

export default WebVitals;
