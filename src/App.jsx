import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
import Counter from "./pages/Counter";
import Login from "./pages/Login";
import Mainhome from "./pages/Mainhome";
import IjinItiran from "./pages/ijinitiran";
import Ijin from "./pages/Ijin";
import Syousai from "./pages/Syousai";
import Image from "./pages/Image";
import Detailed from "./pages/Detailed";
import Illustget from "./pages/illustget";
import Illustget2 from "./pages/illustget2";
import Illustkakunin from "./pages/Illustkakunin";
import { Forecast } from "./pages/Forecast";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Mainhome />} />
        <Route path="login" element={<Login />} />
        <Route path="counter" element={<Counter />} />
        <Route path="forecast" element={<Forecast />} />
        <Route path="ijinitiran" element={<IjinItiran />} />
        <Route path="ijin" element={<Ijin />} />
        <Route path="syousai" element={<Syousai />} />
        <Route path="image" element={<Image />} />
        <Route path="detailed" element={<Detailed />} />
        <Route path="illustget" element={<Illustget />} />
        <Route path="illustget2" element={<Illustget2 />} />
        <Route path="illustkakunin" element={<Illustkakunin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
