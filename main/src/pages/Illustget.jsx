import React from 'react';
import { Link } from 'react-router-dom';

const Illustget = () => {

    
    const date = {
        name:"織田信長",
        event:"本能寺の変"
    }
    return (
        <main>
            <section className="illust-get">
                <div className="hakken-text">
                    <p>スポットを発見しました！ </p>
                </div>
                <div className="hakken-date">
                    <div className="hakken-name">
                        <h1>{date.name}</h1>
                    </div>
                    <div className="hakken-event">
                        <h2>{date.event}</h2>
                    </div>
                </div>
                <div className="get-button">
                    <Link to="/illustget2">
                        <button id="get-button">イラスト取得！</button>
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Illustget;