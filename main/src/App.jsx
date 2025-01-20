import React from 'react';
import axios from "axios";
import { useRoutes } from "react-router-dom";

// 各ページのコンポーネントをインポート
import Login from "./pages/Login";
import Sample from "./pages/Sample";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Greatlist from "./pages/Greatlist";
import Greatdata from "./pages/Greatdata";
import Greatdetail from "./pages/Greatdetail";
import Map from "./pages/Map";

// Axios
axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function(config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

const App = () => {
  // useRoutesでルート設定
  const routes = [
    { path: "/", element: <Sample /> },
    { path: "/login", element: <Login /> },
    { path: "/main", element: <Main /> },
    { path: "/register", element: <Register /> },
    { path: "/greatlist", element: <Greatlist /> },
    { path: "/greatdata/:eraId", element: <Greatdata /> },
    { path: "/greatdetail/:eraId/:personId", element: <Greatdetail /> },
    { path: "/map/:personId/:eventId", element: <Map /> },

    // エラーページ
    { path: "*", element: <div>ページが見つかりません</div> },
  ];

  // useRoutesを使ってルーティング設定
  const routing = useRoutes(routes);

  return <>{routing}</>;
};

export default App;
