"use client";

import { SendHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import clsx from "clsx";
import { useState, useEffect, useRef } from "react";

function ChatBotInfo() {
  return (
    <div className="w-full flex gap-2 flex-col items-center justify-center p-8 select-none">
      <Avatar className="size-32">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-light text-2xl text-zinc-300">Restaurant bot</h1>
        <p className="text-sm font-light text-zinc-500">
            The restaurant bot is here to help you find the best restaurants in town.
        </p>
      </div>
    </div>
  );
}

export { ChatBotInfo };
