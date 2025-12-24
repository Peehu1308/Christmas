Santa Delivery Dash

A fun, interactive Christmas-themed web game where users guide Santa by making moral choices — determining whether they’re Nice or Naughty 🎅❄️
Built with React + Tailwind CSS, featuring animations, falling snow, and a mobile-friendly game layout.

✨ Features

🎮 Interactive decision-based game

🎅 Santa moves vertically as the game progresses

❄️ Falling snow animation (CSS-based, lightweight)

📱 Ultra-compact mobile-friendly layout

🌐 Fully responsive (desktop, tablet, mobile)

🎁 Final result based on user choices

⚡ Smooth animations & transitions

🛠 Tech Stack

React.js

React Router DOM

Tailwind CSS

CSS Animations

Vite / CRA (depending on setup)

📂 Project Structure
src/
├── assets/
│   └── santa.png
├── pages/
│   ├── Decision.jsx
│   ├── SantaGame.jsx
│   └── Result.jsx
├── App.jsx
├── main.jsx
├── App.css
└── index.css

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/your-username/santa-delivery-dash.git
cd santa-delivery-dash

2️⃣ Install dependencies
npm install

3️⃣ Run the app locally
▶ If using Vite
npm run dev

▶ If using Create React App
npm start

🌐 Run on Local Network (Same Wi-Fi)
Vite:
npm run dev -- --host


You’ll see:

Network: http://192.168.x.x:5173


Open this URL on your phone or another device 📱💻

🎮 How to Play

Start from the Decision Page

Click Play Game

Answer each Christmas-themed question

Santa moves forward with each decision

At the end, see if you’re Nice or Naughty 🎄

❄️ Snow Animation

The falling snow effect is implemented using:

Randomized snowflakes via useRef

Custom CSS animation (@keyframes fall)

Non-blocking layer (pointer-events-none)

📱 Mobile Experience

On mobile screens:

Questions stay fixed at the bottom

Santa road stays fully visible

Buttons are thumb-friendly

No overflow or hidden content issues

🎨 Styling

Tailwind utility classes

Festive color palette:

bg-red-800

bg-green-800

text-white

Glassmorphism using bg-white/10 + backdrop-blur

🧩 Possible Enhancements

🔊 Sound effects (jingle bells, button clicks)

🎁 Progress bar instead of question count

🎉 Confetti animation for “Nice” results

🌟 Santa celebration animation at the end

🌍 Online multiplayer / leaderboard

🤝 Contributing

Contributions are welcome!
Feel free to fork the repo, improve UI, add animations, or optimize performance.

📜 License

This project is for educational and personal use.
You are free to modify and reuse it for learning and demos.

💖 Acknowledgements

Made with ❤️ and Christmas spirit 🎄
Inspired by festive games and interactive storytelling.