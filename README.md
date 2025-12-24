Santa Delivery Dash

A fun, interactive Christmas-themed web game where users guide Santa by making moral choices — determining whether they’re Nice or Naughty 🎅❄️.
Built with React + Tailwind CSS, featuring falling snow, animations, and a mobile-friendly game layout.

🌐 Live Demo
Check it out here: [Santa Delivery Dash Live](https://christmas-flax-iota.vercel.app/)
 🎮✨

✨ Features
🎮 Interactive decision-based game
🎅 Santa moves vertically as the game progresses
❄️ Falling snow animation (lightweight, CSS-based)
📱 Ultra-compact mobile-friendly layout
🌐 Fully responsive (desktop, tablet, mobile)
🎁 Final result based on user choices (Nice / Neutral / Naughty)
⚡ Smooth animations & transitions

🖼 Screenshots
<img width="958" height="499" alt="Landing Screen" src="https://github.com/user-attachments/assets/5be20129-790e-4476-b967-37e3e00ffaa8" /> <img width="960" height="505" alt="Santa Game UI" src="https://github.com/user-attachments/assets/a081688b-776b-4e16-b15d-a3e212134067" /> <img width="953" height="503" alt="Question Bubble" src="https://github.com/user-attachments/assets/6d5e6d9e-c97b-4a68-9fa9-6566450f790b" /> <img width="960" height="505" alt="Answer Options" src="https://github.com/user-attachments/assets/7adc7717-949f-455d-a2d3-dc1e81e43bf6" /> <img width="947" height="490" alt="Result Screen" src="https://github.com/user-attachments/assets/da17a845-f503-436f-9ecf-06849893cc94" />
🛠 Tech Stack

React.js

React Router DOM

Tailwind CSS

CSS Animations

Vite / Create React App (depending on setup)

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
If using Vite:
npm run dev

If using Create React App:
npm start

🌐 Run on Local Network (Same Wi-Fi)

Vite:

npm run dev -- --host


You’ll see a network URL like:

Network: http://192.168.x.x:5173


Open this URL on your phone or another device 📱💻.

🎮 How to Play
Start from the Decision Page
Click Play Game
Answer each Christmas-themed question
Santa moves forward with each decision
At the end, see if you’re Nice, Neutral, or Naughty 🎄

❄️ Snow Animation
Snowflakes are randomized via useRef
Custom CSS animation (@keyframes fall)
Non-blocking layer using pointer-events-none

📱 Mobile Experience
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
Glassmorphism: bg-white/10 + backdrop-blur

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
Love Peehu
