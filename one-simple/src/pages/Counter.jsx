import { useState } from 'react'

function Index() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>カウンターのページ</h1>
            <div className="card">
                <h5 className="card-title">クリックすると増えます</h5>

                <button className='btn btn-success' onClick={() => setCount((count) => count + 1)}>
                    {count} 回押しました
                </button>

            </div>
        </>
    )
}

export default Index
