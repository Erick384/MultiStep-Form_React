import React from "react";
import "./Summary.css";
import BackNext from "../BackNext/BackNext"

function Summary() {
  return (
    <div className="right-txt">
      <div>
        <div className="header">
          <h1>Finishing up</h1>
          <br />
          <p>Double-check everything looks OK before confirming.</p>
        </div>
        <div className="Summary-form">
          <div className="form1">
            <div className="form1-txt">
              <h3>Arcade(Monthly)</h3>
              <a href="./step2/step2.html">Change</a>
            </div>
            <div className="dollar">
              <span>$9/mo</span>
            </div>
          </div>
          <div className="form2">
            <div className="form2-txt">
              <p>Online Service</p>
              <span>+$1/mo</span>
            </div>
            <div className="form2-txt">
              <p>Local Storage</p>
              <span>+$2/mo</span>
            </div>
          </div>
        </div>
        <div className="form3">
          <p>Total(monthly)</p>
          <h3>+$12/mo</h3>
        </div>
      </div>
      <BackNext />
    </div>
  );
}

export default Summary;
