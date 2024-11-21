"use client";

import {
  SendHorizontal,
  Accessibility,
  MessageSquareOff,
  X,
  EllipsisVertical,
  Bot,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/sonner";

import { Message } from "@/lib/types";

import clsx from "clsx";

function ChatBotInfo({
  messages,
  setMessages,
}: {
  messages: Message[];
  setMessages: Function;
}) {
  return (
    <div className="w-full flex p-4 gap-2 flex-col items-center justify-center select-none border-b border-b-zinc-800">
      <div className="w-full flex justify-end p-2 py-4">
        <Popover>
          <PopoverTrigger className="flex gap-1 items-center text-zinc-500 text-sm font-light">
            <EllipsisVertical className="w-4 h-4" />
          </PopoverTrigger>
          <PopoverContent className="bg-zinc-950 *:bg-zinc-950 border-zinc-800 text-zinc-500 p-2 w-fit">
            <Button
              onClick={() => {
                setMessages([]);
                toast("Clear", {
                  description: "Messages cleared.",
                  style: {
                    background: "#000000",
                    color: "#fff",
                    border: "1px solid #444",
                  },
                });
              }}
              className="hover:bg-zinc-800 w-full flex text-left justify-start p-2"
            >
              <div className="">Clear messages</div>
            </Button>
          </PopoverContent>
        </Popover>
      </div>
      <Avatar className="size-20 flex justify-center items-center p-2">
        <Bot className="size-16 stroke-zinc-300" />
      </Avatar>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-light text-xl text-zinc-300">Restaurant bot</h1>
        <p className="text-sm font-light text-zinc-500">
          A7sen bot, makay3rf ydir walo, wlkn bot
        </p>
      </div>
      <div className="text-sm text-zinc-500 self-start hidden">
        <code>Commands:</code>
        <ul className="list-disc flex flex-col gap-1 list-inside text-xs select-text selection:text-black selection:bg-zinc-600">
          <code>/hello</code>
          <code>/menu</code>
          <code>/l3yoni</code>
          <code>/random</code>
        </ul>
      </div>
    </div>
  );
}

export { ChatBotInfo };
