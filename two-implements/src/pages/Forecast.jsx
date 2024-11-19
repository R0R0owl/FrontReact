import React, { useEffect, useRef, useState } from 'react'

export function Forecast() {

    // 既に読み込み処理が実行されているかを管理する変数
    const alreadyLoading = useRef(false);
    //なぜuseStateではないのか? -> useEffectで利用するため。useStateとは挙動が変わります。(反映タイミング、再描画時のデータ内容など)

    //気象データを格納するステート
    const [forecastData, setForecastData] = useState(null);

    // ページを開いたときに1度だけ実行するときに、useEffect(処理, [])を利用します。
    // !重要!
    // Reactの開発者モードが有効のとき、このuseEffectは必ず2回呼ばれます。
    // そのため、"初回のみ"であったとしても複数回実行されるのを前提とした記述が必要になります。
    useEffect(() => {
        //既に読み込み処理が行われている場合は、処理を行わない
        if (alreadyLoading.current) {
            return;
        }

        // 初回通信を始めるため、フラグを立てます。
        // (複数実行防止)
        alreadyLoading.current = true;

        //なぜ入れ子になっているのか？ 
        // -> useEffectに渡す関数の戻り値はメソッドでなくてはならない。async/awaitを使うとPromiseになるため。
        (async () => {
            // APIドキュメント
            // https://weather.tsukumijima.net/

            // APIエンドポイントと通信
            const response = await fetch('https://weather.tsukumijima.net/api/forecast/city/130010');
            if (response.ok) {
                const result = await response.json();
                setForecastData(result);
            } else {
                //ネットワークエラー
                alert("通信エラーが発生しました。天気予報は表示できません。");
            }

        })();

        return () => { };
    }, []);

    if (!forecastData) {
        return <div>
            天気予報を問い合わせしています。
        </div>
    } else {
        return (
            <>
                <h1>お天気のページ</h1>
                <div className="card">
                    <h5 className="card-title">{forecastData.title}</h5>
                    <p>
                        {forecastData.description.bodyText}
                    </p>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">日付</th>
                            <th scope="col">概要</th>
                            <th scope="col">詳細</th>
                            <th scope="col">気温</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // key属性とは？
                            // -> このループのなかで、要素を一意に特定できる値を入れる。
                            // 入れなくても動くが、パフォーマンスが低下するときがあるのとコンソール上に警告が表示される。
                            forecastData.forecasts.map((record) => <tr key={record.date}>
                                <th>{record.date}</th>
                                <td><img src={record.image.url} alt={record.image.title} /></td>
                                <td>{record.detail.weather}</td>
                                <td>{record.temperature.min.celsius}°C / {record.temperature.max.celsius}°C</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </>
        );
    }
}
