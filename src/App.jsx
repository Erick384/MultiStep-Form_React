import { useState } from "react";
import PersonInfo from "./Components/PersonInfo";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Left from "./Components/Left";
import Footer from "./Components/Footer";
import Plans from "./Components/Plans";
import AddsOn from "./Components/AddsOn";
import Summary from "./Components/Summary";
// import Btn from "./Components/Btn";

function App() {
  const [nextBtn, setNextBtn] = useState(false);

  const handleNextBtn = () => {
    setNextBtn(!nextBtn);
    console.log(nextBtn);
  };
  return (
    <div className="body">
      <div className="container">
        <Left />
        <Routes>
          <Route path="/" element={<PersonInfo />} />
          <Route path="/Plans" element={<Plans />} />
          <Route path="/Adds" element={<AddsOn />} />
          <Route path="/Summary" element={<Summary />} />
        </Routes>
        {/* <div className="button">
          <button onClick={handleNextBtn}>Next Step</button>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
