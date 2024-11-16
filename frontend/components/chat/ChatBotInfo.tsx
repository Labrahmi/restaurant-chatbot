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
        <AvatarImage src="/botto.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-light text-2xl text-zinc-300">Restaurant bot</h1>
        <p className="text-sm font-light text-zinc-500">
          A7sen bot, makay3rf ydir walo, wlkn bot
        </p>
      </div>
      <div className="text-sm text-zinc-500 self-start">
        <code>Commands:</code>
        <ul className="list-disc flex flex-col gap-1 list-inside text-xs select-text selection:text-black selection:bg-zinc-600">
          <code>/hello</code>
          <code>/menu</code>
          <code>/l3yoni</code>
        </ul>
      </div>
    </div>
  );
}

export { ChatBotInfo };
