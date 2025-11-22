import { Route, Routes } from "react-router";

import HomePage from "./pages/Homepage";
import PlayersPage from "./pages/PlayersPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/players" element={<PlayersPage />} />
    </Routes>
  )
}

export default App
