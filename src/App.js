import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import AboutUs from './components/About';
import { BrowserRouter,
        Routes, Route, 
        } from "react-router-dom";

function App()  {
  const [mode, setMode] = useState('light'); 


  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  

const toggleMode = () => {
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#2a3240';
    showAlert("Dark Mode has been enabled.", "success");
  }else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled.", "success");
      
  }
  
}

  return (
    <>
    <BrowserRouter>
    <div> 
    <Navbar title="WordWizard" mode={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container">
    
    <Routes>
        <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="Insert Text Below" mode={mode}/>} />  
        <Route exact path="/about" element={<AboutUs mode={mode}/> } />  
    </Routes>
    
      
    </div>
  
    </div>
    </BrowserRouter>
    </>
  );
}
export default App;
