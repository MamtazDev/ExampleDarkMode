import React from "react";
import "./GreenOutlet.css";
import { RxCross2 } from "react-icons/rx";
import AutoComplete from "./AutoComplete";
import AutoComplete2 from "./AutoComplete2";
const Audit = () => {
  return (
    <div>
      <div className="mt-10 first_div">
        <div className="text_cross">
          <div className="flex content-around items-center gap-3">
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
            <div className="mt-8">
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
            <div className="mt-8">
              <p className="url_text">
                <span className="star">*</span> Location
              </p>
              {/* <input type="text" className="url_input" defaultValue="" /> <br /> */}
              <AutoComplete/>
              <small className="question_page">
                What location do you want to test the site speed from?
              </small>
            </div>
            <div className="mt-8">
              <p className="url_text">
                <span className=" star">*</span> Mobile or Desktop
              </p>
              {/* <input type="text" className="url_input" defaultValue="" /> <br /> */}
              <AutoComplete2/>
              <small className="question_page">
                Do you want to test mobile, desktop or both?
              </small>
            </div>
          </div>

          <div>
            <div class="dropdown">
              <button
                class="btn save_btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Save
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audit;
