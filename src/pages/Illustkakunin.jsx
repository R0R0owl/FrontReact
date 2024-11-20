import React from "react";
import { Link } from "react-router-dom";

const Illustkakunin = () => {
    const date = {
        name:"織田信長",
        event:"本能寺の変",
        year:"1582年",
        acquisitionDate: "2024/11/20", // 動的な取得日
        imageSrc: "./src/assets/img/honnouji.jpg"
    }

    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Check%20out%20this%20amazing%20app!`;

    return (
        <main>
        <section className="illust-kakunin">
            <div className="illsut-kakunin-title">
                <div className="kakunin-title">
                    <div className="return2">
                        <Link to="/Syousai">
                            <img src="src/assets/img/return.png" alt="return"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="get-img-jouhou">
                <div className="get-img-name">
                    <h2>{date.name}</h2>
                    <h3>{date.year}</h3>
                    <h3>{date.event}</h3>
                    <p>取得日 :{date.acquisitionDate}</p>
                </div>
                <div className="get-img">
                    <img src={date.imageSrc} alt="get-img"/>
                </div>
                <div className="get-img-menu">
                    <div className="joudan-menu">
                        <div className="kyouyu-button">
                            <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
                                <button type="button" id="kyouyu-button">
                                    Twitterで共有
                                </button>
                            </a>
                        </div>
                        <div className="ai-button">
                            <Link to="#">
                                    <button type="submit" id="ai-button">AI変換</button>
                            </Link>
                        </div>
                    </div>
                    <div className="gedan-menu">
                        <div className="home-button">
                            <Link to="/">
                                <button type="submit" id="home-button">ホーム</button>
                            </Link>
                        </div>
                        <div className="irasutoitiran-button">
                            <Link to="/Image">
                                <button type="submit" id="irasutoitiran-button">イラスト一覧</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
}

export default Illustkakunin;