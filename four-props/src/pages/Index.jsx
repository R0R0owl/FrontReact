import { useState } from 'react'
import { Link } from 'react-router-dom'

function Index(props) {
    if (props.user) {
        return (
            <>
                <p>ようこそ、{props.user.note} の {props.user.name} さん！</p>
                <p>
                    あなたは {props.user.age} 歳ですね。
                </p>
                <p>
                    次の誕生日まで残り {daysUntilNextBirthday(props.user.registerDate)} 日あります。
                </p>
            </>
        );
    } else {
        return (
            <>
                <p>あなたはゲストです。</p>
                <p>
                    <Link to="login">
                        ログインしてください。
                    </Link>
                </p>
            </>
        );
    }
}

function daysUntilNextBirthday(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    birthDate.setFullYear(today.getFullYear());

    if (birthDate < today) {
        birthDate.setFullYear(today.getFullYear() + 1);
    }

    const diffTime = Math.abs(birthDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    console.info('次の誕生日までの日数を計算しました。');
    return diffDays;
}

export default Index
