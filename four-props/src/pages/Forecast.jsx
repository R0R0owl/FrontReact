import React from 'react'
import { useForecast } from '../hooks/ForecastHook';

export function Forecast() {

    //カスタムフックを呼び出すことにより、コードを分離して共通化！
    const { forecastData } = useForecast();

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
