import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Index from "./pages/Index";
import Counter from "./pages/Counter";
import Login from "./pages/Login";
import Sinkitouroku from "./pages/Sinkitouroku";
import Newtop from "./pages/Newtop";
import Ijinitiran from "./pages/Ijinitiran";
import { Forecast } from "./pages/Forecast";

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sinkitouroku" element={<Sinkitouroku />} />
          <Route path="/newtop" element={<Newtop />} />
          <Route path="/ijinitiran" element={<Ijinitiran />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/forecast" element={<Forecast />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
