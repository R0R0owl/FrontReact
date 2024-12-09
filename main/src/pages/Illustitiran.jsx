import React from "react";
import { Link } from 'react-router-dom'; 


const Image = () => {
    const images = [
        "src/assets/img/honnouji.jpg",
        "src/assets/img/honnouji.jpg",
        "src/assets/img/honnouji.jpg",
        "src/assets/img/honnouji.jpg",
        "src/assets/img/honnouji.jpg"
    ];

        // ページを再読み込みする関数
        const handleReload = () => {
            window.location.reload();
        };

    return (
        <main>
            <section className="illust-itiran">
                <div className="page-title">
                    <div className="return">
                        <Link to="/newtop">
                            <img src="src/assets/img/return.png" alt="return" />
                        </Link>
                    </div>
                    <h2 id="page-title">イラスト一覧</h2>
                </div>
                
                <div className="il-ijin">
                    <h3>織田信長</h3>
                    <div className="il-illust">
                        {images.map((img, index) => (
                            <div className="il-img" key={index}>
                                <Link to="/illustsyousai">
                                    {/* ai で変換したものをidで色を変化させる */}
                                    <img src={img} alt="illust" id={Math.random() > 0.5 ? "ai" : ""} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="il-ijin">
                    <h3>豊臣秀吉</h3>
                    <div className="il-illust">
                        {images.map((img, index) => (
                            <div className="il-img" key={index}>
                                <Link to="/illustsyousai">
                                    <img src={img} alt="illust" id={index % 3 === 0 ? "ai" : ""} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <div className="illust-change">
                <button onClick={handleReload} className="illust-change-button">
                    <img src="./src/assets/img/change.png" alt="change" />
                </button>
            </div>
        </main>
    );
};

export default Image;