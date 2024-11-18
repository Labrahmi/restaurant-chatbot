"use client";

import { useState, useEffect, useRef } from "react";
import { ChatBotInfo } from "@/components/chat/ChatBotInfo";
import { ChatMessageCore } from "@/components/chat/ChatMessageCore";
import { ChatMessageInput } from "@/components/chat/ChatMessageInput";
import { Message } from "@/lib/types";

function ChatContainer() {
  let [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="h-full flex flex-col justify-between w-[40rem] bg-black/50 border border-zinc-800 rounded overflow-x-auto select-none">
      <ChatBotInfo messages={messages} setMessages={setMessages} />
      <ChatMessageCore
        messages={messages}
        messagesEndRef={messagesEndRef}
        setMessages={setMessages}
      />
      <ChatMessageInput setMessages={setMessages} />
    </div>
  );
}

export { ChatContainer };