
import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [inpval, setInpval] = useState("");

  function getData(event){
     setInpval(event.target.value)
  }
   

  

  console.log(inpval)
  return (
    <div className="App">
      <label>Enter your Name:</label>
      <br></br>
      <br></br>
      <br></br>
      <input type="text"  onChange={getData}  />

      <p >{`hello ${inpval}!`} </p>
    </div>
  );
}

export default App;

