import React from "react";
import { Link, useNavigate } from 'react-router-dom';


const Ai = () => {
    const navigate = useNavigate();

    // 表示する画像データ
    const nobunagaImages = [
        { id: 1, src: 'src/assets/img/honnouji.jpg', title: 'Image 1' },
        { id: 2, src: 'src/assets/img/honnouji.jpg', title: 'Image 2' },
        { id: 3, src: 'src/assets/img/honnouji.jpg', title: 'Image 3' },
        { id: 4, src: 'src/assets/img/honnouji.jpg', title: 'Image 4' },
        { id: 5, src: 'src/assets/img/honnouji.jpg', title: 'Image 5' },
    ];

    const hideyoshiImages = [
        { id: 1, src: 'src/assets/img/honnouji.jpg', title: 'Image 1' },
        { id: 2, src: 'src/assets/img/honnouji.jpg', title: 'Image 2' },
        { id: 3, src: 'src/assets/img/honnouji.jpg', title: 'Image 3' },
        { id: 4, src: 'src/assets/img/honnouji.jpg', title: 'Image 4' },
        { id: 5, src: 'src/assets/img/honnouji.jpg', title: 'Image 5' },
    ];

    const handleImageClick = (image) => {
        navigate("/change", { state: { image } });
    }

    const renderImages = (images) => {
        return images.map((image) => (
            <div key={image.id} className="il-img">
                <img 
                    src={image.src} 
                    alt={image.title}
                    onClick={() => handleImageClick(image)}
                    style={{ cursor: "pointer" }} />
            </div>
        ));
    };

    return (
        <main>
            <section className="ai">
                <div className="page-title">
                    <div className="return">
                        <Link to="/newtop">
                            <img src="src/assets/img/return.png" alt="return" />
                        </Link>
                    </div>
                    <h2 id="page-title">AI変換</h2>
                </div>
                <div className="il-ijin">
                    <h3>織田信長</h3>
                    <div className="il-illust">
                        {renderImages(nobunagaImages)}
                    </div>
                </div>
                <div className="il-ijin">
                    <h3>豊臣秀吉</h3>
                    <div className="il-illust">
                        {renderImages(hideyoshiImages)}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Ai;