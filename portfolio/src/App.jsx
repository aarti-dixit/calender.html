import React,{useState} from "react";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import Project from "./assets/components/project";
import Internship from "./assets/components/Internhip";
import Contact from "./assets/components/Contact";

function App() {
  const[pageContent,setPageContent]=useState("home");
  return(
    <>
    <Navbar pageHandler={setPageContent}/>
    {pageContent==='home' && <Home pageContent={pageContent}/>}
    {pageContent==='project' && <Project/>}
    {pageContent==='internship' && <Internship/>}
    {pageContent==='contact' && <Contact/>}
    </>
  );
  
}

export default App;



