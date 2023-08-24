import React, { useState } from "react";
import Accordion from "./components/Accordion";
import "./components/Accordion.css";

const App = () => {
  const [checkId, setCheckId] = useState(-1);

  const checker = (str) => {
    setCheckId(Number(str));
  };

  return (
    <div>
      <div className="container">
        <Accordion
          handler={checker}
          id={1}
          active={checkId === 1}
          title="Accordion1"
          data1="lorem10"
        />
        <Accordion
          handler={checker}
          id={2}
          active={checkId === 2}
          title="Accordion1"
          data1="lorem10"
        />
        <Accordion
          handler={checker}
          id={3}
          active={checkId === 3}
          title="Accordion1"
          data1="lorem10"
        />
        <Accordion
          handler={checker}
          id={4}
          active={checkId === 4}
          title="Accordion1"
          data1="lorem10"
        />
      </div>
    </div>
  );
};

export default App;
