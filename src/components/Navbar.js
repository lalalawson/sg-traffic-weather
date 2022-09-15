const Navbar = () => {
  return (
    <div
      style={{
        padding: "16px 36px",
        backgroundColor: "lightblue",
        boxShadow: "var(--shadow-md)",
      }}
    >
      <span style={{ fontWeight: "bold", fontSize: "24px", color: "#f73e3e" }}>
        sg
      </span>
      <span
        style={{
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        traffic&weather
      </span>
    </div>
  );
};

export default Navbar;
