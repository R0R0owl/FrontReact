import { createContext, useEffect, useState } from "react";

//初期値を{ user: null, authDate: null. updateUser: null }で初期化する。
//データが増えた場合はここを増やして初期値を設定する。
//user -> 認証しているユーザーの情報(ログイン時に設定される)
//authDate -> ログインした日時(updateUserが呼ばれたときに設定される)
//updateUser -> ユーザー情報を更新したいときに呼ぶ。この実態は以下のProviderで実装している。
export const AuthContext = createContext({ user: null, authDate: null, updateUser: null });

export const AuthContextProvider = (props) => {

    const [user, setUser] = useState(null);
    const [authDate, setAuthDate] = useState(null);

    // ユーザー情報を更新されたときの処理
    const updateUser = (newUser) => {
        setUser(newUser);
        setAuthDate(new Date());

        console.info('ユーザー情報が更新されました✨');
    };

    // これの挙動の理由は別の位置で説明済みなので省略します。
    useEffect(() => {
        console.info('✨AuthContextが初めて初期化されました✨');
    }, []);

    return <AuthContext.Provider value={{ user, authDate, updateUser }}>
        {props.children}
    </AuthContext.Provider>
};