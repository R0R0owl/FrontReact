import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Illustget2 = () => {
  const navigate = useNavigate();
  const timeoutRef = useRef(null);
  const TIMEOUT_LIMIT = 30000;

  // 画像読み込み成功時
  const handleImageLoad = () => {
    console.log("画像が読み込まれました");
    clearTimeout(timeoutRef.current);
    navigate("/illustkakunin");
  };

  // 画像読み込みエラー時
  const handleImageError = () => {
    console.error("画像の読み込みに失敗しました");
    clearTimeout(timeoutRef.current); // タイマーをリセット
    alert("画像の読み込みに失敗しました。再試行してください。");
  };

  useEffect(() => {
    // 30秒後にエラーを表示
    timeoutRef.current = setTimeout(() => {
      console.error("画像の読み込みがタイムアウトしました。");
      alert("画像の読み込みに時間がかかっています。ネットワークを確認してください。");
    }, TIMEOUT_LIMIT);

    // クリーンアップ処理
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <main>
      <section className="illust-get2">
          <h2 className="syutoku-text">イラスト取得中...</h2>
          <div className="spinner"></div>
        <img
          src="src/assets/img/honnouji.jpg" // 読み込みたい画像のパス
          alt="Loading illustration"
          onLoad={handleImageLoad} // 読み込み完了時に呼び出し
          onError={handleImageError} // 読み込みエラー時に呼び出し
          style={{ display: "none" }} // 非表示
          aria-hidden="true"
        />
      </section>
    </main>
  );
};

export default Illustget2;