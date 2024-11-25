import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import { useNavigate } from 'react-router-dom';
import titleImg from '../assets/img/title.png';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const ERROR_MESSAGES = {
        invalidEmail: '有効なメールアドレスを入力してください',
        invalidCredentials: 'メールアドレスかパスワードが違います',
    };
    const navigate = useNavigate();  // react-router-domのuseNavigationフックを使用

    // ログインフォームの送信処理
    const handleSubmit = (e) => {
        e.preventDefault();  // ページのリロードを防止

        // メールアドレスの簡易バリデーション
        if (!email.includes('@')) {
            setErrorMessage(ERROR_MESSAGES.invalidEmail);
            return;
        }

        // 仮の認証処理
        if (email === '22jz0104@jec.ac.jp' && password === 'password') {
            setErrorMessage('');  // エラーをリセット
            navigate('/newtop');
        }
        else {
            setErrorMessage(ERROR_MESSAGES.invalidCredentials);
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
                        <label htmlFor="mail-address" id='mail'>メールアドレス</label><br />
                        <input type="email" id="mail-address" name="mail-address" value={email}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                        onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass" id="pass">パスワード</label><br />
                            <input type="password" id="password" name="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    {errorMessage && (
                        <p className='error-message'>
                            {errorMessage}
                        </p>
                    )}
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
