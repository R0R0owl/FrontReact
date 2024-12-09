import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Counter from "./pages/Counter";
import Login from "./pages/Login";
import Sinkitouroku from "./pages/Sinkitouroku";
import Newtop from "./pages/Newtop";
import Ijinitiran from "./pages/Ijinitiran";
import Ijinsyousai from "./pages/Ijinsyousai";
import Illustitiran from "./pages/Illustitiran";
import Illustsyousai from "./pages/Illustsyousai";
import Quiz from "./pages/Quiz";
import Quiz2 from "./pages/Quiz2";
import Ai from "./pages/Ai";
import Change from "./pages/Change";
import ChangeAfter from "./pages/ChangeAfter";
// import Map from "./pages/Map";
import { Forecast } from "./pages/Forecast";
import './App.css';
import PersonList from "./pages/Ijinitiran2";
// import ReactDOM from "react-dom/client";
// import Index from "./pages/Index";
// import Ijinitiran2 from "./pages/Ijinitiran2";

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
          <Route path="/ijinitiran2/:eraId" element={<PersonList />} />
          <Route path="/ijinsyousai/:eraId/:personId" element={<Ijinsyousai />} />
          <Route path="/illustitiran" element={<Illustitiran />} />
          <Route path="/illustsyousai" element={<Illustsyousai />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz2"element={<Quiz2 />} />
          <Route path="/ai" element={<Ai />} />
          <Route path="/change" element={<Change />} />
          <Route path="/changeAfter" element={<ChangeAfter />} />
          {/* <Route path="/map/:eventId" element={<Map />}></Route> */}
          <Route path="/counter" element={<Counter />} />
          <Route path="/forecast" element={<Forecast />} />
          {/* 404 page */}
          <Route path="*" element={<div>ページが見つかりません</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
