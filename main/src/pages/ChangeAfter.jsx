import React from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";

const ChangeAfter = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { transformedImage } = location.state || {};

    if (!transformedImage) {
        return (
            <div>
                <p>画像がありません。</p>
                <Link to="/">戻る</Link>
            </div>
        );
    }

    const handleSave = () => {
        alert("画像を保存しました！");
        navigate("/change");  // 保存後に元の画面に戻る
    }

    return (
        <main>
            <section className="change-after">
                <div className="change-after-title">
                    <div className="ch-after-title">
                        <div className="return2">
                            <Link to="/change">
                                <img src="assets/img/return.png" alt="return" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="change-text">
                    <p>あたらしいイラストを入手しました！</p>
                </div>
                <div className="ch-after-img">
                    <img src={transformedImage.src} alt={transformedImage.title} />
                </div>
                <div className="save-button">
                    <button type="submit" id="save-button" onClick={handleSave}>
                        保存
                    </button>
                </div>
            </section>
        </main>
    );
};

export default ChangeAfter;