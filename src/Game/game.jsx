import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import santa from "../assets/santa.png";

/* ❄️ Snow Component */
function Snow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-100 overflow-hidden">
      {[...Array(90)].map((_, i) => (
        <span
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
            opacity: Math.random(),
            transform: `scale(${0.5 + Math.random()})`,
          }}
        >
          ❄
        </span>
      ))}
    </div>
  );
}

export default function SantaGame() {
  const navigate = useNavigate();
  const roadRef = useRef(null);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [scores, setScores] = useState({ nice: 0, naughty: 0 });
  const [roadHeight, setRoadHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* Detect mobile */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!roadRef.current) return;

    const updateHeight = () => {
      setRoadHeight(roadRef.current.offsetHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const questions = [
    { question: "Help a friend deliver gifts or take a shortcut alone?", options: [{ text: "Help friend", score: { nice: 1 } }, { text: "Take shortcut", score: { naughty: 1 } }] },
    { question: "Return a lost toy or keep it?", options: [{ text: "Return it", score: { nice: 1 } }, { text: "Keep it", score: { naughty: 1 } }] },
    { question: "Share your cookie with a sibling or eat it all?", options: [{ text: "Share", score: { nice: 1 } }, { text: "Eat all", score: { naughty: 1 } }] },
    { question: "Help decorate the Christmas tree or do your own thing?", options: [{ text: "Help decorate", score: { nice: 1 } }, { text: "Do own thing", score: { naughty: 1 } }] },
    { question: "Give your last gift to a stranger or keep it?", options: [{ text: "Give gift", score: { nice: 1 } }, { text: "Keep gift", score: { naughty: 1 } }] },
    { question: "Sing Christmas carols loudly or quietly?", options: [{ text: "Sing loudly", score: { nice: 1 } }, { text: "Sing quietly", score: { naughty: 1 } }] },
    { question: "Help clean up after the party or leave?", options: [{ text: "Help clean", score: { nice: 1 } }, { text: "Leave", score: { naughty: 1 } }] },
    { question: "Donate toys or sell them for profit?", options: [{ text: "Donate", score: { nice: 1 } }, { text: "Sell", score: { naughty: 1 } }] },
    { question: "Cheer up a sad friend or ignore them?", options: [{ text: "Cheer up", score: { nice: 1 } }, { text: "Ignore", score: { naughty: 1 } }] },
    { question: "Help Santa pack gifts or play video games?", options: [{ text: "Help pack", score: { nice: 1 } }, { text: "Play games", score: { naughty: 1 } }] },
    { question: "Share candy with classmates or eat all?", options: [{ text: "Share candy", score: { nice: 1 } }, { text: "Eat all", score: { naughty: 1 } }] },
    { question: "Compliment someone or stay silent?", options: [{ text: "Compliment", score: { nice: 1 } }, { text: "Stay silent", score: { naughty: 1 } }] },
    { question: "Help a lost reindeer or keep moving?", options: [{ text: "Help reindeer", score: { nice: 1 } }, { text: "Keep moving", score: { naughty: 1 } }] },
    { question: "Invite a shy elf to play or ignore them?", options: [{ text: "Invite elf", score: { nice: 1 } }, { text: "Ignore", score: { naughty: 1 } }] },
    { question: "Recycle wrapping paper or throw it away?", options: [{ text: "Recycle", score: { nice: 1 } }, { text: "Throw away", score: { naughty: 1 } }] },
  ]

  const handleAnswer = (option) => {
    const updatedScores = {
      nice: scores.nice + (option.score.nice || 0),
      naughty: scores.naughty + (option.score.naughty || 0),
    };

    setScores(updatedScores);

    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/result", { state: updatedScores });
    }
  };

  const getY = () => {
    const padding = 50;
    if (!roadHeight) return padding;
    const step = (roadHeight - padding * 2) / (questions.length - 1);
    return padding + questionIndex * step;
  };

  const y = getY();

  return (
    <div className="relative min-h-screen w-full bg-green-800 flex flex-col items-center justify-center px-3 overflow-hidden">
      <Snow />

      <h1 className="relative z-10 text-3xl md:text-5xl font-extrabold text-white mb-2 text-center">
        🎄 Santa Delivery Dash
      </h1>

      <p className="relative z-10 text-white/90 mb-4 text-center text-sm max-w-md">
        Every choice matters. Guide Santa wisely!
      </p>

      {/* GAME AREA */}
      <div
        ref={roadRef}
        className="relative z-10 w-full max-w-sm h-[65vh] bg-white/10 backdrop-blur-lg rounded-3xl p-3 flex justify-center"
      >
        {/* ROAD */}
        <div className="relative w-16 bg-gray-900 rounded-2xl h-full flex justify-center">
          <img
            src={santa}
            alt="Santa"
            className="absolute w-12 h-12 transition-all duration-500 ease-out"
            style={{
              bottom: `${y}px`,
              transform: "translateY(50%)",
            }}
          />
        </div>

        {/* QUESTION — Desktop */}
        {!isMobile && (
          <div
            className="absolute left-[calc(50%+3rem)] bg-white text-gray-800 rounded-2xl p-4 shadow-2xl w-64"
            style={{
              bottom: `${y}px`,
              transform: "translateY(50%)",
            }}
          >
            <QuestionContent
              question={questions[questionIndex]}
              index={questionIndex}
              total={questions.length}
              onAnswer={handleAnswer}
            />
          </div>
        )}
      </div>

      {/* QUESTION — Mobile (STICKY BOTTOM ✅) */}
      {isMobile && (
        <div className="fixed bottom-3 left-1/2 -translate-x-1/2 w-[92%] max-w-sm bg-white text-gray-800 rounded-2xl p-4 shadow-2xl z-20">
          <QuestionContent
            question={questions[questionIndex]}
            index={questionIndex}
            total={questions.length}
            onAnswer={handleAnswer}
          />
        </div>
      )}
    </div>
  );
}

/* Reusable Question UI */
function QuestionContent({ question, index, total, onAnswer }) {
  return (
    <>
      <p className="font-semibold text-center mb-3 text-sm">
        {question.question}
      </p>

      <div className="flex flex-col gap-2">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer(opt)}
            className="bg-red-600 text-white py-2 rounded-full text-sm font-semibold hover:bg-red-700 active:scale-95 transition"
          >
            {opt.text}
          </button>
        ))}
      </div>

      <p className="mt-2 text-[11px] text-gray-500 text-center">
        Question {index + 1} / {total}
      </p>
    </>
  );
}
