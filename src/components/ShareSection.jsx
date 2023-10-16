export default function ShareSection({ shareableId }) {
  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <h4>SHARE</h4>
      <input
        type="text"
        readOnly
        value={`http://localhost:5173/${shareableId}`}
        style={{
          width: "80%",
          padding: "10px",
          border: "1px solid #e0e0e0",
          borderRadius: "5px",
          textAlign: "center",
          width: 300,
        }}
      />
    </div>
  );
}
