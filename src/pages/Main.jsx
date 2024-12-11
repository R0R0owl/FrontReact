import React from 'react';
import { Link } from 'react-router-dom';
import titleImg from '/src/assets/img/title.png';

function MainMenu() {
  return (
    <div>
      <div className="new-title-section">
        <div className="title-background">
          <div className="title-box">
            <div className="title">
              <img src={titleImg} id="title" alt="title" />
            </div>
          </div>
        </div>
      </div>

      <div className="main-menu-back">
        <div className="main-menu1">
          <div className="ijin-button">
            <Link to="/Greatlist">
              <button id="ijin-button" type="button">偉人一覧</button>
            </Link>
          </div>
          <div className="irasuto-button">
            <Link to="/illustlist">
              <button id="irasuto-button" type="button">イラスト一覧</button>
            </Link>
          </div>
        </div>
        <div className="main-menu2">
          <div className="quiz-button">
            <Link to="/quiz">
              <button id="quiz-button" type="button">クイズ</button>
            </Link>
          </div>
          <div className="henkan-button">
            <Link to="/ai">
              <button id="henkan-button" type="button">AI変換</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// コンポーネント名を一致させる
export default MainMenu;
