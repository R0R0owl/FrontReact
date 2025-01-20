import React, { useEffect, useState } from 'react';  // useEffect もインポートする
import axios from 'axios';  // axios をインポート
import { useNavigate } from 'react-router-dom';

function Sample() {
  const [value, setValue] = useState([]);

  // 先ほど作成したLaravelのAPIのURL
  const url = "http://127.0.0.1:8000/api/list";

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url);
        setValue(res.data.post);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);  // 空の依存配列で、最初のレンダリング時のみ実行

  return (
    <div className="App">
      {value.map((article) => (
        <div key={article.id}>
          <h1>{article.title}</h1>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Sample;