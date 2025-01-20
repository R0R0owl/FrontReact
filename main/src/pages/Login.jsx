import React, { useState } from "react";
import axios from 'axios';
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import titleImg from '../assets/img/title-background.png';

function Login() {

    const navigate = useNavigate();

    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        setLogin({...loginInput, [e.target.name]: e.target.value});
    }

    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/login`, data).then(res => {
                console.log(res);
                if(res.data.status === 200){
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    // swal("ログイン成功", res.data.message, "success");
                    navigate('/main');
                    location.reload();
                } else if (res.data.status === 401){
                    swal("注意", res.data.message, "warning");
                } else {
                    setLogin({...loginInput, error_list: res.data.validation_errors});
                }
            });
        });
    }

    return (
        <body>
            <header>
                <div className="above-line"></div>
                <div className="above-doubleline"></div>
            </header>
            
            <main>
                <div className="title">
                    <img src={titleImg} id="title-logo" alt="title-logo" />
                </div>

                <div className="login-container">
                    <form onSubmit={loginSubmit}>
                        <div className="form-group">
                            <label htmlFor="mail-address" id="mail">メールアドレス</label><br />
                            <input type="email" id="mail-address" name="email" onChange={handleInput} value={loginInput.email} className="form-control" required /><br />
                            <span>{loginInput.error_list.email}</span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" id="pass">パスワード</label><br />
                            <input type="password" id="password" name="password" onChange={handleInput} value={loginInput.password} className="form-control" required />
                            <span>{loginInput.error_list.password}</span>
                        </div>

                        <div className="login">
                            <button id="login" type="submit">ログイン</button>
                        </div>
                    </form>
                </div>

                <div className="sinki-container">
                    <button
                        id="sinki"
                        type="button"
                        onClick={() => navigate('/register')}  // 新規登録ページへ遷移
                    >
                        ユーザ登録
                    </button>
                </div>
            </main>
            <footer id="old-footer">
                <div class="bottom-doubleline"></div>
                <div class="bottom-line"></div>
            </footer>
        </body>
    );
}

export default Login;
