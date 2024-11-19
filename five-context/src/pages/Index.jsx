import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';

function Index(props) {

    //自分で作ったContext
    const authContext = useContext(AuthContext);

    if (authContext.user) {
        return (
            <>
                <p>ようこそ、{authContext.user.note} の {authContext.user.name} さん！</p>
                <p>
                    あなたは {authContext.user.age} 歳ですね。
                </p>
                <p>
                    次の誕生日まで残り {daysUntilNextBirthday(authContext.user.registerDate)} 日あります。
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
