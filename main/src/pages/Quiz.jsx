import React from 'react';
import { Link } from 'react-router-dom';


const Quiz = () => {
  return (
    <main>
      <section className="quiz">
        {/* ページタイトルセクション */}
        <div className="page-title">
          <div className="return">
            <a href="/newtop">
              <img src="src/assets/img/return.png" alt="return" />
            </a>
          </div>
          <h2 id="page-title">クイズ</h2>
        </div>

        {/* 表示メニューセクション */}
        <div className="quiz-hyouji-menu">
          {/* 絞り込みボタン */}
          <div className="siborikomi-button">
            <form action="#">
              <button type="submit" id="siborikomi-button">
                <img src="src/assets/img/filter.png" alt="filter" />
              </button>
            </form>
          </div>
          {/* 順番変更ボタン */}
          <div className="junban-button">
            <form action="#">
              <button type="submit" id="junban-button">
                <p id="junban">入手順</p>
                <p id="kugiri">|</p>
                <h3 id="sentaku-yajirusi">⇩</h3>
              </button>
            </form>
          </div>
        </div>

        {/* クイズ一覧 */}
        <div className="quiz-itiran">
          <div className="get-quiz">
            <h3 id="quiz-question">本能寺の変が起こったのは1582年である。</h3>
            <h3 id="quiz-answer">Yes / No</h3>
            <div className="quiz-tag">
              <p># 安土・桃山時代</p>
              <p># 織田信長</p>
            </div>
          </div>
        </div>
        <div className="quiz-itiran">
          <div className="get-quiz">
            <h3 id="quiz-question">豊臣秀吉は、武家出身である。</h3>
            <h3 id="quiz-answer">Yes / No</h3>
            <div className="quiz-tag">
              <p># 安土・桃山時代</p>
              <p># 豊臣秀吉</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Quiz;