import React, { useState ,useEffect} from "react";
import "../App.css"; // Import CSS file for animations

const StatusMessage = ({ statusCode, message }) => {
  const [bgColor, setColor] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const getColor = (status) => {
    switch (status) {
      case 200:
        setColor("bg-green-600");
        break;
      case 400:
        setColor("bg-red-500");
        break;
      case 401:
        setColor("bg-yellow-500");
        break;
      case 404:
        setColor("bg-slate-500");
        break;
      case 500:
        setColor("bg-red-500");
        break;
      default:
        setColor("bg-black");
        break;
    }
  };

  useEffect(() => {
    getColor(statusCode);
  }, [statusCode]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Set timeout for 3 seconds
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`max-w-md mx-auto mt-8 p-4 rounded-lg shadow-lg text-center text-white status-message ${bgColor} ${isVisible ? 'visible' : 'hidden'}`}>
      <h2 className="text-xl font-bold mb-2">Status Message</h2>
      {statusCode !== null && (
        <div>
          <p className="text-lg font-semibold mb-4">
            Status Code: {statusCode}
          </p>
          <p className="text-gray-800">{message}</p>
        </div>
      )}
      {statusCode === null && (
        <p className="text-red-500">
          {message || "Error: Unable to fetch status"}
        </p>
      )}
    </div>
  );
};

export default StatusMessage;
