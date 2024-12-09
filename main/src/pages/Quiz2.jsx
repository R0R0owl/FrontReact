import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => {
  // クイズの問題を配列で管理
  const mondai = [
    {
      id: 1,
      question: "本能寺の変が起こったのは1582年である。",
      tags: ["安土・桃山時代", "織田信長"],
      correctAnswer: true, // 正解: Yes
    },
    {
      id: 2,
      question: "豊臣秀吉は、武家出身である。",
      tags: ["安土・桃山時代", "豊臣秀吉"],
      correctAnswer: false, // 正解: No
    },
    {
        id: 3,
        question: "結城秀康は、徳川家康の息子である。",
        tags: ["安土・桃山時代", "徳川家康"],
        correctAnswer: true, // 正解: No
      },
  ];

  const [answers, setAnswers] = useState({});

  // 回答を記録する関数
  const handleAnswer = (id, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: answer === mondai.find((item) => item.id === id).correctAnswer,
    }));
  };

  return (
    <main>
      <section className="quiz">
        {/* ページタイトルセクション */}
        <div className="page-title">
          <div className="return">
            <Link to="/">
              <img src="src/assets/img/return.png" alt="ホームページに戻る" />
            </Link>
          </div>
          <h2 id="page-title">クイズ</h2>
        </div>

        {/* 表示メニューセクション */}
        <div className="quiz-hyouji-menu">
          {/* 絞り込みボタン */}
          <div className="siborikomi-button">
            <button type="button" className="filter-button">
              <img src="src/assets/img/filter.png" alt="クイズの絞り込み" />
            </button>
          </div>
          {/* 順番変更ボタン */}
          <div className="junban-button">
            <button type="button" className="sort-button">
              <p id="junban">入手順</p>
              <p id="kugiri">|</p>
              <h3 id="sentaku-yajirusi">⇩</h3>
            </button>
          </div>
        </div>

        {/* クイズ一覧 */}
        <div className="quiz-itiran">
          {mondai.map((item) => (
            <div className="get-quiz" key={item.id}>
              <h3 id="quiz-question">{item.question}</h3>
              <div id="quiz-answer">
                <button
                  type="button"
                  className="answer-button"
                  onClick={() => handleAnswer(item.id, true)}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="answer-button"
                  onClick={() => handleAnswer(item.id, false)}
                >
                  No
                </button>
              </div>
              <div className="quiz-tag">
                {item.tags.map((tag, idx) => (
                  <p key={idx}># {tag}</p>
                ))}
              </div>
              {/* 回答結果の表示 */}
              {answers[item.id] !== undefined && (
                <p>
                  {answers[item.id] ? "正解！" : "不正解"}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Quiz;