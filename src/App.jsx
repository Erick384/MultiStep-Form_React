import "./App.css";
import { Routes, Route } from "react-router-dom";
import Left from "./Components/Left";
import PersonInfo from "./Components/Personal-Info/PersonInfo";
import Plans from "./Components/Plans/Plans";
import AddsOn from "./Components/Adds-On/AddsOn";
import Summary from "./Components/Summary/Summary";
import Footer from "./Components/Footer";
import Thankyou from "./Components/Summary/Thankyou";

function App() {

 return (
    <div className="body">
      <div className="container">
        <Left />
        <div className="container-Right">
          <Routes>
            <Route path="/" element={<PersonInfo />} />
            <Route path="/Plans" element={<Plans />} />
            <Route path="/Adds" element={<AddsOn />} />
            <Route path="/Summary" element={<Summary />} />
            <Route path="/Thankyou" element={<Thankyou />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
