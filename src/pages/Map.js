/* global kakao */
import React, { useEffect } from "react";
import cn from "classnames";

const { kakao } = window;

const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new kakao.maps.LatLng(35.85133, 127.734086),
      level: 13,
    };

    let map = new kakao.maps.Map(container, options);

    // console.log("loading kakaomap");
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "500px", height: "400px" }}>
        ss
      </div>
    </div>
  );
};

export default Map;
