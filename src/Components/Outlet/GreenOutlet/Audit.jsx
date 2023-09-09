import React from "react";
import "./GreenOutlet.css";
import { RxCross2 } from "react-icons/rx";
import AutoComplete from "./AutoComplete";
import AutoComplete2 from "./AutoComplete2";
import dropdown from "../../../assets/Images/arrow-down-s-line.png";
const Audit = () => {
  return (
    <div>
      <div className="mt-10 first_div">
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
        {/* url locationmobile or desktop div */}
        <div className="first_section_container">
          <div className="main_container">
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
            <div className="">
              <p className="url_text">
                <span className="star">*</span> Location
              </p>
              <AutoComplete />
              <small className="question_page">
                What location do you want to test the site speed from?
              </small>
            </div>
            <div className="">
              <p className="url_text">
                <span className=" star">*</span> Mobile or Desktop
              </p>
              <AutoComplete2 />
              <small className="question_page">
                Do you want to test mobile, desktop or both?
              </small>
            </div>
          </div>

          <div>
            <div className="save_btn_container">
              <button className=" save_btn" type="button">
                Save
              </button>
              <div className="ml_1 save_arrow_btn">
                <img src={dropdown} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audit;
