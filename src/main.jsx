import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';  // BrowserRouterをインポート
import App from './App';  // Appコンポーネントをインポート

ReactDOM.render(
  <BrowserRouter>  {/* ルートコンポーネントをBrowserRouterでラップ */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
