import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ResponseSection from "./ResponseSection";
import ShareSection from "./ShareSection";
import StatusCode from "./StatusCode/StatusCode";
import RequestForm from "./RequestForm/RequestForm";

const HttpRequestComponent = () => {
  const { id } = useParams();

  // State to hold request data and details
  const [requestData, setRequestData] = useState({
    method: "GET",
    url: "www.yoursite.com/home/index.php",
    responseHeaders: [],
    responseUrl: "",
    shareableId: "",
    requestHeaders: {},
    statusCode: null,
  });

  // Fetch data by ID if provided in the route (for editing/viewing existing requests)
  useEffect(() => {
    if (id) {
      const fetchRequestById = async () => {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BACK_END_URL}/api/HTTP/request/${id}/`
          );
          // Populate state with fetched data
          setRequestData({
            ...requestData,
            method: response.data.data.method,
            responseHeaders: response.data.data.response_data,
            responseUrl: response.data.data.request_data.url,
            requestHeaders: response.data.data.request_data.headers,
            statusCode: response.data.status,
          });
        } catch (error) {
          console.error("Error fetching request by ID:", error);
        }
      };
      fetchRequestById();
    }
  }, [id]);

  // Send the request based on user input in RequestForm
  const handleSend = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACK_END_URL}/api/HTTP/${requestData.method}/`,
        null,
        { params: { url: requestData.url } }
      );
      // Populate state with response data
      setRequestData({
        ...requestData,
        statusCode: res.data.status,
        responseHeaders: res.data.data.response,
        requestHeaders: res.data.data.request.headers,
        responseUrl: res.data.data.request.url,
        shareableId: res.data.data.id,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      {/* Show the HTTP status code of the response */}
      <StatusCode
        statusCode={
          requestData?.responseHeaders[requestData.responseHeaders.length - 1]
        }
      />

      {/* Form component for user to input request details */}
      <RequestForm
        requestData={requestData}
        setRequestData={setRequestData}
        handleSend={handleSend}
      />

      {/* Show response details if a valid status code exists */}
      {requestData.statusCode && (
        <ResponseSection
          responseHeaders={requestData.responseHeaders}
          responseUrl={requestData.responseUrl}
        />
      )}

      {/* Show sharing options for the made request */}
      <ShareSection shareableId={requestData.shareableId} />
    </div>
  );
};

export default HttpRequestComponent;
