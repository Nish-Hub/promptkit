import { useState } from "react";
import { ChatMessage as Message } from "@/types/chat";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { compilePrompt } from "@/api";

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSend(text: string) {
    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);

    setLoading(true);

    try {
      const reply = await compilePrompt({
        role: "assistant",
        task: text,
        context: "",
        constraints: [],
        outputFormat: []
      });

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl flex flex-col h-[80vh]">

        {/* Message area */}
     <div className="flex-1 overflow-y-auto rounded-lg border bg-white p-4 flex flex-col">
       <div className="flex-1" />

       <div className="space-y-4">
         {messages.map((msg, i) => (
           <ChatMessage key={i} {...msg} />
         ))}

         {loading && (
           <div className="text-sm text-gray-500">Thinking...</div>
         )}
       </div>
     </div>


        {/* Input */}
        <div className="mt-3">
          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}
