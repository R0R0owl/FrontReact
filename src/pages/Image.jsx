import React from "react";
import { Link } from "react-router-dom";

const Image = () => {
    const images = [
        "./src/assets/img/honnouji.jpg",
        "./src/assets/img/honnouji.jpg",
        "./src/assets/img/honnouji.jpg",
        "./src/assets/img/honnouji.jpg",
        "./src/assets/img/honnouji.jpg",
    ];

    return (
        <main>
            <section className="illust-itiran">
                <div className="page-title">
                    <div className="return">
                        <Link to="/Mainhome">
                            <img src="./src/assets/img/return.png" alt="return" />
                        </Link>
                    </div>
                    <h2 id="page-title">イラスト一覧</h2>
                </div>
                
                <div className="il-ijin">
                    <h3>織田信長</h3>
                    <div className="il-illust">
                        {images.map((img, index) => (
                            <div className="il-img" key={index}>
                                <Link to="/detailed">
                                    <img src={img} alt="illust" id={index % 2 === 0 ? "ai" : ""} />
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
                                <Link to="/detailed">
                                    <img src={img} alt="illust" id={index % 2 === 0 ? "ai" : ""} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Image;
