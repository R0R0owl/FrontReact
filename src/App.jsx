import React from "react";
import { useRoutes } from "react-router-dom";

// 各ページコンポーネントをインポート
import Map from "./pages/Map";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Greatlist from "./pages/Greatlist";
import Greatdata from "./pages/Greatdata";
import Greatdetail from "./pages/Greatdetail";
import Illustrationlist from "./pages/Illustrationlist";
import Illustdetail from "./pages/Illustdetail";

const App = () => {
  // useRoutesでルート設定
  const routes = [
    // "/"Layoutは存在しない、Login画面が一番最初だからrouteをどうするか
    { path: "/", element: <Layout /> },
    { path: "/login", element: <Login /> },
    { path: "/main", element: <Main /> },
    { path: "/register", element: <Register /> },
    { path: "/greatlist", element: <Greatlist /> },
    { path: "/greatdata/:eraId", element: <Greatdata /> },
    { path: "/greatdetail/:eraId/:personId", element: <Greatdetail /> },
    { path: "/map", element: <Map /> },
    { path: "/illustlist", element: <Illustrationlist /> },
    { path: "/illustdetail", element: <Illustdetail /> },



    //エラーページ
    { path: "*", element: <div>ページが見つかりません</div> }
  ];

  const routing = useRoutes(routes); // useRoutesを使用してルーティングを作成

  return <>{routing}</>; // Reactコンポーネントを返す
};

export default App;
