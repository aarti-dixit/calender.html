import Demo from "./assets/demo"
import {useState,useEffect} from 'react'

function App() {
  const[quotes,setQuotes]=useState({})
  const [btnValue,setBtnValue]=useState(1)
  const randomNumber = Math.floor(Math.random() * 100) + 1

  const btnHandler=()=>{
    setBtnValue(btnValue+1)

  }

  useEffect( () => {
    const url="https://dummyjson.com/quotes/"+randomNumber
    fetch(url)
    .then(response=>response.json())
    .then(res=>{
      setQuotes(res)
      console.log(res)
    })
  },[btnValue])

  return <>
  {/*
    quotes.map(quote=><h1>{quote.quote}</h1>)
   */}
   {/*<demo/> */}
   
   <button value={randomNumber}
   onClick={btnHandler}>{randomNumber}</button>
   {
    quotes.quote
   }
   </>
     
}

export default App
