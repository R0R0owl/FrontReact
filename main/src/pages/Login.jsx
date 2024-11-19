import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import { useNavigate } from 'react-router-dom';
import titleImg from '../assets/img/title.png';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();  // react-router-domのuseNavigationフックを使用

    // フォーム送信時の処理
    const handleSubmit = (e) => {
        e.preventDefault();  // ページ遷移を防ぐ

        if (!email.includes('@')) {
            setErrorMessage('有効なメールアドレスを入力してください');
            return;
        }

        // ログイン処理(ここでは仮の処理として、ログイン成功時に遷移)
        if (email === '22jz0104@jec.ac.jp' && password === 'password') {
            setErrorMessage('');  // エラーをリセット
            navigate('/newtop');
        }
        else {
            setErrorMessage('メールアドレスかパスワードが違います');
        }
    };

    return (
        <main>
            <div className="new-title-section">
                <div className="title-background">
                    <div className="title-box">
                        <div className="title">
                            <img src={titleImg} id="title" alt="title" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="mail" id='mail'>メールアドレス</label><br />
                        <input type="email" id="mail-address" name="mail-address" value={email} 
                        onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass" id="pass">パスワード</label><br />
                            <input type="password" id="password" name="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    {errorMessage && <p className='error-message'>{errorMessage}</p>}
                    <div className="login">
                            <button id="login" type="submit">ログイン</button>
                    </div>
                </form>
            </div>
            <div className="sinki-container">
                <button id="sinki" type="button"
                onClick={() => navigate('/sinkitouroku')}  // 新規登録ページへ遷移
                >新規登録</button>
            </div> 
        </main>
    )
}

export default Login
