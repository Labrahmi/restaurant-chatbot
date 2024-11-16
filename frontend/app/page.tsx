"use client";

import { Toaster } from "@/components/ui/sonner";
import { ChatContainer } from "@/components/chat/ChatContainer";

export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center items-center p-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
      <ChatContainer />
      <Toaster />
    </main>
  );
}
