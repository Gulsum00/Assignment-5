function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
      }}
    >
      {children}
    </div>
  );
}

export default Card;
