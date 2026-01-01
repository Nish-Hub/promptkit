import { ChatMessage as Message } from "@/types/chat";
import clsx from "clsx";

export default function ChatMessage({ role, content }: Message) {
  const isUser = role === "user";

  return (
    <div className={clsx("flex w-full", isUser ? "justify-end" : "justify-start")}>
      <div
        className={clsx(
          "rounded-xl px-4 py-2 text-sm max-w-[75%] whitespace-pre-wrap break-words",
          isUser
            ? "bg-black text-white"
            : "bg-gray-100 text-gray-900"
        )}
      >
        {content}
      </div>
    </div>
  );
}
