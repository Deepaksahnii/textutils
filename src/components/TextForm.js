import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("")
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("success", "Converted to upper case.");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("success", "Converted to lower case.");
    }
    const handleExtraClick = () => {
      let newText = text.replace(/\s+/g, ' ').trim();
      setText(newText);
      props.showAlert("success", "Extra spaces removed.");
    }
    const handleCopyClick = () => {
      navigator.clipboard.writeText(text)
      props.showAlert("success", "Text copied.");
    }
    const handleClearClick = () => {
        let newText = "";
      setText(newText);
      props.showAlert("success", "Text cleared.");
    }
  const handleEmail = () => {
      let regx= text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)
    let newText = (regx) ? regx.join("\n") : "";
    setText(newText);
    if(regx) {
      props.showAlert("success", "Email extracted");
    }
    else {
      props.showAlert("warning", "No emails found.");
    }
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
    <div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" placeholder="Enter text here..." style={{backgroundColor: props.mode==='dark'? '#748aa8': 'white', color:props.mode=== 'dark'?'white': 'black'}}></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upper Case</button>
          <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lower Case</button>
          <button className="btn btn-primary mx-1" onClick={handleExtraClick}>Remove extra spaces</button>
          <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy text</button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
          <button className="btn btn-primary mx-1" onClick={handleEmail}>Extract emails</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters.</p>
         <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above text box to preview it here"}</p>
      </div>
      </>
  )
}
