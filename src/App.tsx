import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import "./styles/floatingAnimation.css";

const Home = lazy(() => import("./pages/Home"));
const GameBoy = lazy(() => import("./pages/GameBoy"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gameboy" element={<GameBoy />} />
      </Routes>
    </>
  );
}

export default App;
