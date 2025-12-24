import React, { useState, useRef } from 'react';
import santa from '../assets/santa.png';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const [questions, setquestions] = useState(false);
  const [currentindex, setcurrentindex] = useState(0);
  const [answers, setanswers] = useState({});
  const [score, setscore] = useState(0);
  const [finished, setfinished] = useState(false);

  // Generate snowflakes once
  const snowflakesRef = useRef(
    Array.from({ length: 60 }).map(() => ({
      size: Math.random() * 6 + 5,
      left: Math.random() * 100,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
      color: Math.random() > 0.5 ? 'white' : 'white', // red or green flakes
    }))
  );

  const santaQuestions = [
    {
      id: 1,
      question: "How do you celebrate Christmas?",
      options: ["Family dinner", "Friends party", "Traveling", "Quiet at home"],
      key: "celebration",
      score: {
        "Family dinner": 2,
        "Friends party": 1,
        "Traveling": 1,
        "Quiet at home": 2
      }
    },
    {
      id: 2,
      question: "What’s your budget range?",
      options: ["Under ₹500", "₹500–₹2000", "₹2000+"],
      key: "budget"
    },
    {
      id: 3,
      question: "Do you prefer fun or practical gifts?",
      options: ["Fun 🎉", "Practical 🎁", "Both 😄"],
      key: "giftType"
    },
    {
      id: 4,
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
        "Steal his hat 🎅": -1,
        "Report him 😤": -1
      }
    }
  ];

  const currentquestion = santaQuestions[currentindex];

  const handleAnswer = (selectedOption) => {
    const q = santaQuestions[currentindex];

    setanswers((prev) => ({
      ...prev,
      [q.key]: selectedOption
    }));

    if (q.score && q.score[selectedOption] !== undefined) {
      setscore((prev) => prev + q.score[selectedOption]);
    }

    if (currentindex < santaQuestions.length - 1) {
      setcurrentindex((prev) => prev + 1);
    } else {
      setfinished(true);
    }
  };

  const getSantaVerdict = (score) => {
    if (score >= 5) return "🎁 Very Nice";
    if (score >= 2) return "🙂 Nice";
    if (score >= 0) return "😐 Neutral";
    return "😈 Naughty";
  };

  return (
    <>
      {/* Snowflakes */}
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


      {!questions && (
        <div className="bg-red-800 h-screen flex flex-col justify-center items-center text-white relative">
          <img src={santa} height={300} width={300} className="mb-6" />
          <p className="text-3xl font-bold italic p-10 text-center">
            Ho ho ho! Welcome to SantaVerse. Ready for some Christmas fun?
          </p>

          <button
            className="bg-white text-red-800 font-bold py-2 px-4 rounded
                       hover:bg-red-800 hover:text-white hover:border-white hover:border-2 transition"
            onClick={() => setquestions(true)}
          >
            Enter SantaVerse
          </button>
        </div>
      )}

      {questions && !finished && (
        <div className="bg-gradient-to-b from-red-900 to-red-700 h-screen flex flex-col justify-end text-white px-4 pb-10 items-center relative">
          <img src={santa} height={250} width={250} className="top-3 mb-4 animate-shake" />
          <div className="flex items-start mb-4 max-w-md mx-auto">
            <div className="text-4xl mr-3">🎅</div>
            <div className="bg-white text-red-800 p-4 rounded-2xl rounded-tl-none shadow-lg">
              <p className="font-semibold">
                {currentquestion.question}
              </p>
            </div>
          </div>

          {/* Options as Quick Reply Buttons */}
          <div className="space-y-3 max-w-md mx-auto w-full">
            {currentquestion.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="
                  w-full bg-white text-red-800 font-semibold py-3 px-4
                  rounded-full shadow-md
                  hover:bg-green-700 hover:text-white
                  transition-all duration-200 active:scale-95
                "
              >
                {option}
              </button>
            ))}
          </div>

          {/* Progress Indicator */}
          <p className="text-center text-sm opacity-70 mt-6">
            Question {currentindex + 1} of {santaQuestions.length}
          </p>
        </div>
      )}

      {/* RESULT SCREEN */}
      {finished && (
        <div className="bg-red-800 h-screen flex flex-col justify-center items-center text-white relative">
          <h1 className="text-4xl font-bold mb-4">
            🎄 Santa’s Verdict
          </h1>
          <p className="text-2xl mb-2">
            {getSantaVerdict(score)}
          </p>
          <button
            className="bg-white text-red-800 font-bold py-2 px-4 rounded mt-6 hover:bg-red-800 hover:text-white hover:border-white hover:border-2 transition"
            onClick={() => navigate('/decision')}
          >
            Go to the next page
          </button>
        </div>
      )}

      {/* Tailwind Animations */}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10px); opacity: 0.7; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </>
  );
};

export default Landing;
