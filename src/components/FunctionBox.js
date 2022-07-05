import React from "react";
import { useHistory } from "react-router-dom";

export default function FunctionBox() {
  const history = useHistory();
  const modules = [
    {
      key: 1,
      img: "/assets/user_filter.png",
      title: "검색",
      content: "skills: html, css, vanillaJs\n 유저 검색 기능",
      url: "https://coruscating-syrniki-e98de1.netlify.app/pages/livefilter.html",
    },
    {
      key: 2,
      img: "/assets/todos.png",
      title: "할일리스트",
      content: "skills: html, css, vanillaJs\n 할일 추가 삭제 기능",
      url: "https://coruscating-syrniki-e98de1.netlify.app/pages/todolist.html",
    },
    {
      key: 3,
      img: "/assets/noteApp.png",
      title: "노트",
      content: "skills: html, css, vanillaJs\n 노트 기능",
      url: "https://coruscating-syrniki-e98de1.netlify.app/pages/notes.html",
    },
    {
      key: 4,
      img: "/assets/js.png",
      title: "두더지게임",
      content: "skills: html, css, vanillaJs\n 두더지 잡기 게임",
    },
    {
      key: 5,
      img: "/assets/js.png",
      title: "text effect",
      content: "skills: html, css, vanillaJs\n 텍스트 효과",
    },
    {
      key: 6,
      img: "/assets/js.png",
      title: "스켈레톤",
      content: "skills: html, css, vanillaJs\n 스켈레톤 효과",
    },
    {
      key: 7,
      img: "/assets/js.png",
      title: "그림판",
      content: "skills: html, css, vanillaJs\n 그림판",
    },
    {
      key: 8,
      img: "/assets/js.png",
      title: "애니메이션",
      content: "skills: html, css, vanillaJs\n 그림판",
    },
    {
      key: 9,
      img: "/assets/js.png",
      title: "제목4",
      content: "내용4",
    },
    {
      key: 10,
      img: "/assets/js.png",
      title: "제목4",
      content: "내용4",
    },
    {
      key: 11,
      img: "/assets/js.png",
      title: "제목4",
      content: "내용4",
    },
    {
      key: 12,
      img: "/assets/js.png",
      title: "제목4",
      content: "내용4",
    },
    {
      key: 13,
      img: "/assets/js.png",
      title: "제목4",
      content: "내용4",
    },
    {
      key: 14,
      img: "/assets/js.png",
      title: "제목4",
      content: "내용4",
    },
    {
      key: 15,
      img: "/assets/js.png",
      title: "제목4",
      content: "내용4",
    },
    {
      key: 16,
      img: "/assets/js.png",
      title: "제목4",
      content: "내용4",
    },
    {
      key: 17,
      img: "/assets/js.png",
      title: "제목4",
      content: "내용4",
    },
    {
      key: 18,
      img: "/assets/js.png",
      title: "제목4",
      content: "내용4",
    },
    {
      key: 19,
      img: "/assets/js.png",
      title: "제목4",
      content: "내용4",
    },
    {
      key: 20,
      img: "/assets/js.png",
      title: "제목4",
      content: "내용4",
    },
    {
      key: 21,
      img: "/assets/js.png",
      title: "제목4",
      content: "내용4",
    },
    {
      key: 22,
      img: "/assets/js.png",
      title: "제목4",
      content: "내용4",
    },
    {
      key: 23,
      img: "/assets/js.png",
      title: "제목4",
      content: "내용4",
    },
    {
      key: 24,
      img: "/assets/js.png",
      title: "제목4",
      content: "내용4",
    },
    {
      key: 25,
      img: "/assets/js.png",
      title: "제목4",
      content: "내용4",
    },
    {
      key: 26,
      img: "/assets/js.png",
      title: "제목4",
      content: "내용4",
    },
  ];

  const handleOnClick = (url) => {
    window.open(url, "_black");
    // history.push(url);
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
