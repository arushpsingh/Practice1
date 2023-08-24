import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({
  title,
  data1,
  active,
  handler,
  id
}) => {
    const [isShowText, setIsShowText] = useState({active});
    
    const handleClick = () =>{
        handler(id);
        setIsShowText(!isShowText);
    }

    return (
        <div>
            <div className="wrapper">
              <div className={isShowText ? 'titleBorder' : 'headingText'} onClick={handleClick}>
                <h3 className="title">{title}</h3>
              </div>
                <p className={isShowText ? 'paraText' : 'closed'}>
                    {data1}
                </p>
            </div>
        </div>
    );
};

export default Accordion;
