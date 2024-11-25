// import React from "react";
// import { useParams } from "react-router-dom";
// import { GoogleMap, LoadScript, Marker } from "react-google-maps/api";

// // イベントごとの緯度経度データ
// const eventLocations = {
//     1: { lat: 35.658581, lng: 139.745433 },  // 東京タワー
//     2: { lat: 34.693738, lng: 135.502165 },  // 大阪
//     3: { lat: 35.011564, lng: 135.768149 },  // 京都
//     4: { lat: 34.685087, lng: 135.805001 }  // 奈良
// };

// const containerStyle = {
//     width: "100%",
//     height: "400px"
// };

// const Map = () => {
//     const { eventId } = useParams();  // URLからeventIdを取得
//     const location = eventLocations[eventId];

//     if (!location) {
//         return <p>指定されたイベントの場所が見つかりません。</p>;
//     }

//     return (
//         <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//             <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={location}
//                 zoom={14}
//             >
//                 <Marker position={location}/>
//             </GoogleMap>
//         </LoadScript>
//     );
// };


// export default Map;