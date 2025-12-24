import { Routes, Route } from 'react-router-dom';
import Landing from './screens/landing.jsx';
import Game from './screens/Game.jsx';
import './App.css';
import Gamelanding from './Game/landing.jsx';
import SantaGame from './Game/game.jsx';
import Lobby from './Game/Lobby.jsx';
import Result from './Game/result.jsx';
import Decision from './screens/decision.jsx';
import GiftSuggestions from './screens/gift.jsx';
import WrapUpCard from './screens/card.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/game" element={<Game />} />
      <Route path="/gamelanding" element={<Gamelanding />} />
      <Route path="/result" element={<Result />} />

      <Route path="/santagame" element={<SantaGame />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/decision" element={<Decision />} />
      <Route path="/giftsuggestions" element={<GiftSuggestions />} />
      <Route path="/card" element={<WrapUpCard />} />

    </Routes>
  );
}

export default App;
