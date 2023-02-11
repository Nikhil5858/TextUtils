import "./App.css";

import { useState } from "react";

import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } 
    else {
      document.body.style.backgroundColor = "white";
      setMode("light");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode}/>
      <div className="container my-3">
        <Textform heading="Enter The Text" mode={mode}/>
        <About/>
      </div>
    </>
  );
}
export default App;
