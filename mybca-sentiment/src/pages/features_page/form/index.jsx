import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSend = async () => {
    if (!inputText.trim()) {
      setError("Please enter some text to analyze");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post(
        "http://localhost:5001/predict",
        { text: inputText },
        {
          headers: { "Content-Type": "application/json" },
          timeout: 10000,
        }
      );
      setResult(response.data);
    } catch (error) {
      console.error("Error sending data to backend:", error);
      if (error.code === "ERR_NETWORK") {
        setError(
          "Cannot connect to the server. Please make sure the backend is running on http://localhost:5000"
        );
      } else if (error.response) {
        setError(
          `Server error: ${error.response.data.error || error.response.statusText}`
        );
      } else if (error.request) {
        setError("No response from server. Please check your connection.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSend();
    }
  };

  return (
    <div className="flex justify-center px-2 py-4 min-h-screen pb-[90px]">
      <div className="w-full max-w-[900px] flex flex-col flex-1 justify-between">
        
        {/* Result */}
        {result && (
          <div className="mb-6 p-4 rounded-lg bg-white dark:bg-[#041067] border border-gray-200 dark:border-neutral-700">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              Sentiment Analysis Result
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Label:</strong>
                <span
                  className={`ml-2 px-2 py-1 rounded text-sm font-medium ${
                    result.label === "Very Positive"
                      ? "bg-green-100 text-green-800"
                      : result.label === "Positive"
                      ? "bg-green-50 text-green-700"
                      : result.label === "Neutral"
                      ? "bg-gray-100 text-gray-700"
                      : result.label === "Negative"
                      ? "bg-red-50 text-red-700"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {result.label}
                </span>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Confidence:</strong> {(result.confidence * 100).toFixed(2)}%
              </p>
              <div className="text-gray-700 dark:text-gray-300">
                <strong>All Probabilities:</strong>
                <ul className="pl-5 list-disc text-sm mt-1 space-y-1">
                  {result.classes.map((cls, index) => (
                    <li key={cls} className="flex justify-between">
                      <span>{cls}:</span>
                      <span className="font-mono">
                        {(result.probabilities[index] * 100).toFixed(2)}%
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
            <p className="text-blue-800 dark:text-blue-200">
              Analyzing sentiment...
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
            <p className="text-red-800 dark:text-red-200">
              <strong>Error:</strong> {error}
            </p>
          </div>
        )}
        
        {/* Text Input */}
        <div className="relative mt-auto">
          <h1 className="text-4xl font-mono font-bold text-center mb-7 text-gray-400">
            Input your words below
          </h1>

          <textarea
            id="hs-textarea-ex-2"
            className="p-3 sm:p-4 pb-12 block w-full h-[150px] bg-blue-100 border-gray-200 rounded-4xl sm:text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-[#041067] dark:border-neutral-900 dark:text-gray-400 dark:placeholder-neutral-300 dark:focus:ring-blue-600"
            placeholder="Ketikkan sentimen Anda di sini... (Ctrl+Enter untuk mengirim)"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
          />

          {/* Toolbar */}
          <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-gray-100 dark:bg-[#041067]">
            <div className="flex flex-wrap justify-between items-center gap-2">
              <div className="flex items-center">
                {/* Mic Button */}
                 <button type="button" className="inline-flex items-center size-8 rounded-lg text-gray-500 dark:text-neutral-500 hover:bg-gray-100 dark:hover:bg-neutral-700">
                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                </button>
                {/* Attachment Button */}
                <button type="button" className="inline-flex items-center size-8 rounded-lg text-gray-500 dark:text-neutral-500 hover:bg-gray-100 dark:hover:bg-neutral-700">
                  <svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                </button>
              </div>

              <div className="flex items-center gap-x-1">
                {/* Send Button */}
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={loading || !inputText.trim()}
                  className={`inline-flex items-center size-8 rounded-lg text-white ${
                    loading || !inputText.trim()
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-500"
                  }`}
                >
                  <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
