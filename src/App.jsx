import React from "react";
import { useRoutes } from "react-router-dom";

// 各ページコンポーネントをインポート
import Map from "./pages/Map";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Main from "./pages/Main";

const App = () => {
  // useRoutesでルート設定
  const routes = [
    // "/"Layoutは存在しない、Login画面が一番最初だからrouteをどうするか
    { path: "/", element: <Layout /> },
    { path: "/login", element: <Login /> },
    { path: "/main", element: <Main /> },


    //エラーページ
    { path: "*", element: <div>ページが見つかりません</div> }
  ];

  const routing = useRoutes(routes); // useRoutesを使用してルーティングを作成

  return <>{routing}</>; // Reactコンポーネントを返す
};

export default App;
