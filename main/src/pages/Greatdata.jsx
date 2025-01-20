import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Greatdata = () => {
    const { eraId } = useParams(); // URLパラメータからeraIdを取得
    const [persons, setPersons] = useState([]);

    const url = `http://127.0.0.1:8000/api/greatmanaged?period_id=${eraId}`;

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(url);
                setPersons(response.data.post);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        })();
    }, [eraId]); // eraIdが変更されたときに再実行
    console.log("Persons data:", persons);

    return (
        <section className="person-data">
            <div className="page-title">
                <div className="return">
                    <Link to="/greatlist">
                        <img src="/src/assets/img/return.png" alt="時代一覧画面に戻る" />
                    </Link>
                </div>
                <h2 id="page-title">偉人データ</h2>
            </div>
            {persons.length === 0 ? (
                <p>この時代の偉人データはありません。</p>
            ) : (
                persons.map((person) => (
                    <div key={person.id} className="ijin-item">
                        <div className="ijin-name">
                            <p>{person.name}</p>
                        </div>
                        <div className="ijin-arrow">
                            <Link to={`/greatdetail/${eraId}/${person.id}`} className="next-link">
                                <p>&gt;</p>
                            </Link>
                        </div>
                    </div>
                ))
            )}
        </section>
    );
};

export default Greatdata;
