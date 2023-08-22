import React from 'react'
import Accordion from './components/Accordion'
import "./components/Accordion.css"

const App = () => {
  return (
    <div>
      <div className='container'>
        <Accordion title="Accordion1" data1="lorem10
        " />
      </div>
    </div>
  )
}

export default App
