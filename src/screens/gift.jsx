import React, { use } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const giftSuggestions = [
  {
    type: "🎉 Fun Gift",
    name: "Magic LED Desk Lamp",
    relevance: 85,
    ecoScore: 70,
    budgetFit: "₹1200",
    description: "Brightens up your room and adds magic! 🌟",
  },
  {
    type: "🛠 Practical Gift",
    name: "Bamboo Desk Organizer",
    relevance: 90,
    ecoScore: 85,
    budgetFit: "₹900",
    description: "Keeps your desk neat and eco-friendly 🌱",
  },
  {
    type: "🌿 Eco-friendly Gift",
    name: "Reusable Water Bottle",
    relevance: 75,
    ecoScore: 95,
    budgetFit: "₹600",
    description: "Reduces plastic waste and carbon footprint 🌍",
  },
];

export default function GiftSuggestions() {
    const navigate=useNavigate();
  return (
    <div className="min-h-screen bg-green-700 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">
        🎅Gift Suggestions
      </h1>
      <p className="mb-6 text-white text-center max-w-lg">
        Personalized suggestions just for you! Each gift shows relevance, eco impact, and budget fit.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {giftSuggestions.map((gift, idx) => (
          <div
            key={idx}
            className="bg-white/20 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-2xl font-bold mb-2">{gift.type}</h2>
            <p className="text-xl font-semibold mb-2">{gift.name}</p>
            <p className="mb-2 text-white/90">{gift.description}</p>

            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span>🎁 Relevance:</span>
                <span>{gift.relevance}%</span>
              </div>
              <div className="flex justify-between">
                <span>🌱 Eco Score:</span>
                <span>{gift.ecoScore}%</span>
              </div>
              <div className="flex justify-between">
                <span>💰 Budget Fit:</span>
                <span>{gift.budgetFit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="mt-10 bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
        onClick={() => alert("SantaBot will suggest more gifts soon! 🎁")}
      >
        Generate More Suggestions
      </button>
      <button
        className="mt-10 bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
        onClick={() => navigate("/decision")}
      >
        Explore more
      </button>
    </div>
  );
}
