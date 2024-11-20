import React from 'react';
import { Link } from 'react-router-dom';

const eras = [
    { id: 1, name: '古墳時代', progress: '☑' },
    { id: 2, name: '奈良時代', progress: '60%' },
    { id: 3, name: '安土・桃山時代', progress: '40%' }
];

const EraList = () => {
    return (
        <section className="ijin-list">
            <div className="page-title">
                <div className="return">
                    <Link to="/newtop">
                        <img src="src/assets/img/return.png" alt="newtopに戻る" />
                    </Link>
                </div>
                <h2 id="page-title">偉人検索</h2>
            </div>
            {eras.map((era) => (
                <div key={era.id} className={`era-item era-${era.id}`}>
                    <div className="era-progress">
                        <p>{era.progress}</p>
                    </div>
                    <div className="era-name">
                        <p>{era.name}</p>
                    </div>
                    <div className="era-arrow">
                        <Link to={`/ijinitiran2/${era.id}`} className='next-link'>
                            <p>&gt;</p>
                        </Link>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default EraList;