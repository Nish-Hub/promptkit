import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  onSend: (text: string) => void;
}

export default function ChatInput({ onSend }: Props) {
  const [value, setValue] = useState("");

  function send() {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  }

  return (
    <div className="flex gap-2">
      <Textarea
        placeholder="Type your message..."
        value={value}
        rows={2}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            send();
          }
        }}
      />
      <Button onClick={send}>Send</Button>
    </div>
  );
}
