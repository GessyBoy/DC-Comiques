import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import Game from "@pages/Game";
import Win from "@pages/Win";
import Crash from "@pages/Crash";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/win" element={<Win />} />
        <Route path="/crash" element={<Crash />} />
      </Routes>
    </div>
  );
}

export default App;
