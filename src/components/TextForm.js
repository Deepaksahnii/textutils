import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleExtraClick = () => {
      let newText = text.replace(/\s+/g, ' ').trim();
      setText(newText);
    }
    const handleCopyClick = () => {
      navigator.clipboard.writeText(text)
      alert("Text Copied");
    }
  const handleEmail = () => {
      let regx= text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)
    let newText = (regx) ? regx.join("\n") : "not matched.";
        setText(newText);
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
  return (
    <>
      <div className="container">
          <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" placeholder="Enter text here..."></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upper Case</button>
          <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lower Case</button>
          <button className="btn btn-primary mx-1" onClick={handleExtraClick}>Remove extra spaces</button>
          <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy text</button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
          <button className="btn btn-primary mx-1" onClick={handleEmail}>Extract emails</button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
         <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      </>
  )
}
