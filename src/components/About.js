import React, { useState } from 'react'

export default function About(props) {
    const  [myStyle,setmyStyle]=useState({
      color:'black',
      backgroundColor:'white'
    })
    const[btntext,setBtntext]=useState("Enable dark mode")
    const darkmode = () => {
        if (myStyle.backgroundColor === 'white') {
          setmyStyle({
            color: 'white',
            backgroundColor: 'black'
          });
          setBtntext('Enable light mode');
        } else {
          setmyStyle({
            color: 'black',
            backgroundColor: 'white'
          });
          setBtntext('Enable dark mode');
        }
      };
  return (
    <div className='about my-3' style={{backgroundColor:props.mode==='dark'?'#07417c':'white',color:props.mode==='dark'?'white':'black'}}>
        <h1>About Us </h1>
      <div className="accordion" id="accordionExample"style={{backgroundColor:props.mode==='dark'? '#07417c':'white', color:props.mode==='dark'?'white':'black'}}>
  <div className="accordion-item" style={{backgroundColor:props.mode==='dark'? '#07417c':'white', color:props.mode==='dark'?'white':'black'}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={{backgroundColor:props.mode==='dark'? '#07417c':'white', color:props.mode==='dark'?'white':'black'}} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Development Details: 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>For users interested in learning more about the development process behind the web app, additional information may be included in the About section. This could encompass details about the technologies used (such as React.js), development challenges overcome, and future enhancements planned for the app.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item"style={{backgroundColor:props.mode==='dark'? '#07417c':'white', color:props.mode==='dark'?'white':'black'}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='dark'? '#07417c':'white', color:props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Features Overview: 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>The About section highlights the key features of the web app, including its intuitive interface, real-time preview functionality, copy-to-clipboard feature, and responsive design. Users can gain a clear understanding of the app's capabilities and benefits.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor:props.mode==='dark'? '#07417c':'white', color:props.mode==='dark'?'white':'black'}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='dark'? '#07417c':'white', color:props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Purpose: 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>The Text Converter Web App aims to simplify the process of converting text between uppercase and lowercase formats, catering to users who frequently encounter text transformation needs in their personal or professional endeavors</strong>
      </div>
    </div>
  </div>
</div>
  
    </div>
  )
}
