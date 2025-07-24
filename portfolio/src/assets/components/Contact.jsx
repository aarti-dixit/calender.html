const Contact = () => {
  const containerStyle = {
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    width:"90vw",
    left:"150px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  };

  const headingStyle = {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    color: "#222",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const inputStyle = {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const textareaStyle = {
    ...inputStyle,
    resize: "vertical",
    minHeight: "100px",
  };

  const buttonStyle = {
    padding: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is just a demo)");
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Contact Me</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input type="text" placeholder="Your Name" style={inputStyle} required />
        <input type="email" placeholder="Your Email" style={inputStyle} required />
        <textarea placeholder="Your Message" style={textareaStyle} required />
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
