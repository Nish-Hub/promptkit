import Chat from "@/components/Chat";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="border-b bg-white px-6 py-4 font-semibold">
        PromptKit
      </header>

      <main className="p-6">
        <Chat />
      </main>
    </div>
  );
}
