import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const GreatDetail = () => {
  const { personId } = useParams();
  const { eventId } = useParams(); // eventIdを取得
  const { eraId } = useParams();
  const [persons, setPersons] = useState([]);
  const [eventData, setEventData] = useState(null); // eventDataを格納するステート

  const url = `http://127.0.0.1:8000/api/event?great_id=${personId}`;
  const prompturl = `http://127.0.0.1:8000/api/prompt?event_id=${eventId}`;

  // personIdに基づいてデータを取得
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(url);
        if (Array.isArray(response.data.post)) {
          setPersons(response.data.post);
        } else {
          setPersons([]);
        }
      } catch (error) {
        console.log('Error fetching data:', error);
        setPersons([]);
      }
    })();
  }, [personId]);

  // eventIdに基づいてデータを取得
  useEffect(() => {
    if (eventId) {
      (async () => {
        try {
          const response = await axios.get(prompturl);
          setEventData(response.data); // eventIdに関連するデータを保存
        } catch (error) {
          console.log('Error fetching event data:', error);
          setEventData(null);
        }
      })();
    }
  }, [eventId]);

  return (
    <main>
      <section className="ijin-syousai">
        <div className="page-title">
          <div className="return">
            <Link to={`/greatdata/${eraId}`}>
              <img src="/src/assets/img/return.png" alt="偉人一覧画面に戻る" />
            </Link>
          </div>
          <h2 id="page-title">イベント一覧</h2>
        </div>

        {persons.length > 0 ? (
          <>
            {persons.map((person) => (
              <div key={person.id}>
                <div className="syousai-jouhou">
                  <div className="ijin-image">
                    <img src={person.imageUrl} alt={`${person.name}の画像`} />
                  </div>
                  <div className="ijin-description">
                    <p>{person.description}</p>
                  </div>
                </div>

                <div className="nenpyou-itiran">
                  <div className="nenpyou">
                    <div className="clear-mark">
                      {person.year === '1534年' ? '★' : ''}
                    </div>
                    <div className="event">
                      {person.year} {person.event}
                    </div>
                    <div className="nenpyou-yajirusi">
                      {/* Linkのstateプロパティで緯度経度を渡す */}
                      <Link
                        to={`/map/${person.id}/${person.eventId}`} // eventIdを渡す
                        state={{
                          lat: parseFloat(person.lat),
                          lng: parseFloat(person.lon),
                        }}
                      >
                        <p>マップ</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>データが存在しません。</p>
        )}
      </section>
    </main>
  );
};

export default GreatDetail;
