import { useState } from "react";
import PromptInput from "./components/PromptInput";
import ChatHistory from "./components/ChatHistory";
import { fetchOpenAIResponse } from "./API/api";

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (prompt) => {
    setError("");
    setLoading(true);
    try {
      const response = await fetchOpenAIResponse(prompt);
      setChatHistory(prev => [...prev, { prompt, response }]);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => setChatHistory([]);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 border rounded shadow-md bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">🔍 AI Prompt App</h1>
      <PromptInput onSubmit={handleSubmit} loading={loading} />
      {error && <p className="text-red-600 text-sm text-center">{error}</p>}
      <ChatHistory history={chatHistory} onClear={clearChat} />
    </div>
  );
}

export default App;