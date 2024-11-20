import React from "react";
import { useNavigate } from "react-router-dom";

const IllustGet2 = () => {
  const navigate = useNavigate();

  // 画像読み込み成功時に実行
  const handleImageLoad = () => {
    console.log("画像が読み込まれました");
    navigate("/illustkakunin"); // 遷移先を設定
  };

  return (
    <main>
      <section className="illust-get2">
        <div className="syutoku-text">
          <h2>イラスト取得中...</h2>
          <div className="spinner"></div>
        </div>
        {/* 画像が読み込まれるとhandleImageLoadが呼ばれる */}
        <img
          src="./src/assets/img/honnouji.jpg" // 読み込みたい画像のパス
          alt="Loading"
          onLoad={handleImageLoad} // 画像の読み込み完了時に呼び出し
          style={{ display: "none" }} // 表示を隠したい場合はこれを追加
        />
      </section>
    </main>
  );
};

export default IllustGet2;
