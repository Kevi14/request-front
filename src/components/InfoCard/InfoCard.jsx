import styles from "./InfoCard.module.css";

export default function InfoCard({ url }) {
  let domain, scheme, path;
  try {
    const parsedUrl = new URL(url);
    domain = parsedUrl.hostname;
    scheme = parsedUrl.protocol.replace(":", "");
    path = parsedUrl.pathname;
  } catch (error) {
    domain = "Invalid domain";
    scheme = "Invalid scheme";
    path = "Invalid path";
  }
  const infoItems = [
    { label: "DOMAIN", value: domain },
    { label: "SCHEME", value: scheme },
    { label: "PATH", value: path },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.title}>URL INFO</div>
      {infoItems.map((item, index) => (
        <div
          key={index}
          className={`${styles.infoItem} ${
            item.label === "PATH" ? "lastItem" : ""
          }`}
        >
          <span className={styles.label}>{item.label}</span>
          <span className={styles.value}>{item.value}</span>
        </div>
      ))}
    </div>
  );
}
