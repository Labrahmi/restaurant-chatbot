"use client";

import { SendHorizontal } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Message, MenuItem } from "@/lib/types";
import { toast } from "sonner";
import axios from "axios";

const BACKEND_URL = "http://localhost:8000";

const generateMessage = async (
  inputValue: string,
  setUsersTurn: Function
): Promise<string> => {
  setUsersTurn(false);
  try {
    const response = await axios.post(`${BACKEND_URL}/api/chat`, {
      message: inputValue,
    });
    setUsersTurn(true);
    return response.data.message;
  } catch (error) {
    setUsersTurn(true);
    toast("Error", {
      description: `Error generating message: ${error}`,
      style: {
        background: "#000000",
        color: "#fff",
        border: "1px solid #444",
      },
    });
    return "🤒";
  }
};

function ChatMessageInput({ setMessages }: { setMessages: Function }) {
  let [inputValue, setInputValue] = useState("");
  let [isUserTurn, setIsUserTurn] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);
  const BotReply = async (isUserTurn: boolean, setUsersTurn: Function) => {
    const ResponseFromBot = await generateMessage(inputValue, setUsersTurn);
    setMessages((messages: Message[]) => [
      ...messages,
      {
        id: String(messages.length + 1),
        text: ResponseFromBot,
        user: {
          id: "0",
          name: "Restaurant bot",
          avatar: "",
        },
      },
    ]);
  };

  useEffect(() => {
    if (isUserTurn) {
      inputRef.current?.focus();
    }
  }, [isUserTurn]);

  const handleSendMessage = async () => {
    if (
      !inputValue ||
      inputValue.trim() === "" ||
      inputValue.length === 0 ||
      inputValue.length > 1000
    ) {
      toast("Invalid message", {
        description: "Please enter a valid message.",
        style: {
          background: "#000000",
          color: "#fff",
          border: "1px solid #444",
        },
      });
      setInputValue("");
      return;
    }
    setMessages((messages: Message[]) => [
      ...messages,
      {
        id: String(messages.length + 1),
        text: inputValue,
        user: {
          id: "1",
          name: "User",
          avatar: "",
        },
      },
    ]);
    setInputValue("");
    BotReply(isUserTurn, setIsUserTurn);
  };

  return (
    <div className="bottom-0 sticky bg-black border-t border-zinc-800 p-4 py-6 select-none">
      <div className="w-full bg-zinc-900/50 border rounded border-zinc-800 flex">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
          disabled={!isUserTurn}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
          className="bg-transparent p-3 w-full outline-none"
          type="text"
          ref={inputRef}
        />
        <button className="p-2">
          <SendHorizontal
            onClick={handleSendMessage}
            className="text-zinc-400 hover:text-zinc-300 transition-all"
            size={24}
          />
        </button>
      </div>
    </div>
  );
}

export { ChatMessageInput };
