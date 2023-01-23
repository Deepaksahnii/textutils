import React, {useState} from 'react';
// import About from "./About";
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = "#0a2751";
      // document.body.style.color = "white";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "black";
    }
  }
  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
      <TextForm heading="Enter text to analyze below" mode={mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
