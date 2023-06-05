import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Cal from './Components/Cal';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not 
  
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if( mode === 'light' ){
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils - DarkMode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 3000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now ';
      // }, 2000);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
      document.title = 'TextUtils - LightMode';
    }
  }

  return (
    // Code inside div is JSX
    <>
    {/* <Navbar title ="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar /> */}
    <Router>    
    <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode} />

    <Alert alert={alert} />
    <div className="container my-3">

    <Routes>
          {/* /users --> Component 1 WHY to USE EXACT PATH
              /users/home --> Component 2 */}
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading='1. Enter the text to analyze below' mode={mode} />} />
          <Route exact path="/cal" element={<Cal heading='2. Calculator'mode={mode} />} />
          <Route exact path="/about" element={<About heading='3. About Us'mode={mode} />} />
    </Routes>

    </div>
    </Router> 
    </>
  );
}

export default App;