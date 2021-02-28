import React from "react";
import './AboutService.css'

function AboutService(props) {
  const text = props.location.customNameData;
  return (
    <div className="infoPage">
      <div className="text-Box">
        <h2>{text}</h2>
      </div>
    </div>
  );
}

export default AboutService;
