import { useState } from 'react'
import { Link } from 'react-router-dom'

function Index() {
    return (
        <>
            <p>あなたはゲストです。</p>
            <p>
                <Link to="login">
                    ログインしてください。
                </Link>
            </p>
        </>
    )
}

export default Index
