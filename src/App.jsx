import { useState } from 'react'
import PersonInfo from './Components/PersonInfo';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="body">
    <div className="container">
      <div className="left">
        <div className="left1">
          <div className="circle"><h3>1</h3></div>
          <div className="content">
            <span><a href="index.html">Step 1</a></span>
            <p>YOUR INFO</p>
          </div>
        </div>
        <div className="left1">
          <div className="circle"><h3>2</h3></div>
          <div className="content">
            <span> <a href="./step2/step2.html">Step 2</a></span>
            <p>SELECT PLAN</p>
          </div>
        </div>
        <div className="left1">
          <div className="circle"><h3>3</h3></div>
          <div className="content">
            <span><a href="./step3/step3.html">Step 3</a></span>
            <p>ADDS-ON</p>
          </div>
        </div>
        <div className="left1">
          <div className="circle"><h3>4</h3></div>
          <div className="content">
            <span> <a href="./step4/step4.html">Step 4</a></span>
            <p>SUMMARY</p>
          </div>
        </div>
      </div>
      
      <PersonInfo />
    </div>


    <div className="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">Erick-384</a>.
    </div>
    </div>
    </>
  )
}

export default App
