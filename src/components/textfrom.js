import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
   
  const convertToPascalCase = () => {
    const words = text.split(/\b\s+\b/); // Split on word boundaries
    const pascalCaseText = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
    setText(pascalCaseText);
};

  //function to copy text
  const copytext=()=>{
    var copy=document.getElementById("mybox");
    copy.select();
    navigator.clipboard.writeText(copy.value);
    alert("Copied the text Successfully: " + copy.value);
    
  }
//function lower to upper
  const convertToUpperCase = () => {
    let newtext=text.toUpperCase()
    setText(newtext)
    console.log("wait we are converting");
  }
  //function upper to lower
  const convertToLowerCase =()=>{
    let newtext=text.toLocaleLowerCase()
    setText(newtext)
    console.log("Successfull");
  }
  const clean = () => {
    let newtext = ""
    setText(newtext)
  }
  
  const handleText = (event) => {
    setText(event.target.value);
    console.log("wait");
  }
  

  return (
    <>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.text}</h1>
      <div className="mb-3">
        <label htmlFor="mybox" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleText} style={{backgroundColor:props.mode==='dark'? '#eeb60d':'white', color:props.mode==''}}id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2"  onClick={convertToUpperCase} disabled={text.length===0}>Convert to UpperCase </button>
      <button className="btn btn-primary mx-2 my-2" onClick={convertToLowerCase}disabled={text.length===0}>Convert to lowerCase </button>
      <button className="btn btn-primary mx-2 my-2" onClick={convertToPascalCase}disabled={text.length===0}>Conver to Cammel </button>
      <button className="btn btn-primary mx-2 my-2" onClick={copytext}disabled={text.length===0}>Copy text </button>
      <button className="btn btn-primary mx-2 my-2" onClick={clean}disabled={text.length===0}>Clear </button>
    </div>
    <div className="container my-2"style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
      <p>time to read {0.008*text.split().filter((element)=>{return element.length!==0}).length}</p>
      <h3>Preview </h3>
      <p>{text.length>0?text:"Nothing to priview"}</p>
      <p>{text}</p>
    </div>
    </>
  );
  
}
