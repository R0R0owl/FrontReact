import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import returnImg from "../assets/img/return.png";

function Register() {
    const navigate = useNavigate();

    const [registerInput, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        // passwordconfirm: '',
        error_list: [], // 空オブジェクトに変更
    });

    const handleInput = (e) => {
        setRegister({ ...registerInput, [e.target.name]: e.target.value });
    };

    const registerSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
        };

        axios.get("/sanctum/csrf-cookie").then(() => {
            axios.post("/api/register", data).then((res) => {
                if (res.data.status === 200) {
                    localStorage.setItem("auth_token", res.data.token);
                    localStorage.setItem("auth_name", res.data.username);
                    swal("Success", res.data.message, "success");
                    navigate("/main");
                } else {
                    setRegister({...registerInput, error_list: res.data.validation_errors});
                }
            });
        });
    };

    return (
        <body>
            <header>
                <div class="above-line"></div>
                <div class="above-doubleline"></div>
            </header>
        
            <main>
                <div className="page-title">
                    <div className="return">
                        <Link to="/login">
                            <img src={returnImg} alt="return" />
                        </Link>
                    </div>
                    <h2 id="page-title">ユーザ登録</h2>
                </div>

                <div id="register-info">
                    <form onSubmit={registerSubmit}>
                        <div className="register-info">
                            <label htmlFor="username" id="register-name">ユーザネーム</label><br />
                            <input
                                type="text"
                                id="username"
                                name="name"
                                onChange={handleInput}
                                value={registerInput.name}
                                className="form-control"
                                required
                            /><br />
                            <span>{registerInput.error_list.name}</span>
                        </div>
                        <div className="register-info">
                            <label htmlFor="email" id="register-mail">メールアドレス</label><br />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                onChange={handleInput}
                                value={registerInput.email}
                                className="form-control"
                                required
                            /><br />
                            <span>{registerInput.error_list.email}</span>
                        </div>
                        <div className="register-info">
                            <label htmlFor="password" id="register-pass">パスワード</label><br />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                onChange={handleInput}
                                value={registerInput.password}
                                className="form-control"
                                required
                            /><br />
                            <span>{registerInput.error_list.password}</span>
                        </div>
                            {/* <div className="register-info">
                                <label htmlFor="confirmPassword" id="kakunin-pass">パスワード(確認)</label><br />
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="passwordconfirm"
                                    onChange={handleInput}
                                    value={registerInput.passwordconfirm}
                                    className="form-control"
                                    required
                                /><br />
                                <span>{registerInput.error_list.passwordconfirm}</span>
                            </div> */}

                        <div className="registration">
                            <button type="submit" id="registration">ユーザ作成</button>
                        </div>
                    </form>
                </div>
            </main>

            <footer id="old-footer">
                <div class="bottom-doubleline"></div>
                <div class="bottom-line"></div>
            </footer>
        </body>
    );
}

export default Register;
