import { useState } from 'react'

function Login() {
    // ユーザーの入力状態を管理するためのステート
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // 通信中を表すためのステート
    const [isLoading, setIsLoading] = useState(false);

    // エラーであることを表すためのステート
    const [errorMessage, setErrorMessage] = useState("");

    // 通信処理を行うための関数
    async function login(inputEmail, inputPassword) {

        // メールアドレスに入力された文字を用いてAPIを呼び出し、データが存在していればログイン完了とする。
        //
        // APIドキュメントは以下を参照。
        // https://www.umayadia.com/Note/Note028WebAPISample.htm#A5_4

        //IsLoadingステートをtrueにします。
        setIsLoading(true);

        // 通信が早いとローディングが見えないため1000ミリ秒待機しています。
        await sleepAsync(1000);

        // APIエンドポイントと通信
        const response = await fetch('https://umayadia-apisample.azurewebsites.net/api/persons/' + encodeURIComponent(inputEmail));
        if (response.ok) {
            const result = await response.json();
            if (result.data) {
                //認証成功
                setErrorMessage(result.data.name + "さん、ようこそ！！！！");

                //TODO: 通信結果を"親"に伝える必要があります。

            } else {
                //認証失敗
                setErrorMessage("IDまたはパスワードが間違っているようです。");
            }
        } else {
            //ネットワークエラー
            setErrorMessage("通信エラーが発生しました。もう一度お試しください。");
        }

        //IsLoadingステートをfalseにします。
        setIsLoading(false);
    }

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

                    <button className="btn btn-primary w-100 py-2" type="button" disabled={isLoading} onClick={() => login(email, password)}>ログイン</button>
                </form>

                {/* isLoadingフラグが有効のときだけ、読み込み中の表示を出します。 */}
                {
                    isLoading ?
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
                    errorMessage ? <div className="alert alert-danger mt-5" role="alert">
                        {errorMessage}
                    </div> : null
                }
            </main>
        </>
    )
}

export default Login

/**
 * 指定ミリ秒数待機します。
 * @param {number} ms 
 * @returns 
 */
function sleepAsync(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
