import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Index from "./pages/Index";
import Counter from "./pages/Counter";
import Login from "./pages/Login";
import { Forecast } from "./pages/Forecast";

import './App.css'
import { useState } from "react";

function App() {

  const [user, setUser] = useState(null);
  const updateUser = (newUser) => {
    setUser(newUser);
    console.info('ユーザー情報が更新されました✨');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} />}>
          <Route index element={<Index user={user} />} />
          <Route path="/login" element={<Login updateUser={updateUser} />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/forecast" element={<Forecast />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
