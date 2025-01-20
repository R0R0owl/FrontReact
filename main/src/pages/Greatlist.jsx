import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { Link } from 'react-router-dom';

function Period() {
    const [value, setValue] = useState([]);

    const url = "http://127.0.0.1:8000/api/periods";

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(url);
                setValue(res.data.post);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    return (
        <section className="ijin-list">
            <div className="page-title">
                <div className="return">
                    <Link to="/main">
                        <img src="src/assets/img/return.png" alt="newtopに戻る" />
                    </Link>
                </div>
                <h2 id="page-title">いじん検索</h2>
            </div>
            {value.map((article) => (
                <div key={article.id} className={`era-item era-${article.id}`}>
                    <div className='era-name'>
                        <p>{article.name}</p>
                    </div>
                    <div className='era-arrow'>
                        <Link to={`/greatdata/${article.id}`} className='next-link'>
                            <p>&gt;</p>
                        </Link>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Period;