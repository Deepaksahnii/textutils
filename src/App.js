import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" />
      <TextForm heading= "Enter text to analyze below"/>
    </>
  );
}

export default App;
