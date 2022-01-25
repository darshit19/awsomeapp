import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //text="ndbabhdbd";//wrong way to change the state
  //setText("new text");//Correct way to change the text
  const handleUpClick = () => {
    //console.log("Uppercase was clicked"+text);
    //setText("You have clicked on handle upClick");
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to Uppercase ","success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to Lowercase ","success");
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showalert("Text Cleared ","success");
  };

  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value); //this feature is used to set onchanging value of textbox in textbox and that will keep storing in 'text' variable
  };

  const handleClearSpace=()=>{
    // let newText=document.getElementById('myBox').value;
    setText(text.replace(/\s+/g,' ').trim());
    props.showalert("Extra Spaces Removed ","success");
  }
  return (
    <>
      <div>
        <div
          className={`mb-3 text-${props.mode === "light" ? "dark" : "white"}`}
        >
          <h1 className="my-3">{props.heading}</h1>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            value={text}
            style={{backgroundColor:props.mode==="dark"?"rgb(4 92 151)":"white",color:props.mode==="dark"?"white":"black"}}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearSpace}>
          Remove Extra Space
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "white"
        }`}
      >
        <h2> Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        {/* <p>{(0.008)*text.split(' ').length} minutes to read</p> */}
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}
