import React from "react";
import { Link } from "react-router-dom";

const Syousai = () => {
    return (
        <main>
            <section className="ijin-syousai">
                <div className="page-title">
                    <div className="return">
                        <Link to="/Ijin">
                            <img src="./src/assets/img/return.png" alt="return" />
                        </Link>
                    </div>
                    <h2 id="page-title">織田信長</h2>
                </div>

                <div className="syousai-jouhou">
                    <div className="ijin-image">
                        <img src="./src/assets/img/odanobunaga.jpg" alt="ijin-image" />
                    </div>
                    <div className="ijin-description">
                        <p>
                            織田信長(1534-1582)は戦国時代の有力大名で、革新的な技術と政策で知られる。
                            尾張国出身で、天下統一を目指し、信長包囲網を打破するも、本能寺の変で明智光秀により討たれる。
                        </p>
                    </div>
                </div>

                <div className="nenpyou-itiran">
                    <Nenpyou event="1534年 出生" link="#" marked />
                    <Nenpyou event="1547年 初陣" link="#" />
                    <Nenpyou event="1554年 清州城に移転" link="#" marked />
                    <Nenpyou event="1582年 本能寺の変" link="#" marked />
                </div>
            </section>
        </main>
    );
};

const Nenpyou = ({ event, link, marked }) => (
    <div className={`nenpyou ${marked ? 'marked' : ''}`}>
        <div className="clear-mark">{marked ? '★' : ''}</div>
        <div className="event">{event}</div>
        <div className="nenpyou-yajirusi">
            <Link to={link}><p>&gt;</p></Link>
        </div>
    </div>
);

export default Syousai;