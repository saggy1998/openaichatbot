export default function ChatHistory({ history, onClear }) {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">Chat History</h2>
        <button onClick={onClear} className="text-sm text-red-600 underline">Clear</button>
      </div>
      <ul className="space-y-4 max-h-[400px] overflow-y-auto">
        {history.map((item, index) => (
          <li key={index} className="border p-3 rounded shadow-sm">
            <p className="font-medium">🧠 Prompt: {item.prompt}</p>
            <p className="mt-2">💬 Response: {item.response}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}