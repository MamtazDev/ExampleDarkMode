import React from "react";
import "./GreenOutlet.css";
import bankcard from "../../../assets/Images/bank-card-line.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ToolTip from "./ToolTip";
import Chart from "./Chart";
import ApiIntegration from "../ApiIntegration/ApiIntegration";

const WebVitals = () => {
  return (
    <div className="section2_main">
      <div style={{ marginTop: "15px" }} className="row section_2_container">
        {/* first div */}
        <div className="col-sm-12 col-lg-4">
          <h2 className="gmt_heading">GTMetrix Grade</h2>
          <div iv className="gmt_child">
            <div className="B_div">
              <h1 className="b_text">B</h1>
            </div>
            <div className="B_div">
              <p>
                <img src={bankcard} alt="" />
              </p>
              <h3>Performance</h3>
            </div>
            <div className="B_div">
              <p>
                <img src={bankcard} alt="" />
              </p>
              <h3>Structure</h3>
            </div>
          </div>
        </div>
        {/* first div */}

        {/* second div */}
        <div className="col-sm-12 col-lg-4" style={{padding:"0px"}}>
          <h2 className="gmt_heading">Core Web Vitals</h2>
          <div className="gmt_child">
            <div className="B_div col-sm-12 col-lg-4">
              <p>
                <img src={bankcard} alt="" />
              </p>
              <h1>Label 1</h1>
            </div>
            <div className="B_div col-sm-12 col-lg-4">
              <p>
                <img src={bankcard} alt="" />
              </p>
              <h1>Label 1</h1>
            </div>
            <div className="B_div col-sm-12 col-lg-4">
              <p>
                <img src={bankcard} alt="" />
              </p>
              <h1>Label 1</h1>
            </div>
          </div>
        </div>
        {/* second div */}
        <div className="col-sm-12 col-lg-4 progressbar">
          <h2 className="gmt_heading mb-0">Lighthouse</h2>
          <Chart />
        </div>
      </div>

      <ToolTip />

      {/* <ApiIntegration/> */}
    </div>
  );
};

export default WebVitals;
