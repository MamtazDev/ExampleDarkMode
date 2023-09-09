import React from "react";
import circelCheckbox from "../../../assets/Images/checkbox-circle-fill.png";
import alert from "../.../../../../assets/Images/alert-fill.png";
import xcros from "../.../../../../assets/Images/close-line.png";
import information from "../.../../../../assets/Images/information-fill.png";
import AutoComplete from "./AutoComplete";
const ToolTip = () => {
  return (
    <div style={{ paddingBottom: "111px" }}>
      <div
        className="row"
        style={{
          width: "672px",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "19px",
        }}
      >
        <div className="col-lg-6 col-sm-12">
          <button
            type="button"
            className="tooltip_green mb-2 md:mb-0 text-white  font-medium rounded-lg text-sm px-3 py-2.5 text-center "
          >
            <span className="flex content-center items-center gap-3">
              <img src={circelCheckbox} alt="" />
              First Contentful Paint
            </span>
            <span>
              <img src={xcros} alt="" className="cross_design" />
            </span>
          </button>
        </div>
        <div className="col-lg-6 col-sm-12">
          <button
            type="button"
            className="tooltip_green mb-2 md:mb-0 text-white  font-medium rounded-lg text-sm px-3 py-2.5 text-center "
          >
            <span className="flex content-center items-center gap-3">
              <img src={circelCheckbox} alt="" />
              Total Blocking time
            </span>
            <span>
              <img src={xcros} alt="" className="cross_design" />
            </span>
          </button>
        </div>
      </div>
      {/* second row design */}
      <div
        className="row"
        style={{
          width: "672px",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "19px",
        }}
      >
        <div className="col-lg-6 col-sm-12">
          <button
            type="button"
            className="tooltip_yellow mb-2 md:mb-0 text-white  font-medium rounded-lg text-sm px-3 py-2.5 text-center "
          >
            <span className="flex content-center items-center gap-3">
              <img src={information} alt="" />
              Time To Interactive
            </span>
            <span>
              <img src={xcros} alt="" className="cross_design" />
            </span>
          </button>
        </div>
        <div className="col-lg-6 col-sm-12">
          <button
            type="button"
            className="tooltip_yellow mb-2 md:mb-0 text-white  font-medium rounded-lg text-sm px-3 py-2.5 text-center "
          >
            <span className="flex content-center items-center gap-3">
              <img src={information} alt="" />
              Largest Contentful Paint
            </span>
            <span>
              <img src={xcros} alt="" className="cross_design" />
            </span>
          </button>
        </div>
      </div>

      {/* third row */}
      <div
        className="row"
        style={{
          width: "672px",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "19px",
        }}
      >
        <div className="col-lg-6 col-sm-12">
          <button
            // data-tooltip-target="tooltip-bottom"
            // data-tooltip-placement="bottom"
            type="button"
            className="tooltip_green mb-2 md:mb-0 text-white  font-medium rounded-lg text-sm px-3 py-2.5 text-center "
          >
            <span className="flex content-center items-center gap-3">
              <img src={circelCheckbox} alt="" />
              Speed Index
            </span>
            <span>
              <img src={xcros} alt="" className="cross_design" />
            </span>
          </button>
        </div>
        <div className="col-lg-6 col-sm-12">
          <button
            data-tooltip-target="tooltip-bottom"
            data-tooltip-placement="bottom"
            type="button"
            className="tooltip_red mb-2 md:mb-0 text-white  font-medium rounded-lg text-sm px-3 py-2.5 text-center "
          >
            <span className="flex content-center items-center gap-3">
              <img src={alert} alt="" />
              Cumulative Layout Shift
            </span>
            <span>
              <img src={xcros} alt="" className="cross_design" />
            </span>
          </button>
          <div
            id="tooltip-bottom"
            role="tooltip"
            style={{ height: "132px", width: "328px" }}
            className="tooltip_text absolute z-10 invisible inline-block px-3 py-3 text-sm font-medium text-white bg-[#1E293B] rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            <div>
              <p>This is a tooltip</p>
              <button className="button_green">Button</button>
            </div>

            <div className="tooltip-arrow " data-popper-arrow></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolTip;
