import React from 'react'

export function Forecast() {

    return (
        <>
            <h1>お天気のページ</h1>
            <div className="card">
                <h5 className="card-title">カントー地方 の 天気</h5>
                <p>
                    今日は晴れのち雨、ところにより曇り、時々雪が降るかもしれません。気温は高めですが、寒く感じるでしょう。風は強く、無風の時間帯もあります
                </p>
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">日付</th>
                        <th scope="col">概要</th>
                        <th scope="col">詳細</th>
                        <th scope="col">気温</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>2024-10-29</th>
                        <td><img src="https://www.jma.go.jp/bosai/forecast/img/406.svg" /></td>
                        <td>朝は晴れ、午後から曇り</td>
                        <td>25°C</td>
                    </tr>
                    <tr>
                        <th>2024-10-30</th>
                        <td><img src="https://www.jma.go.jp/bosai/forecast/img/406.svg" /></td>
                        <td>午前中は雨、午後から晴れ</td>
                        <td>18°C</td>
                    </tr>
                    <tr>
                        <th>2024-10-31</th>
                        <td><img src="https://www.jma.go.jp/bosai/forecast/img/406.svg" /></td>
                        <td>朝は雪、午後から曇り</td>
                        <td>-2°C</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
