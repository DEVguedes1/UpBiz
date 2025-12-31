import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Cardapio from "./pages/Cardapio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cardapio" element={<Cardapio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
