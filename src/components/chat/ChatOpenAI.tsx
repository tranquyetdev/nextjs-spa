import { useChat } from "ai/react";

export default function ChatOpenAI() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="h-full">
      <div className="flex h-4/5">
        {messages.map((m) => (
          <div key={m.id}>
            {m.role}: {m.content}
          </div>
        ))}
      </div>

      <hr />
      <div className="flex h-1/5 w-full">
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
            className="w-full h-full p-1"
          />
        </form>
      </div>
    </div>
  );
}
