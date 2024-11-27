import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';

function MainMenu() {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [htmlContent, setHtmlContent] = useState(''); // サーバーから取得するHTMLデータ

  const fetchHtml = () => {
    setIsLoading(true);
    fetch('/api/html-content') // サーバーからHTMLを取得するエンドポイント
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTPエラー: ${response.status}`);
        }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('text/html')) {
          throw new Error('サーバーからHTML以外の応答を受信しました');
        }
        return response.text(); // HTMLをテキストとして取得
      })
      .then((html) => {
        setHtmlContent(html); // HTMLデータを状態に保存
        setHasError(false);
      })
      .catch((error) => {
        console.error('エラーが発生しました:', error.message);
        setErrorMessage(error.message || '予期しないエラーが発生しました。');
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchHtml(); // コンポーネントのマウント時にHTMLを取得
  }, []);

  if (isLoading) {
    return <div>読み込み中...</div>;
  }

  if (hasError) {
    return (
      <div>
        <ErrorMessage message={errorMessage} />
        <button onClick={fetchHtml}>再試行</button>
      </div>
    );
  }

  return (
    <div>
      <div className="new-title-section">
        <div className="title-background">
          <div className="title-box">
            <div className="title">
              <img src="src/assets/img/title.png" id="title" alt="title" />
            </div>
          </div>
        </div>
      </div>

      <div className="main-menu-back">
        <div className="main-menu1">
          <div className="ijin-button">
            <Link to="/Ijinitiran">
              <button id="ijin-button" type="button">
                偉人一覧
              </button>
            </Link>
          </div>
          <div className="irasuto-button">
            <Link to="/Image">
              <button id="irasuto-button" type="button">
                イラスト一覧
              </button>
            </Link>
          </div>
        </div>
        <div className="main-menu2">
          <div className="quiz-button">
            <Link to="/quiz">
              <button id="quiz-button" type="button">
                クイズ
              </button>
            </Link>
          </div>
          <div className="henkan-button">
            <button id="henkan-button" type="button">
              AI変換
            </button>
          </div>
        </div>
      </div>

      {/* 取得したHTMLコンテンツを表示 */}
      <div>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  );
}

export default MainMenu;

