import React from "react";
import Audit from "./Audit";
import WebVitals from "./WebVitals";
import ApiIntegration from "../ApiIntegration/ApiIntegration";

const GreenOutlet = () => {
  return (
    <>
      <Audit />
      <WebVitals />
      {/* <ApiIntegration /> */}
    </>
  );
};

export default GreenOutlet;
