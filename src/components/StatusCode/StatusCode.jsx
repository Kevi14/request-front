import { statusCodesDescriptions, defaultDescription } from "./statusCodes";

export default function StatusCode({ statusCode }) {
  const userDescription =
    statusCodesDescriptions[statusCode?.status_code] || defaultDescription;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", margin: 0 }}>{statusCode?.status_code}</h1>
      <p>{userDescription}</p>
    </div>
  );
}
