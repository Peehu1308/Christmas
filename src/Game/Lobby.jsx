import { useNavigate } from "react-router-dom";

export default function Lobby() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-b from-red-700 to-green-700 flex flex-col justify-center items-center text-white">

      <h1 className="text-4xl font-bold mb-6">🎄 Christmas Chaos Arena</h1>

      <div className="bg-white/10 p-6 rounded-xl mb-6 text-center">
        <p>🎅 Santa_42 joined</p>
        <p>🦌 RudolphX joined</p>
        <p>🎁 ElfMaster joined</p>
        <p className="animate-pulse mt-2">⏳ Waiting for players...</p>
      </div>

      <button
        onClick={() => navigate("/santagame")}
        className="bg-white text-red-700 px-6 py-3 rounded-full font-bold hover:scale-105 transition"
      >
        Start Game 🚀
      </button>
    </div>
  );
}
