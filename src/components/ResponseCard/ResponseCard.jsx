import React from "react";
import styles from "./ResponseCard.module.css";

export default function ResponseCard({
  code,
  location,
  date,
  server,
  responseHeader,
}) {
  const infoItems = [
    {
      label: "CODE",
      value: `${(responseHeader.headers["X-Li-Proto"] || "").toUpperCase()} ${
        responseHeader.status_code
      }`,
    },
    { label: "LOCATION", value: responseHeader.headers.Location },
    { label: "DATE", value: `Date:  ${responseHeader.headers["Date"]}` },
    {
      label: "SERVER",
      value: `Server: ${
        responseHeader.headers.Server || "The response didn't contain a server"
      }`,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>RESPONSE</div>
      {infoItems
        .filter((item) => item.value && item.value.trim() !== "")
        .map((item, index) => (
          <div
            key={index}
            className={`${styles.infoItem} ${
              item.label === "SERVER" ? "lastItem" : ""
            }`}
          >
            <span className={styles.value}>{item.value}</span>
          </div>
        ))}
    </div>
  );
}
