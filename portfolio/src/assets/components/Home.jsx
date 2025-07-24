const Home = () => {
  const containerStyle = {
    padding: "40px",
    backgroundColor: "#f9f9f9",
    minHeight: "90vh",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    width:"100vw",
  };

  const headingStyle = {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  };

  const introStyle = {
    fontSize: "20px",
    lineHeight: "1.6",
    color: "#555",
    maxWidth: "800px",
    margin: "0 auto",
  };
  
  

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to My Portfolio</h1>
      <p style={introStyle}>
        Hello! I'm <span>Aarti Dixit</span>, a passionate{" "}
        <span >frontend developer</span> with a love for building
        interactive and user-friendly web applications. I enjoy turning complex problems
        into simple, beautiful, and intuitive designs.
        <br />
        <br />
        This site showcases my <span >projects</span>,{" "}
        <span >internship experiences</span>, and how to get in
        <span > contact</span> with me.
      </p>
      <button>
      <a id="my_id" href="/AARTI_DIXIT_RESUME.pdf">download resume</a>
      </button>
    </div>
  );
};

export default Home;
