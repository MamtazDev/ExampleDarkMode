import React from "react";
import "./GreenOutlet.css";
import { RxCross2 } from "react-icons/rx";
import dropdown from "../../../assets/Images/arrow-down-s-line.png";
import InputValue from "./InputValue/InputValue";
import InputValue2 from "./InputValue/InputValue2";
import "../../../Responsive/Responsive.css";
const Audit = () => {
  const initialCityData = ["London", "Dubai", "Frankfurt"];
  const initialCityData1 = ["Mobile", "Desktop"];

  return (
    <div className="mb-[15px]">
      <div className="mt-[45px] first_div gap-4 pb-[42px]">
        <div className="text_cross ">
          <div className="site_audit_text flex content-around items-center gap-3">
            <small>Site Audit</small>
            <span>/</span>
            <small>Site Speed Audit</small>
          </div>
          <div>
            <p>
              <RxCross2 style={{ width: "16px", height: "16px" }} />
            </p>
          </div>
        </div>
        <div className="first_section_container flex-wrap gap-3">
          <div className="main_container ">
            <div className="">
              <p className="url_text">
                <span className="star">*</span> URL
              </p>
              <input
                type="text"
                className="url_input"
                defaultValue="https:www.example.com/this-page.com"
              />{" "}
              <br />
              <small className="question_page">
                Which page are you testing?
              </small>
            </div>
            <div>
              <p className="url_text">
                <span className="star">*</span> Location
              </p>
              <InputValue initialCityData={initialCityData} />
              <small className="question_page">
                What location do you want to test the site speed from?
              </small>
            </div>
            <div className="">
              <p className="url_text">
                <span className=" star">*</span> Mobile or Desktop
              </p>
              <InputValue2 initialCityData1={initialCityData1} />
              <small className="question_page">
                Do you want to test mobile, desktop or both?
              </small>
            </div>
          </div>
          <div className="relative parent">
            <div className="save_btn_container">
              <button className="btn save_btn" type="button">
                Save
              </button>
              <div className="ml_1 save_arrow_btn">
                <img src={dropdown} alt="" />
              </div>
            </div>

            <div className="absolute result">
              <button>Download</button>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audit;
