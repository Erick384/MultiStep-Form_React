import React from "react";
import "./PersonalInfo.css";
import BackNext from "../BackNext/BackNext";

function PersonInfo() {
  return (
    <div className="right-txt">
      <div Info-txt>
        <div className="header">
          <h1>Personal info</h1>
          <br />
          <p>Please provide your name, email address, and phone number.</p>
        </div>
        <div className="Info-form">
          <div className="personalInputs">
            <label htmlFor="text">NAME</label>
            <input type="text" placeholder="e.g.Stephen King" required />
          </div>
          <div className="personalInputs">
            <label htmlFor="text">Email Address</label>
            <input
              type="email"
              name="text"
              id="email"
              placeholder="e.g.stephenking@lorem.com"
              required
            />
          </div>
          <div className="personalInputs">
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
      <div to="/Plans" className="next-Button">
      <button>
        <a>Next</a>
      </button>
    </div>

    </div>
  );
}

export default PersonInfo;
