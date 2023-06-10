import React from 'react'
import "./AddsOn.css"


function AddsOn() {
  return (
    <div className="right">
        <div className="right-txt">
          <div className="header">
            <h1>Pick add-ons</h1>
            <br />
            <p>Add-ons help enhance your gaming experience.</p>
          </div>
          <div className="form">
            <div className="AddsOninput">
              <div className="input1">
                <div className="tick">
                  <input type="checkbox" name="check" />
                </div>
                <div className="input-txt">
                  <h3>Online service</h3>
                  <p>Access to multiplayer games</p>
                </div>
              </div>
              <div className="dollar">
                <span>+$1/mo</span>
              </div>
            </div>
            <div className="AddsOninput">
              <div className="input1">
                <div className="tick">
                  <input type="checkbox" name="check" />
                </div>
                <div className="input-txt">
                  <h3>Larger storage</h3>
                  <p>Extra 1TB of cloud save</p>
                </div>
              </div>
              <div className="dollar">
                <span>+$2/mo</span>
              </div>
            </div>
            <div className="AddsOninput">
              <div className="input1">
                <div className="tick">
                  <input type="checkbox" name="check" />
                </div>
                <div className="input-txt">
                  <h3>Customizable Profile</h3>
                  <p>Custom theme on your profile</p>
                </div>
              </div>
              <div className="dollar">
                <span>+$2/mo</span>
              </div>
            </div>
          </div>
          <div className="AddsOnbutton">
        <a href="./step3/step3.html">Go Back</a>
        <button>
          <a href="./step5/step5.html">Confirm</a>
        </button>
      </div>

        </div>
       
      </div>
  )
}

export default AddsOn