import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Left from "./Components/Left";
import PersonInfo from "./Components/Personal-Info/PersonInfo";
import Plans from "./Components/Plans/Plans";
import AddsOn from "./Components/Adds-On/AddsOn"
import Summary from "./Components/Summary/Summary";
import Footer from "./Components/Footer";

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
        <div className="container-Right">
        <Routes>
          <Route path="/" element={<PersonInfo/>} />
          <Route path="/Plans" element={<Plans />} />
          <Route path="/Adds" element={<AddsOn />} />
          <Route path="/Summary" element={<Summary />} />
        </Routes>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default App;
