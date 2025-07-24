const Internship = () => {
  const containerStyle = {
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    width:"100vw",
    margin: "0 auto",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "24px",
    textAlign: "center",
    color: "#222",
  };

  const internshipListStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const cardStyle = {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f8f8f8",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  };

  const companyStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "6px",
    color: "#333",
  };

  const roleStyle = {
    fontSize: "16px",
    color: "#555",
    marginBottom: "10px",
  };

  const descriptionStyle = {
    fontSize: "15px",
    color: "#444",
    lineHeight: "1.6",
  };

  const internships = [
    {
      company: "SAMANYASTRA",
      role: "Web Developer Intern",
      description:
        "contributed to UI improvements using Html,JavaScript and CSS.",
    },
    {
      company: "COGNIFYZ TECHNOLOGIES",
      role: "Software Development Intern",
      description:
        "worked on developing efficient and user friendly application .",
    },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Internship Experience</h2>
      <div style={internshipListStyle}>
        {internships.map((intern, index) => (
          <div key={index} style={cardStyle}>
            <div style={companyStyle}>{intern.company}</div>
            <div style={roleStyle}>{intern.role}</div>
            <div style={descriptionStyle}>{intern.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;
