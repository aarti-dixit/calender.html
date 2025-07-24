const Navbar = ({ pageHandler }) => {
  const navStyle = {
    display: "flex",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#000",
    color: "white",
    cursor: "pointer"
  };

  return (
    <div style={navStyle}>
      <span onClick={() => pageHandler("Home")}>Home</span>
      <span onClick={() => pageHandler("Contact")}>Contact Us</span>
      <span onClick={() => pageHandler("Footer")}>Footer</span>
    </div>
  );
};

export default Navbar;
