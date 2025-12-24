import React, { useState, useRef } from "react";
import santa from "../assets/santa.png";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  /* ❄️ Snowflakes (generated once) */
  const snowflakesRef = useRef(
    Array.from({ length: 50 }).map(() => ({
      size: Math.random() * 5 + 4,
      left: Math.random() * 100,
      duration: Math.random() * 6 + 6,
      delay: Math.random() * 5,
      color: "white",
    }))
  );

  const santaQuestions = [
  {
    question: "Do you share gifts with friends?",
    options: ["Yes", "No"],
    key: "sharing",
    score: {
      Yes: 2,
      No: -2   // now choosing No reduces score significantly
    }
  },
  {
    question: "What would you do if Santa stole your cookies?",
    options: [
      "Forgive him ❤️",
      "Steal his hat 🎅",
      "Report him 😤",
      "Laugh it off 😂"
    ],
    key: "personality",
    score: {
      "Forgive him ❤️": 3,
      "Laugh it off 😂": 2,
      "Steal his hat 🎅": -3,  // more negative
      "Report him 😤": -3      // more negative
    }
  }
];


  const currentQuestion = santaQuestions[currentIndex];

  const handleAnswer = (option) => {
    const q = santaQuestions[currentIndex];

    setAnswers((prev) => ({ ...prev, [q.key]: option }));

    if (q.score?.[option]) {
      setScore((prev) => prev + q.score[option]);
    }

    if (currentIndex < santaQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  const verdict = () => {
    if (score >= 5) return "🎁 Very Nice";
    if (score >= 2) return "🙂 Nice";
    if (score >= 0) return "😐 Neutral";
    return "😈 Naughty";
  };

  return (
    <>
      {/* ❄️ Snow */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {snowflakesRef.current.map((flake, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-fall opacity-70"
            style={{
              width: flake.size,
              height: flake.size,
              left: `${flake.left}%`,
              backgroundColor: flake.color,
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`,
            }}
          />
        ))}
      </div>

      {/* 🌟 ENTRY SCREEN */}
      {!questions && (
        <div className="min-h-screen bg-gradient-to-b from-red-900 to-red-700 flex flex-col items-center justify-center text-white px-6 text-center">
          <img src={santa} className="w-56 mb-6 drop-shadow-xl" />
          <h1 className="text-3xl font-extrabold mb-4">
            Ho Ho Ho! 🎄
          </h1>
          <p className="text-lg opacity-90 mb-8 max-w-md">
            Welcome to SantaVerse. Answer a few fun questions and let Santa
            decide your Christmas fate!
          </p>

          <button
            onClick={() => setQuestions(true)}
            className="bg-white text-red-800 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition"
          >
            Enter SantaVerse 🎅
          </button>
        </div>
      )}

      {/* 🎅 QUESTION SCREEN */}
      {questions && !finished && (
        <div className="min-h-screen bg-gradient-to-b from-red-900 to-red-700 flex flex-col justify-end px-4 pb-10 text-white">
          <img
            src={santa}
            className="w-44 mx-auto mb-6 animate-bounce"
          />

          <div className="bg-white/95 text-red-800 rounded-3xl p-5 shadow-xl max-w-md mx-auto mb-6">
            <p className="font-semibold text-center">
              {currentQuestion.question}
            </p>
          </div>

          <div className="space-y-3 max-w-md mx-auto w-full">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="w-full bg-white text-red-800 py-3 rounded-full font-semibold shadow-md hover:bg-green-700 hover:text-white transition active:scale-95"
              >
                {option}
              </button>
            ))}
          </div>

          <p className="text-center text-sm opacity-70 mt-6">
            Question {currentIndex + 1} of {santaQuestions.length}
          </p>
        </div>
      )}

      {/* 🎄 RESULT SCREEN */}
      {finished && (
        <div className="min-h-screen bg-gradient-to-b from-red-900 to-red-700 flex flex-col items-center justify-center text-white px-6 text-center">
          <h1 className="text-4xl font-extrabold mb-4">
            Santa’s Verdict 🎅
          </h1>
          <p className="text-2xl mb-8">{verdict()}</p>

          <button
            onClick={() => navigate("/decision")}
            className="bg-white text-red-800 py-3 px-8 rounded-full font-bold shadow-lg hover:scale-105 transition"
          >
            Continue 🎁
          </button>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes fall {
          from { transform: translateY(-10vh); }
          to { transform: translateY(110vh); }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </>
  );
};

export default Landing;
