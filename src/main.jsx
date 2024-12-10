import React from 'react';
import ReactDOM from 'react-dom/client'; // createRoot用に変更
import { BrowserRouter } from 'react-router-dom'; // BrowserRouterをインポート
import App from './App'; // Appコンポーネントをインポート
import './assets/css/main.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // createRootを使用
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
