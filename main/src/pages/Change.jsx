import React from "react";
import { Link, useLocation } from "react-router-dom";

const Change = () => {
    const location = useLocation();
    const { image } = location.state || {};

    if (!image) {
        return (
            <div>
                <p>画像が選択されていません。</p>
                <Link to="/">戻る</Link>
            </div>
        );
    }

    return (
        <section className="change">
            <div className="change-title">
                <div className="ch-title">
                    <div className="return2">
                        <Link to="/ai">
                            <img src="src/assets/img/return.png" alt="return" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="change-illust">
                <div className="ch-illust-name">
                    <h2>{image.title}</h2>
                    <h3>1582年 本能寺の変</h3>
                    <p>取得日 : 0000/00/00</p>
                </div>
                <div className="ch-illust-img">
                    <img src={image.src} alt="illust" />
                </div>
                <div className="ch-arrow">
                    <h3>⇌</h3>
                </div>
                <div className="ch-box">
                    <img src="src/assets/img/question.png" alt="question" />
                </div>
            </div>
            <div className="ch-button">
                <button
                    id="change-button"
                    onClick={() => alert("後々変換処理記述")}>
                        変換
                    </button>
            </div>
        </section>
    );
};

export default Change;