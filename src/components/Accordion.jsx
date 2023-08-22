import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({
  title,
  data1
}) => {
    const [isShowText, setIsShowText] = useState(false);

    const handleClick = () =>{
      setIsShowText(!isShowText);
      console.log("hi", isShowText);
    }

    return (
        <div>
            <div className="wrapper">
              <div className="headingText" onClick={handleClick}>
                <h3 className="title">{title}</h3>
                <h3 className="title">{title}</h3>
              </div>
                <p className={isShowText ? 'paraText' : 'closed'}>
                    {data1}
                </p>
            </div>
            {/* <div>
                <h3 className="title">Accordion 2</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    beatae iste iusto aspernatur aperiam aut nisi ipsa. Fugit,
                    ipsum. Eligendi officia alias earum minus libero nisi omnis
                    velit consequuntur tempore sit? Dolor cum commodi quos
                    excepturi iusto, magnam velit cumque adipisci autem earum
                    ullam officiis. Nemo veritatis aliquid unde voluptas.
                </p>
            </div>
            <div>
                <h3 className="title">Accordion 3</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolores vero, minima eum inventore voluptate iusto debitis
                    expedita consequatur repudiandae eaque delectus vitae
                    adipisci cumque libero commodi voluptatibus totam
                    necessitatibus quasi animi quaerat fugit tenetur. Esse eos
                    iste totam ipsum nobis, perferendis consectetur nam at optio
                    distinctio nulla corrupti nihil ut.
                </p>
            </div> */}
        </div>
    );
};

export default Accordion;
