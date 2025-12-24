import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { nice = 0, naughty = 0 } = state || {};

  let verdict = "🎅 Balanced Elf";
  let message = "You are a mix of nice and naughty. Santa trusts you!";

  if (nice > naughty) {
    verdict = "🎁 Nice List Champion";
    message = "You spread joy and kindness this Christmas!";
  } else if (naughty > nice) {
    verdict = "😈 Naughty List Rebel";
    message = "You took risks and played your own game!";
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-700 to-red-600 flex items-center justify-center text-white p-6">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-lg w-full text-center shadow-xl">

        <h1 className="text-4xl font-bold mb-4">🎄 Santa’s Verdict</h1>

        <p className="text-2xl font-semibold mb-2">{verdict}</p>
        <p className="mb-6">{message}</p>

        <div className="text-left bg-black/30 rounded-xl p-4 mb-6">
          <p>🎁 Nice: <strong>{nice}</strong></p>
          <p>😈 Naughty: <strong>{naughty}</strong></p>
        </div>

        <div className="flex flex-row gap-5">
            <button
          onClick={() => navigate("/santagame")}
          className="bg-white text-red-700 px-6 py-2 rounded-full font-semibold hover:scale-105 transition duration-200"
        >
          Play Again
        </button>
        <button
          onClick={() => navigate("/decision")}
          className="bg-white text-red-700 px-6 py-2 rounded-full font-semibold hover:scale-105 transition duration-200"
        >
          Explore More
        </button>
        </div>
      </div>
    </div>
  );
}
