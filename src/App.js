import logo from './logo.svg';
import './App.css';
import Navbar from "./components/nav";
import Textform from './components/textfrom';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const changeMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = '#07417c';
      document.title = 'TextUtile-dark mode';
    } else {
      setMode('light');
      document.body.style.background = 'white';
      document.title = 'TextUtile-light mode';
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtile" mode={mode} changemode={changeMode} />
        <Alert alert= " We are working on it "/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Textform text="Enter the Text Below" mode={mode}/>}/>
            <Route path="/About" element={<About mode={mode} />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
 
export default App;
