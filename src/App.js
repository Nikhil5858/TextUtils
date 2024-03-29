import "./App.css";
import { useState } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; 

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
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    document.body.style.backgroundColor = newMode === "dark" ? "#495057" : "white";
    showAlert(`${newMode === "dark" ? "Dark" : "Light"} Mode Was Enabled`, "success");
    document.title = `TextUtils - Home ${newMode === "dark" ? "Darkmode" : ""}`;
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/home" element={<Textform showAlert={showAlert} heading="Enter The Text" mode={mode} />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Textform showAlert={showAlert} heading="Enter The Text" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
