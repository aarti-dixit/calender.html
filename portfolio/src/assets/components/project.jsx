const Project = () => {
  const containerStyle = {
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
    width:"100vw",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    color: "#222",
  };

  const projectListStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const cardStyle = {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f0f0f0",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "8px",
  };

  const descriptionStyle = {
    fontSize: "16px",
    color: "#555",
  };

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React to showcase my skills, projects, and contact information.",
    },
    {
      title: "Signature verification system using machine learning ",
      description:
        "this was my first project that encourages me to go forward this system verifies the signature is real or fake mainly used for school and colleges "
    },
    {
      title: "Green Thumb Guide website",
      description:
        "the website that fetches and displays information of crops based on seasons ",
    },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Projects</h2>
      <div style={projectListStyle}>
        {projects.map((project, index) => (
          <div key={index} style={cardStyle}>
            <div style={titleStyle}>{project.title}</div>
            <div style={descriptionStyle}>{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Project;
