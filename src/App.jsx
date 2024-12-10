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
    { path: "/", element: <Layout /> },
    { path: "/login", element: <Login /> },
    { path: "/main", element: <Main /> }
  ];

  const routing = useRoutes(routes); // useRoutesを使用してルーティングを作成

  return <>{routing}</>; // Reactコンポーネントを返す
};

export default App;
