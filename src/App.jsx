import { useState } from "react"

function App() {
  const [counter,setCounter]=useState(0);

  const addValue=()=>{
    //console.log(counter);
    if(counter <= 20){
      setCounter(counter+1);
    }
  }
  const removeValue=()=>{
    if(counter > 0){
    setCounter(counter-1);
    }
  }

  
  return (
    <>
      <h1>Hello React | Rajiv kumar</h1>
      <h2>Conter : {counter ? counter:0}</h2>
      <br />
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>

          </>
  )
}
export default App
