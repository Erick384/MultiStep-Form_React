import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
      <div className="right">
        <div className="right-txt">
          <div className="header">
            <h1>Personal info</h1>
            <br />
            <p>Please provide your name, email address, and phone number.</p>
          </div>
          <div className="form">
            <div className="inputs">
              <label htmlFor="text">NAME</label>
              <input type="text" placeholder="e.g.Stephen King" required />
            </div>
            <div className="inputs">
              <label htmlFor="text">Email Address</label>
              <input
                type="email"
                name="text"
                id="email"
                placeholder="e.g.stephenking@lorem.com"
                required
              />
            </div>
            <div class="inputs">
              <label for="number">Phone Number</label>
              <input
                type="tel"
                id="phonenumber"
                placeholder="e.g. +1 243 567 890"
                required
              />
            </div>
          </div>
        </div>
        <div className="button">
          <button><a href="./step2/step2.html">Next Step</a></button>
        </div>
      </div>
    </div>

    <div className="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">Erick-384</a>.
    </div>
    </>
  )
}

export default App
