import React from 'react';
import { Link } from 'react-router-dom';

const eras = [
    { id: 1, name: '古墳時代', sintyoku: '☑'},
    { id: 2, name: '奈良時代', sintyoku: '60%'},
    { id: 3, name: '安土・桃山時代', sintyoku: '40%'}
];

const EraList = () => {
    return (
        <section className="ijin-itiran">
            <div className="page-title">
                <div className="return">
                    <Link to="/newtop">
                        <img src="assets/img/return.png" alt="return" />
                    </Link>
                </div>
                <h2 id="page-title">偉人検索</h2>
            </div>
            {eras.map((era) => (
                <div key={era.id} className={`ijin${era.id}`}>
                    <div className="ijin-sintyoku">
                        <p>{era.sintyoku}</p>
                    </div>
                    <div className="ijin-name">
                        <p>{era.name}</p>
                    </div>
                    <div className="ijin-yajirusi">
                        <Link to={`/ijinitiran2/${era.id}`}>
                            <p>&gt;</p>
                        </Link>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default App