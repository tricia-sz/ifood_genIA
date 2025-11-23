import ChatPage from "../components/chat/ChatAssistant";

export default function Home() {
  return (
   <div className="bg-red-900 max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-center text-2xl font-bold">Ifood POC GenIA - Trícia Souza 2025</h2>
        </div>
        <div>
          <ChatPage />
        </div>
      </div>
  )
}
