import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

// これが"カスタムフック"
// …と呼ばれている、ルールに従っただけの関数。
/**
 * 認証機能を提供するカスタムフックです。
 * @returns 
 */
export function useAuth() {

    // 通信中を表すためのステート
    const [isLoading, setIsLoading] = useState(false);

    // エラーであることを表すためのステート
    const [errorMessage, setErrorMessage] = useState("");

    //遷移を行うためのカスタムフック (React Routerのもの)
    const navigate = useNavigate();

    //自分で作ったContext
    const authContext = useContext(AuthContext);

    // 通信処理を行うための関数
    /**
     * ログインを試行します。
     * @param {string} inputEmail 
     * @param {string} inputPassword 
     */
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

                //通信結果を"コンテクスト"に伝える！
                authContext.updateUser(result.data);

                //トップページに移動する
                navigate('/');

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

    return {
        isLoading,
        errorMessage,
        login
    };
}

/**
 * 指定ミリ秒数待機します。
 * @param {number} ms 
 * @returns 
 */
function sleepAsync(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
