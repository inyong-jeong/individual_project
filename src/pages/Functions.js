import React from "react";

import FunctionBox from "../components/FunctionBox";

export default function Functions() {
  return (
    <>
      <div className="functions">기능모음집</div>
      <form id="form">
        <input type="text" id="search" className="search" placeholder="검색" />
      </form>
      <FunctionBox />
    </>
  );
}
