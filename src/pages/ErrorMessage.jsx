import React from 'react';

function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <h2>エラーが発生しました</h2>
      <p>{message || '接続に問題があります。もう一度お試しください。'}</p>
    </div>
  );
}

export default ErrorMessage;