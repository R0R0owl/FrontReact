import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { GoogleMap, LoadScriptNext, Marker, Circle } from '@react-google-maps/api';
import axios from 'axios';


const containerStyle = {
  width: '100vw',
  height: '100vh',
};

const defaultLocation = {
  lat: 35.6895,
  lng: 139.6917,
};

const mapOptions = {
  mapTypeControl: false,
  zoomControl: false,
  streetViewControl: false,
  fullscreenControl: false,
};

const circleOptions = {
  strokeColor: '#00FF00', // 枠線の色
  strokeOpacity: 0.5,     // 枠線の透明度
  strokeWeight: 2,        // 枠線の太さ
  fillColor: '#00FF00',   // 塗りつぶしの色
  fillOpacity: 0.2,      // 塗りつぶしの透明度
  clickable: false,       // 円をクリック不可にする
  draggable: false,       // 円をドラッグ不可にする
  editable: false,        // 円のサイズを編集不可にする
  visible: true,          // 円を表示する
};

const Map = () => {
  const { eventId } = useParams();
  const [ prompts, setPrompts ] = useState([]);
  const url = `http://127.0.0.1:8000/api/prompt?event_id=${eventId}`;
  const location = useLocation();
  const navigate = useNavigate();
  console.log('Location state:', location.state);

  const { lat, lng } = location.state || defaultLocation;

  //urlからデータ取得
  const fetchPrompts = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPrompts(data);
      console.log(data);
    } catch (error) {
      console.error('データ取得エラー:', error);
    }
  };

  //レンダリング時にデータ取得
  useEffect(() => {
    fetchPrompts();
  }, [url]);

  // API送信ハンドラ
  const handleSubmit = async () => {
    const postUrl = 'http://10.42.112.8:32766/sdapi/v1/txt2img';
    const payload = prompts.map((prompt) => ({
      prompt: prompt.prompt,
      negative_prompt: prompt.negative_prompt
    }));

    try {
      const response = await fetch(postUrl, {
        method: 'POST', // HTTPメソッド
        headers: {
          'Content-Type': 'application/json', // JSON形式のデータを送信
        },
        body: JSON.stringify(payload), // データを文字列に変換
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();                                                                                                                                                                                       
      console.log('APIレスポンス:', data);
      alert('データが送信されました！');
    } catch (error) {
      console.error('API送信エラー:', error);
      alert('データ送信中にエラーが発生しました。');
    }
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <LoadScriptNext googleMapsApiKey="AIzaSyBuABm0tODhmt0flJwg8bi3_UAMSxmirWo">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat, lng }}
          zoom={15}
          options={mapOptions}
        >
          {/* ピン */}
          <Marker position={{ lat, lng }} />

          {/* 円を描画 */}
          <Circle
            center={{ lat, lng }}
            radius={300} // 半径（メートル単位）                                                                                                                                                                                                                                
            options={circleOptions}
          />
        </GoogleMap>
      </LoadScriptNext>
                                                                                                                                                                             
      {/* 戻るボタン */}                                                                                                                                                                                                                   
      <button
        onClick={() => navigate(-1)}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          zIndex: 1,
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007BFF',
          color: '#FFF',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        イベント一覧
      </button>

      {/* Submitボタン */}
      <button
        onClick={handleSubmit}
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#28A745',
          color: '#FFF',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        イラストを取得！
      </button>
    </div>
  );
};

export default Map;
