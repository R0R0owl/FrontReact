import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import returnImg from '../assets/img/return.png';

function RegisterPage() {
    // フォームデータを管理するステート
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // エラーメッセージを管理するステート
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    // フォームの入力変更を処理
    const handleChange = (e) => {
        const { name, value } = e.target;

        // 入力データを更新
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // 入力変更に応じてリアルタイムでバリデーション
        const fieldError = validateField(name,value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: fieldError,
        }));
    };

    // 個別フィールドのバリデーション
    const validateField = (name, value) => {
        switch (name) {
            case 'username':
                return value ? '' : 'ユーザーネームは必須です。';
            case 'email':
                return /\S+@\S+\.\S+/.test(value) ? '' : '有効なメールアドレスを入力してください。';
            case 'password':
                return value.length >= 6 ? '' : 'パスワードは6文字以上で入力してください。';
            case 'confirmPassword':
                return value === formData.password ? '' : 'パスワードが一致しません。';
            default:
                return '';
        }
    };

    // フォームの送信処理
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);

        // バリデーションエラーがなければ登録処理を実行
        if (Object.keys(newErrors).length === 0) {
            console.log('フォームが送信されました:', formData);

            // 登録処理後、ログインページにリダイレクト
            navigate('/login');

            // ここでAPI呼び出しなどを行う
        }
    };

    // バリデーション関数
    const validateForm = (data) => {
        const errors = {};

        if (!data.username) {
            errors.username = 'ユーザーネームは必須です。';
        }

        if (!data.email) {
            errors.email = 'メールアドレスは必須です。';
        }
        else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = '有効なメールアドレスを入力してください。';
        }

        if (!data.password) {
            errors.password = 'パスワードは必須です。';
        }
        else if (data.password.length < 6) {
            errors.password = 'パスワードは6文字以上で入力してください。';
        }

        if (data.password !== data.confirmPassword) {
            errors.confirmPassword = 'パスワードが一致しません。';
        }

        return errors;
    };

    return (
        <main>
            <section className="sinkitouroku">
                <div className="page-title">
                    <div className="return">
                        <Link to="/login">
                            <img src="src/assets/img/return.png" alt="return" />
                        </Link>
                    </div>
                    <h2 id="page-title">新規登録</h2>
                </div>

                <div id="tourokujouhou">
                    <form onSubmit={handleSubmit}>  {/* フォームタグを追加し、onSubmitで送信 */}
                        <div className="tourokujouhou">
                            <label htmlFor="username" id="touroku-name">ユーザネーム</label><br />
                            <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                value={formData.username} 
                                onChange={handleChange} 
                                required 
                            /><br />
                            {errors.username && <span className='error' aria-live='assertive'>{errors.username}</span>}
                        </div>
                        <div className="tourokujouhou">
                            <label htmlFor="email" id="touroku-mail">メールアドレス</label><br />
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            /><br />
                            {errors.email && <span className="error" aria-live='assertive'>{errors.email}</span>}
                        </div>
                        <div className="tourokujouhou">
                            <label htmlFor="password" id="touroku-pass">パスワード</label><br />
                            <input 
                                type={showPassword ? 'text' : 'password'} 
                                id="password" 
                                name="password" 
                                value={formData.password} 
                                onChange={handleChange} 
                                required 
                                /><br />
                            {errors.password && <span className='error' aria-live='assertive'>{errors.password}</span>}
                        </div>
                        <div className="tourokujouhou">
                            <label htmlFor="confirmPassword" id="kakunin-pass">パスワード(確認)</label><br />
                            <input 
                                type="password" 
                                id="confirmPassword" 
                                name="confirmPassword" 
                                value={formData.confirmPassword} 
                                onChange={handleChange} 
                                required 
                                /><br />
                            {errors.confirmPassword && <span className='error' aria-live='assertive'>{errors.confirmPassword}</span>}
                        </div>

                        <div className="touroku">
                            <button type="submit" id="touroku">新規作成</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default RegisterPage;