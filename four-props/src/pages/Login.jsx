import { useState } from 'react'
import { useAuth } from '../hooks/AuthHook';

function Login(props) {
    // ユーザーの入力状態を管理するためのステート
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //カスタムフックを呼び出すことにより、コードを分離して共通化！
    const auth = useAuth(props.updateUser);

    return (
        <>
            <main className="form-signin w-50 m-auto">
                <form>
                    <h1 className="h3 mb-3 fw-normal">ログインしてください。</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="reactsample-inputemail" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} />
                        <label htmlFor="reactsample-inputemail">メールアドレス</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                        <label htmlFor="floatingPassword">パスワード</label>
                    </div>

                    <button className="btn btn-primary w-100 py-2" type="button" disabled={auth.isLoading} onClick={() => auth.login(email, password)}>ログイン</button>
                </form>

                {/* isLoadingフラグが有効のときだけ、読み込み中の表示を出します。 */}
                {
                    auth.isLoading ?
                        <div className="d-flex justify-content-center mt-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            しばらくお待ちください
                        </div>
                        : null
                }

                {/* errorMessageにデータが存在しているときだけ、Alertを表示します。 */}
                {
                    auth.errorMessage ? <div className="alert alert-danger mt-5" role="alert">
                        {auth.errorMessage}
                    </div> : null
                }
            </main>
        </>
    )
}

export default Login
