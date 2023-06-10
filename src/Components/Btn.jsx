import React ,{useState} from 'react'
import "./App.css";

function Btn() {
    const [nextBtn, setNextBtn] = useState(false);
  return (
    <div className="button">
    <button>Next Step</button>
    </div>
   
  )
}

export default Btn