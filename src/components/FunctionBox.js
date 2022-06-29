import React from "react";
import { useHistory } from "react-router-dom";

export default function FunctionBox() {
  const history = useHistory();
  const modules = [
    {
      key: 1,
      img: "/assets/js.png",
      title: "제목",
      content:
        "내용sadasdasdadadsadasd\nasddddddssssssaaaaaaa\nffffffggggdadasdasda",
      url: "LiveFilter",
    },
    {
      key: 2,
      img: "/assets/js.png",
      title: "제목2",
      content: "내용2",
    },
    {
      key: 3,
      img: "/assets/js.png",
      title: "제목3",
      content: "내용3",
    },
    {
      key: 4,
      img: "/assets/js.png",
      title: "제목4",
      content: "내용4",
    },
  ];

  const handleOnClick = (url) => {
    history.push(`/FunctionsDetail/${url}`);
  };

  return (
    <>
      <div className="movie_container">
        {modules.map((idx) => (
          <main id="main" key={idx.key}>
            <div className="movie">
              <img src={idx.img} alt="기능1" className="function1" />
              <div className="movie-info">
                <h3>{idx.title}</h3>
              </div>
              <div className="overview">
                <div className="overview_con">
                  <h2>overview</h2>
                  <div
                    className="demo"
                    onClick={() => {
                      handleOnClick(idx.url);
                    }}
                  >
                    Demo 바로가기
                  </div>
                </div>
                {idx.content}
              </div>
            </div>
          </main>
        ))}
      </div>
    </>
  );
}
