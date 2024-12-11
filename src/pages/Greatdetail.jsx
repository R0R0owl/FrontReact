import React from "react";
import { useParams, Link } from "react-router-dom";

// 偉人詳細データ
const personDetails = {
    1: {
        1: {
            name: '仁徳天皇',
            birth: '0000年',
            death: '0000年',
            description: '仁徳天皇とは、今から1600年ほど前に実在したとされ、民家から炒飯の煙が立ち昇らないのを見て生活の厳しさに気づき、3年間税を免除したという伝説の天皇です。',
            events: [
                { year: '0000年', event: 'あ' },
                { year: '0000年', event: 'あ' },
                { year: '0000年', event: 'あ' },
                { year: '0000年', event: 'あ' }
            ],
            imageUrl: '/src/assets/img/odanobunaga.jpg',
        },
        2: {
            name: '応神天皇',
            birth: '0000年',
            death: '0000年',
            description: '応神天皇は、日本の第15代天皇です。治世中に朝鮮半島との交流や軍事的な成功があり、平和で安定した時代を築いたとされています。応神天皇は日本の皇室の礎を築いたとされ、その子孫が後の天皇に続くことから、重要な歴史的人物とされています。',
            events: [
                { year: '0000年', event: 'あ' },
                { year: '0000年', event: 'あ' },
                { year: '0000年', event: 'あ' },
                { year: '0000年', event: 'あ' }
            ],
            imageUrl: '/src/assets/img/odanobunaga.jpg',
        },
    },
    2:{
        1: {
            name: '聖武天皇',
            birth: '0000年',
            death: '0000年',
            description: '',
            events: [
                { year: '0000年', event: 'あ' },
                { year: '0000年', event: 'あ' },
                { year: '0000年', event: 'あ' },
                { year: '0000年', event: 'あ' }
            ],
            imageUrl: '/src/assets/img/odanobunaga.jpg',
        },
        2: {
            name: '行基',
            birth: '0000年',
            death: '0000年',
            description: 'あ',
            events: [
                { year: '0000年', event: 'あ' },
                { year: '0000年', event: 'あ' },
                { year: '0000年', event: 'あ' },
                { year: '0000年', event: 'あ' }
            ],
            imageUrl: '/src/assets/img/odanobunaga.jpg',
        },
    },
    3: {
        1: {
            name: '織田信長',
            birth: '1534年',
            death: '1582年',
            description: '織田信長は戦国時代の有力大名で、革新的な技術と政策で知られる。尾張国出身で、天下統一を目指し、信長包囲網を打破するも、本能寺の変で明智光秀により討たれる。',
            events: [
                { year: '1534年', event: '出生' },
                { year: '1547年', event: '初陣' },
                { year: '1554年', event: '清州城に移転' },
                { year: '1582年', event: '本能寺の変' }
            ],
            imageUrl: '/src/assets/img/odanobunaga.jpg',
        },
        2: {
            name: '豊臣秀吉',
            birth: '1537年',
            death: '1598年',
            description: '豊臣秀吉は、織田信長の家臣から天下人に上りつめ、戦国三英傑の一人として知られています。彼は合戦での発想豊かな戦術や、家族・家臣との人間関係にまつわる逸話が多く、茶の湯や花見など後世の日本文化にも影響を与えました。また、名刀収集家としても有名で、太刀「一期一振藤四郎」を一之箱に収め、後に徳川家に渡り宮内庁に管理されています。',
            events:[
                { year: '1537年', event: '出生' },
                { year: '1570年', event: '金ヶ崎の戦い' },
                { year: '1583年', event: '大阪城を築く' },
                { year: '1584年', event: '小牧・長久手の戦い' },
            ],
            imageUrl: '/src/assets/img/toyotomihideyosi.jpg',
        },
        3: {
            name: '徳川家康',
            birth: '0000年',
            death: '0000年',
            description: 'あ',
            events: [
                { year: '0000年', event: 'あ' },
                { year: '0000年', event: 'あ' },
                { year: '0000年', event: 'あ' },
                { year: '0000年', event: 'あ' }
            ],
            imageUrl: '/src/assets/img/odanobunaga.jpg',
        }
    }
};

const Ijinsyousai = () => {
    const { eraId, personId } = useParams();  // URLからeraIdとpersonIdを取得
    const person = personDetails[Number(eraId)]?.[Number(personId)];  // 偉人の詳細データを取得

    if (!person) {
        return (
            <section className="ijin-syousai">
                <div className="page-title">
                    <h2>該当する偉人情報はありません。</h2>
                </div>
            </section>
        );
    }

    return (
        <main>
            <section className="ijin-syousai">
                <div className="page-title">
                    <div className="return">
                        <Link to={`/greatdata/${eraId}`}>
                            <img src="/src/assets/img/return.png" alt="偉人一覧画面に戻る" />
                        </Link>
                    </div>
                    <h2 id="page-title">{person.name}</h2>
                </div>

                <div className="syousai-jouhou">
                    <div className="ijin-image">
                        <img src={person.imageUrl} alt={`${person.name}の画像`} />
                    </div>
                    <div className="ijin-description">
                        <p>{person.description}</p>
                    </div>
                </div>

                <div className="nenpyou-itiran">
                    {person.events.map((event, index) => (
                        <div key={index} className={`nenpyou${index + 1}`}>
                            <div className="clear-mark">{event.year === '1534年' ? '★' : ''}</div>
                            <div className="event">{event.year} {event.event}</div>
                            <div className="nenpyou-yajirusi">
                                <Link to="/map" >
                                    <p>&gt;</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>   
    );
};

export default Ijinsyousai;