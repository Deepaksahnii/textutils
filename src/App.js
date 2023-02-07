import './App.css'; 
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from "./components/About";
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = "#0a2751";
      // document.body.style.color = "white";
      showAlert("success", "Dark mode enabled.");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "black";
      showAlert("success", "Light mode enabled.");
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
        <Routes>
          <Route path="/" element={<div className="container">
      <TextForm heading="Enter text to analyze below" mode={mode} showAlert={showAlert} />
          </div>} />
          <Route path="/about" element={<About mode={mode}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
