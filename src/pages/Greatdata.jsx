import React from "react";
import { useParams, Link } from "react-router-dom";

// 偉人データ
const persons = {
    1: [
        { id:1, name: '仁徳天皇' },
        { id:2, name: '応神天皇' },
    ],
    2: [
        { id: 1, name: '聖武天皇' },
        { id: 2, name: '行基' },
    ],
    3: [
        { id: 1, name: '織田信長' },
        { id: 2, name: '豊臣秀吉' },
        { id: 3, name: '徳川家康' }
    ]
};

// 時代名マッピング
const eraNames = {
    1: '古墳時代',
    2: '奈良時代',
    3: '安土・桃山時代'
};

const PersonList = () => {
    const { eraId } = useParams();  // URLパラメータから時代IDを取得
    const eraPersons = persons[eraId] || [];  // 該当する偉人データを取得
    const eraName = eraNames[eraId] || '不明な時代';  // 時代名を取得

    return (
        <section className="person-list">
            <div className="page-title">
                <div className="return">
                    <Link to="/greatlist">
                        <img src="/src/assets/img/return.png" alt="時代一覧画面に戻る" />
                    </Link>
                </div>
                <h2 id="page-title">{eraName}</h2>
            </div>
            {/* 偉人リストを動的に生成 */}
            {eraPersons.length === 0 ? (
                <p>この時代の偉人データはありません。</p>
            ) : (
                eraPersons.map((person) => (
                    <div key={person.id} className="ijin-item">
                        <div className="ijin-progress"></div>
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


export default PersonList;