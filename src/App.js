import React, { useState } from 'react'
import Accordion from './components/Accordion'
import "./components/Accordion.css"

const App = () => {
  const arr = [false, false, false, false];
  const [checkId, setCheckId] = useState(arr);

  console.log(!checkId[0]);
  const checker = (str) =>{
    setCheckId(arr);
    checkId[str - 1] = true;
  }

  return (
    <div>
      <div className='container'>
        <Accordion handler={checker} id="1" active={checkId[0]} title="Accordion1" data1="lorem10" />
        <Accordion handler={checker} id="2" active={checkId[1]} title="Accordion1" data1="lorem10" />
        <Accordion handler={checker} id="3" active={checkId[2]} title="Accordion1" data1="lorem10" />
        <Accordion handler={checker} id="4" active={checkId[3]} title="Accordion1" data1="lorem10" />
      </div>
    </div>
  )
}

export default App
