import "./App.css";

import { useState } from "react";

import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Route, Routes,Switch } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#495057";
      showAlert("Dark Mode Was Enabaled", "success");
      document.title = "TextUtils - Home Darkmode";
    } else {
      document.body.style.backgroundColor = "white";
      setMode("light");
      showAlert("Light Mode Was Enabaled", "success");
      document.title = "TextUtils - Home";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
          <Textform showAlert={showAlert} heading="Enter The Text" mode={mode} />
            {/* <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter The Text" mode={mode} />} /> */}
            {/* <Route exact path="/about" element={<About />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}
export default App;
