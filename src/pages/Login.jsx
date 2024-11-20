import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function Login() {
    const [count, setCount] = useState(0)

    return (
        <>
            <main className="form-signin w-50 m-auto">
                <form>
                    <h1 className="h3 mb-3 fw-normal">ログインしてください。</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">メールアドレス</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">パスワード</label>
                    </div>

                    <button className="btn btn-primary w-100 py-2" type="button">ログイン</button>
                </form>
            </main>
        </>
    )
}

export default Login
