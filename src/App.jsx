import React from "react";
import { useRoutes } from "react-router-dom";

// 各ページコンポーネントをインポート
import Home from "./pages/Home";
import About from "./pages/About";
import Map from "./pages/Map";

const App = () => {
  // useRoutesでルート設定
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/map", element: <Map /> }
  ];

  const routing = useRoutes(routes);  // useRoutesを使用してルーティングを作成

  return routing;
};

export default App;