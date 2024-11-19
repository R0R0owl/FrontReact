import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Index from "./pages/Index";
import Counter from "./pages/Counter";
import Login from "./pages/Login";
import { Forecast } from "./pages/Forecast";

import './App.css'
import { useState } from "react";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/forecast" element={<Forecast />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
