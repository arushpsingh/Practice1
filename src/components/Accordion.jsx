import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ title, data1, active, handler, id }) => {
  const handleClick = () => {
    handler(id);
  };

  return (
    <div>
      <div className="wrapper">
        <div
          className={active ? "titleBorder" : "headingText"}
          onClick={handleClick}
        >
          <h3 className="title">{title}</h3>
        </div>
        <p className={active ? "paraText" : "closed"}>{data1}</p>
      </div>
    </div>
  );
};

export default Accordion;
