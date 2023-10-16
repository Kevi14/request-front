import InfoCard from "./InfoCard/InfoCard";
import ResponseCard from "./ResponseCard/ResponseCard";
export default function ResponseSection({ responseHeaders, responseUrl }) {
  return (
    <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
      <InfoCard url={responseUrl} key={responseUrl} />

      <div
        style={{
          minWidth: 260,
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        {responseHeaders.map((responseHeader, index) => (
          <ResponseCard key={index} responseHeader={responseHeader} />
        ))}
      </div>
    </div>
  );
}
