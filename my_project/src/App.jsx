import React, { useState } from "react";
import Navbar from "./navbar/navbar";
import Homepage from "./pages/homepage";

function App() {
  const [pageContent, setPageContent] = useState("Home");

  return (
    <>
      <Navbar pageHandler={setPageContent} />
      <Homepage page_content={pageContent} />
    </>
  );
}

export default App;
