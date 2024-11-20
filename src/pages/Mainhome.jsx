import React from 'react';
import { Link } from 'react-router-dom';

function MainMenu() {
  return (
    <div>
      <div className="new-title-section">
        <div className="title-background">
          <div className="title-box">
            <div className="title">
              <img src="./src/assets/img/title.png" id="title" alt="title" />
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
    </div>
  );
}

export default MainMenu;
