"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Message } from "@/lib/types";
import clsx from "clsx";

function ChatMessageCore({
  messages,
  messagesEndRef,
  setMessages,
}: {
  messages: Message[];
  messagesEndRef: any;
  setMessages: Function;
}) {
  return (
    <div className="p-4 flex gap-6 flex-col overflow-y-auto">
      {messages.map((message) => (
        <div
          key={message.id}
          className={clsx("flex flex-col h-full w-fit", {
            "self-end": message.user.id === "0",
          })}
        >
          <div
            className={clsx("flex gap-2 items-center justify-center", {
              "flex-row-reverse": message.user.id === "0",
            })}
          >
            <Avatar className="size-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div
              className={clsx(
                "p-2 rounded-lg border border-zinc-800 break-all",
                {
                  "bg-zinc-800": message.user.id === "0",
                  "animate-pulse w-64 h-full text-center":
                    message.user.id === "0" && message.text.length === 0,
                }
              )}
            >
              {message.text}
            </div>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export { ChatMessageCore };
