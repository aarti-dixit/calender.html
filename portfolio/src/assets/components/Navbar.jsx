const Navbar = ({ pageHandler }) => {
  const wrapperStyle = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#000",
    paddingTop: "20px ",
    width:"100%",
  };

  const navStyle = {
    display: "flex",
    gap: "30px",
    padding: "20px",
    color: "#fff",
    cursor: "pointer",
    fontSize: "30px",
  };

  return (
    <div style={wrapperStyle}>
      <div style={navStyle}>
        <span onClick={() => pageHandler("home")}>Home</span>
        <span onClick={() => pageHandler("project")}>Project</span>
        <span onClick={() => pageHandler("internship")}>Internship</span>
        <span onClick={() => pageHandler("contact")}>Contact</span>
      </div>
    </div>
  );
};

export default Navbar;
