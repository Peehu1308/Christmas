import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Decision = () => {
  const navigate = useNavigate();
    const snowflakesRef = useRef(
        Array.from({ length: 60 }).map(() => ({
          size: Math.random() * 6 + 5,
          left: Math.random() * 100,
          duration: Math.random() * 5 + 5,
          delay: Math.random() * 5,
          color: Math.random() > 0.5 ? 'white' : 'white', // red or green flakes
        }))
      );
  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-800 p-6">
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 overflow-hidden">
  {snowflakesRef.current.map((flake, i) => (
    <div
      key={i}
      className="absolute rounded-full opacity-70 animate-fall"
      style={{
        width: `${flake.size}px`,
        height: `${flake.size}px`,
        left: `${flake.left}%`,
        backgroundColor: flake.color,
        animationDelay: `${flake.delay}s`,
        animationDuration: `${flake.duration}s`,
      }}
    />
  ))}
</div>
      <h1 className="text-4xl font-bold text-white mb-8 text-center ">
        🎄 Choose Your Christmas Adventure! 🎅
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        <button
          onClick={() => navigate("/santagame")}
          className="bg-red-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:scale-105 transition transform hover:bg-red-700 flex items-center justify-center gap-2"
        >
          🎮 Play Game
        </button>

        <button
          onClick={() => navigate("/giftsuggestions")}
          className="bg-green-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:scale-105 transition transform hover:bg-green-700 flex items-center justify-center gap-2"
        >
          🎁 Gift Suggestions
        </button>

        <button
          onClick={() => navigate("/card")}
          className="bg-yellow-400 text-red-800 font-bold py-4 px-8 rounded-2xl shadow-lg hover:scale-105 transition transform hover:bg-yellow-500 flex items-center justify-center gap-2"
        >
          🎅 Santa Card
        </button>
      </div>

      <p className="mt-8 text-white text-lg text-center animate-bounce">
        ✨ Spread the Christmas cheer! ✨
      </p>
    </div>
  );
};

export default Decision;
