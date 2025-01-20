import React from 'react'; // React をインポート
import { createRoot } from 'react-dom/client'; // createRoot をインポート
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter をインポート
import './assets/css/style.css'; // CSS スタイルをインポート
import App from './App.jsx'; // メインコンポーネントをインポート

// ルートの作成とレンダリング
const root = createRoot(document.getElementById('root')); // createRoot を使用
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
