import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  };

  const handleLoClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  };

  const handleClearClick = () => {
    // console.log("Uppercase was clicked");
    setText("");
    props.showAlert("Text cleared!","success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!","success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!","success");
  }

  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <div style={{color: props.mode==='dark'?'white':'black'}}>
      <div className="container" >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'#071019':'white', color: props.mode==='dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </div>
  );
}
