import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here")
    
    const handleUpClick = () => {
        let newText = text.toLocaleUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
  return (
      <div className="container">
          <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>Convert to upper case</button>
    </div>
  )
}
