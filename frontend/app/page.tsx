import { SendHorizontal } from "lucide-react";

export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center items-center p-8">
      <div className="h-full flex flex-col justify-between w-[40rem] bg-black/50 border border-zinc-800 rounded overflow-x-auto">
        <div className="p-6">
          <h1>yes</h1>
          <p></p>
        </div>
        <div className="bottom-0 sticky bg-black border-t border-zinc-800 p-4 py-6">
          <div className="w-full bg-zinc-900/50 border rounded border-zinc-800 flex">
            <input
              className="bg-transparent p-2 w-full outline-none"
              type="text"
            />
            <button className="p-2">
              <SendHorizontal
                className="text-zinc-400 hover:text-zinc-300 transition-all"
                size={24}
              />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
