import React from "react";
import "./GreenOutlet.css";
import bankcard from "../../../assets/Images/bank-card-line.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ToolTip from "./ToolTip";
import Chart from "./Chart";

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
          <Chart />
        </div>
      </div>

      <ToolTip />
    </div>
  );
};

export default WebVitals;
