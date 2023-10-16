import MethodSelector from "../MethodSelector";
import styles from "./RequestForm.module.css"; // Import the CSS module

export default function RequestForm({
  requestData,
  setRequestData,
  handleSend: originalSendHandler,
}) {
  const handleMethodChange = (e) => {
    setRequestData((prevData) => ({ ...prevData, method: e.target.value }));
  };

  const handleUrlChange = (e) => {
    setRequestData((prevData) => ({ ...prevData, url: e.target.value }));
  };

  const handleSend = () => {
    if (
      !requestData.url.startsWith("http://") &&
      !requestData.url.startsWith("https://")
    ) {
      alert("Please provide a valid URL scheme (e.g., http:// or https://)");
      return;
    }
    originalSendHandler();
  };

  return (
    <div className={styles.container}>
      <MethodSelector
        method={requestData.method}
        setMethod={handleMethodChange}
      />
      <input
        type="text"
        value={requestData.url}
        onChange={handleUrlChange}
        className={styles.urlInput} // Apply the CSS class
      />
      <button
        onClick={handleSend}
        disabled={requestData.isLoading}
        className={styles.sendButton} // Apply the CSS class
      >
        {requestData.isLoading ? "Loading..." : "SEND"}
      </button>
    </div>
  );
}
