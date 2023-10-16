const methods = ["GET", "POST", "PUT", "DELETE"];

export default function MethodSelector({ method, setMethod }) {
  return (
    <select value={method} onChange={(e) => setMethod(e)}>
      {methods.map((methodOption) => (
        <option key={methodOption} value={methodOption}>
          {methodOption}
        </option>
      ))}
    </select>
  );
}
