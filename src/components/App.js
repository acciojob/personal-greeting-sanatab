import React from 'react';
import { useState } from 'react';

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
      <input type="text" value={inpval} onChange={getData}  />

      <p >{inpval? `hello ${inpval}!`:""} </p>
    </div>
  );
}

export default App;



