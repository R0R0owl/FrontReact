import React from 'react';
import { Link } from 'react-router-dom';

function IjinItiran() {
  return (
    <main>
      <section className="ijin-itiran">
        <div className="page-title">
          <div className="return">
            <Link to="/">
              <img src="./src/assets/img/return.png" alt="return" />
            </Link>
          </div>
          <h2 id="page-title">偉人検索</h2>
        </div>

        <div className="ijin1">
          <div className="ijin-sintyoku"><p>☑</p></div>
          <div className="ijin-name"><p>古墳時代</p></div>
          <div className="ijin-yajirusi">
            <Link to="#"><p>&gt;</p></Link>
          </div>
        </div>

        <div className="ijin2">
          <div className="ijin-sintyoku"><p>60%</p></div>
          <div className="ijin-name"><p>奈良時代</p></div>
          <div className="ijin-yajirusi">
            <Link to="#"><p>&gt;</p></Link>
          </div>
        </div>

        <div className="ijin3">
          <div className="ijin-sintyoku"><p>40%</p></div>
          <div className="ijin-name"><p>安土・桃山時代</p></div>
          <div className="ijin-yajirusi">
            <Link to="/Ijin"><p>&gt;</p></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default IjinItiran;
