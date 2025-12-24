import React from 'react'
import { useNavigate } from 'react-router-dom';

const Gamelanding = () => {
    const navigate = useNavigate();
  return (
    <div><button
  onClick={() => navigate("/lobby")}
  className="bg-white text-red-800 font-bold py-3 px-6 rounded-full hover:scale-105 transition"
>
  Enter SantaVerse 🎅
</button>
</div>
  )
}

export default Gamelanding