"use client";

import { SendHorizontal } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Message, MenuItem } from "@/lib/types";
import { toast } from "sonner";
import axios from "axios";

const generateMessage = (menuItems: MenuItem[], inputValue: string) => {
  if (inputValue.includes("kbira sghira")) {
    return "❤️";
  } else if (inputValue.includes("love")) {
    return "❤️";
  } else if (inputValue.includes("sba7 lkhir")) {
    return "ma sba7 lkhir ma ta l3ba";
  } else if (inputValue.includes("hello")) {
    return "Fen asat, chno baghi?";
  } else if (inputValue.includes("menu")) {
    return (
      "Menu items are:\n" +
      menuItems.map((item) => `∙ ${item.name}: ${item.price}`).join("\n")
    );
  } else if (inputValue.includes("l3yoni")) {
    return "L3yoni ra m**d asat, rah AI li kteb hadchi";
  } else {
    return "image";
  }
};

function ChatMessageInput({ setMessages }: { setMessages: Function }) {
  let [inputValue, setInputValue] = useState("");
  let [isUserTurn, setIsUserTurn] = useState(true);
  let [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const BotReply = (isUserTurn: boolean, setUsersTurn: Function) => {
    setUsersTurn(false);
    setMessages((messages: Message[]) => [
      ...messages,
      {
        id: String(messages.length + 1),
        text: "",
        user: {
          id: "0",
          name: "Restaurant bot",
          avatar: "",
        },
      },
    ]);

    const AiGenretedMessage = generateMessage(menuItems, inputValue);
    setTimeout(() => {
      setMessages((messages: Message[]) => [
        ...messages.slice(0, -1),
        {
          id: String(messages.length),
          text: AiGenretedMessage,
          user: {
            id: "0",
            name: "Restaurant bot",
            avatar: "",
          },
        },
      ]);
      setUsersTurn(true);
    }, 1500);
  };

  useEffect(() => {
    axios
      .get("https://18ks6qpp-8000.uks1.devtunnels.ms/menu")
      .then((res) => setMenuItems(res.data))
      .catch((error) => {
        console.log("Error fetching menu items:", error);
      });
  }, []);

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
          className="bg-transparent p-2 w-full outline-none"
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