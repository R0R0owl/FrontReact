import React from "react";
import { Link } from "react-router-dom";

const Detailed  = () => {
    const date = {
        name:"織田信長",
        event:"本能寺の変",
        year:"1582年",
        acquisitionDate: "2024/11/20", // 動的な取得日
        imageSrc: "src/assets/img/honnouji.jpg"
    }

    // ページを再読み込みする関数
    const handleReload = () => {
        window.location.reload();
    };
    
    return (
        <main>
            <section className="illust-syousai">
                <div className="illust-syousai-title">
                    <div className="il-syousai-title">
                        <div className="return2">
                            <Link to="/Illustitiran">
                                <img src="src/assets/img/return.png" alt="return" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="illust-jouhou">
                    <div className="illust-name">
                        <h2>{date.name}</h2>
                        <h3>{date.year} {date.event}</h3>
                        <p>取得日 : {date.acquisitionDate}</p>
                    </div>
                    <div className="illust-img">
                        <img src={date.imageSrc} alt="illust" />
                    </div>
                    <div className="illust-change">
                        <button onClick={handleReload} className="illust-change-button">
                            <img src="./src/assets/img/change.png" alt="change" />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Detailed;