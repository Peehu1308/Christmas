import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import download from "downloadjs";
import html2canvas from "html2canvas";
import santaAudio from "../assets/audio.mp3";
import santa from "../assets/santa.png";
import { useNavigate } from "react-router-dom";

export default function WrapUpCard() {
    const navigate = useNavigate();
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef(null);
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Generate snowflakes once
  const snowflakesRef = useRef(
    Array.from({ length: 50 }).map(() => ({
      size: Math.random() * 6 + 2,
      left: Math.random() * 100,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
    }))
  );

  useEffect(() => {
    // Auto-play music on mount
    if (audioRef.current) {
      audioRef.current.play().then(() => setAudioPlaying(true));
    }
  }, []);

  const toggleAudio = () => {
    if (audioPlaying) {
      audioRef.current.pause();
      setAudioPlaying(false);
    } else {
      audioRef.current.play();
      setAudioPlaying(true);
    }
  };

  const downloadCard = () => {
    const card = document.getElementById("card");
    html2canvas(card).then((canvas) => {
      canvas.toBlob((blob) => {
        download(blob, "santa_card.png", "image/png");
      });
    });
  };

  const handleSubmitName = (e) => {
    e.preventDefault();
    if (name.trim()) setSubmitted(true);
  };

  const userMessage = `🎄 Merry Christmas! 🎅`;
  const secretSantaNote = "You are awesome! Keep spreading joy ✨";

  if (!submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-red-700 p-6">
        <h1 className="text-4xl font-bold mb-6 text-white text-center">
          🎅 Welcome to SantaBot
        </h1>
        <form onSubmit={handleSubmitName} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition"
          >
            Continue 🎄
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-800 p-6 relative overflow-hidden">
      <audio ref={audioRef} src={santaAudio} loop />

      {/* Snowflakes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {snowflakesRef.current.map((flake, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-70 animate-fall"
            style={{
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              left: `${flake.left}%`,
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`,
            }}
          />
        ))}
      </div>

      

      {/* Card */}
      <div
        id="card"
        className="bg-red-600 rounded-3xl p-8 shadow-2xl max-w-md w-full text-center transform scale-0 animate-pop"
      >
        <h2 className="text-2xl font-bold mb-4 text-yellow-100">{userMessage}</h2>
        <p className="text-yellow-200 mb-6">{secretSantaNote}</p>
        <img src={santa} alt="Santa" className="mx-auto mb-4 w-24 h-24 animate-shake" />
        <p className="text-md font-bold text-white text-right">Love,<br/> {name}</p>
      </div>

      {/* Actions */}
      <div className="flex flex-row gap-4 mt-6 flex-wrap justify-center">
        <button
          onClick={toggleAudio}
          className="bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-800 transition"
        >
          {audioPlaying ? "🔊 Stop Music" : "🎶 Play Music"}
        </button>
        <button
          onClick={downloadCard}
          className="bg-yellow-500 text-red-700 px-4 py-2 rounded-full hover:bg-yellow-400 transition font-bold"
        >
          💾 Download Card
        </button>
        <a
          href={`https://wa.me/?text=${encodeURIComponent(
            `${userMessage}\n${secretSantaNote}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition flex items-center gap-2"
        >
          <FaWhatsapp /> Share
        </a>
      </div>
      <button
          onClick={()=>navigate("/decision")}
          className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-400 transition font-bold mt-4"
        >
          Explore More
        </button>

      {/* Tailwind Animations */}
      <style>{`
        @keyframes pop {
          0% { transform: scale(0); }
          70% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-pop {
          animation: pop 0.6s ease forwards;
        }
        @keyframes fall {
          0% { transform: translateY(-10px); opacity: 0.7; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
}
