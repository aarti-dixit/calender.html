

const Homepage = ({ page_content }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>{page_content} Page</h1>
      <p>This is the {page_content.toLowerCase()} page content.</p>
    </div>
  );
};

export default Homepage;
