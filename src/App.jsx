import { useState } from "react";
import PersonInfo from "./Components/PersonInfo";
import "./App.css";
import Left from "./Components/Left";
import footer from "./Components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="body">
        <div className="container">
          <Left />
          <PersonInfo />
        </div>
        <footer />
      </div>
    </>
  );
}

export default App;
