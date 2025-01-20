import React from 'react';
import { Link } from 'react-router-dom';
import titleImg from '../assets/img/title_logo.png';

function MainMenu() {
  return (
    <body>
        <header>
            <div class="new-above-line">
                <img src="src/assets/img/title_logo.png" alt="title_logo" />
                <div class="user-menu">
                    <img src="src/assets/img/user.png" alt="user-icon" />
                    <div class="user-name">
                        <img src="src/assets/img/id-background.png" alt="id-background" />
                        <p>@oda_nobunaga</p>
                    </div>
                </div>
            </div>
            <div class="above-doubleline"></div>
        </header>

        <main>
            <div>
                <div className="main-menu-back">
                    <div className="balloon">
                        <Link to="/Greatlist" className='no-decoration'>
                            <div class="balloon-container">
                                <img src="src/assets/img/talkbox2.png" className='click-button' alt="偉人一覧" />
                                <p className='char'>いじん</p>
                            </div>
                        </Link>
                    </div>
                    <div className="balloon">
                        <Link to="/illustlist" className='no-decoration'>
                            <div class="balloon-container">
                                <img src="src/assets/img/talkbox1.png" className='click-button' alt="イラスト一覧" />
                                <p className='char'>いらすと</p>
                            </div>
                        </Link>
                    </div>
                    <div className='balloon'>
                        <Link to="/quiz" className='no-decoration'>
                            <div class="balloon-container">
                                <img src="src/assets/img/talkbox2.png" className='click-button' alt="クイズ" />
                                <p className='char'>くいず</p>
                            </div>
                        </Link>
                    </div>
                    <div className='balloon'>
                        <Link to="/ai" className='no-decoration'>
                            <div class="balloon-container">
                                <img src="src/assets/img/talkbox1.png" className='click-button' alt="AI変換" />
                                <p className='char'>AI</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>

        <footer id='old-footer'>
            <div class="bottom-doubleline"></div>
            <div class="bottom-line"></div>
        </footer>
    </body>
  );
}

// コンポーネント名を一致させる
export default MainMenu;
