import React from 'react';
import { Link } from 'react-router-dom';

const Ijin = () => {
    return (
        <main>
        <section class="ijin-itiran2">
            <div class="page-title">
            <div className="return">
                <Link to="/Ijinitiran">
                <img src="./src/assets/img/return.png" alt="return" />
                </Link>
          </div>
                <h2 id="page-title">安土・桃山時代</h2>
            </div>
            <div class="ijin-name1">
                <div class="ijin-sintyoku"></div>
                <div class="ijin-name"><p>織田信長</p></div>
                <div className="ijin-yajirusi">
                <Link to="/Syousai"><p>&gt;</p></Link>
          </div>
            </div>
            <div class="ijin-name2">
                <div class="ijin-sintyoku"></div>
                <div class="ijin-name"><p>豊臣秀吉</p></div>
                <div className="ijin-yajirusi">
            <Link to="/Ijin"><p>&gt;</p></Link>
          </div>
            </div>
            <div class="ijin-name1">
                <div class="ijin-sintyoku"></div>
                <div class="ijin-name"><p>徳川家康</p></div>
                <div className="ijin-yajirusi">
                <Link to="/Ijin"><p>&gt;</p></Link>
          </div>
            </div>
        </section>
    </main>
    );
};


export default Ijin;
