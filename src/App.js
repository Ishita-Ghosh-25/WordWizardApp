import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

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
    <div> 
    <Navbar title="WordWizard" mode={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container">
    <TextForm showAlert = {showAlert} heading="Insert Text Below" mode={mode}/> 
    {/* <AboutUs/> */}
    </div>
    </div>
    </>
  );
}
export default App;
