import React from "react";
import { Link } from "react-router-dom";

const Detailed  = () => {
    return (
        <main>
            <section className="illust-syousai">
                <div className="illust-syousai-title">
                    <div className="il-syousai-title">
                        <div className="return2">
                            <Link to="/Image">
                                <img src="./src/assets/img/return.png" alt="return" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="illust-jouhou">
                    <div className="illust-name">
                        <h2>織田信長</h2>
                        <h3>1582年 本能寺の変</h3>
                        <p>取得日 : 0000/00/00</p>
                    </div>
                    <div className="illust-img">
                        <img src="./src/assets/img/honnouji.jpg" alt="illust" />
                    </div>
                    <Link to="#">
                        <div className="illust-change-button">
                            <img src="./src/assets/img/change.png" alt="change" />
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Detailed;