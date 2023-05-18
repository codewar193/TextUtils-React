 
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{useState} from 'react';

// This is a React Router v6 app
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {
  const[mode, setMode] = useState('light');//Whether dark mode is enable or not
  const[alert,setAlert] = useState(null);
  //Here alert is a object.
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
    
  }

 let toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark')
      document.body.style.background = '#0e1023'
      showAlert("Dark mode has been enabled", "success");
    } 
    else{
      setMode('light')
      document.body.style.background = 'white'
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
<>
{/* <Navbar title = "SNeha" about = "About us"/> */}
{/* <BrowserRouter> */}

<Navbar title = "playWithWord" mode={mode} toggleMode = {toggleMode} />
<Alert alert={alert}/>
<div className="container my-3 my-lg-0">
<TextForm showAlert={showAlert} heading=  "Enter the text to analyze below" mode={mode}/>

      {/* <Routes>

      {/* /users --> Component 1
      /users/home --->---> Component 1 */}
        {/* <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading=  "Enter the text to analyze below" mode={mode}/>} /> */}
      {/* </Routes> */} 
</div>
{/* </BrowserRouter> */}
 </>
  );
}

export default App;
