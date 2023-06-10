import React from "react";
import "./Summary.css"

function Summary() {
  return (
    <div className="right">
      <div className="right-txt">
        <div className="header">
          <h1>Finishing up</h1>
          <br />
          <p>Double-check everything looks OK before confirming.</p>
        </div>
        <div className="form">
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
      <div className="button">
        <a href="./step3/step3.html">Go Back</a>
        <button>
          <a href="./step5/step5.html">Confirm</a>
        </button>
      </div>
    </div>
  );
}

export default Summary;
