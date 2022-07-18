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
      title: "두더지 잡기 게임",
      content: "skills: html, css, vanillaJs\n 두더지 잡기 게임",
      url: "https://coruscating-syrniki-e98de1.netlify.app/pages/game.html",
    },
    {
      key: 5,
      img: "/assets/text_effect.png",
      title: "text effect",
      content: "skills: html, css, vanillaJs\n 텍스트 효과",
      url: "https://coruscating-syrniki-e98de1.netlify.app/pages/texteffect.html",
    },
    {
      key: 6,
      img: "/assets/skeleton.png",
      title: "스켈레톤",
      content: "skills: html, css, vanillaJs\n 스켈레톤 효과",
      url: "https://coruscating-syrniki-e98de1.netlify.app/pages/skeleton.html",
    },
    {
      key: 7,
      img: "/assets/drawing.png",
      title: "그림판",
      content: "skills: html, css, vanillaJs\n 그림판",
      url: "https://coruscating-syrniki-e98de1.netlify.app/pages/drawing.html",
    },
    {
      key: 8,
      img: "/assets/animation.png",
      title: "애니메이션",
      content: "skills: html, css, vanillaJs\n 애니메이션 효과",
      url: "https://coruscating-syrniki-e98de1.netlify.app/pages/animation.html",
    },
    {
      key: 9,
      img: "/assets/fastlogin.png",
      title: "네이버 간편로그인",
      content: "skills: react, 네이버 open api ",
      url: "https://inyongjeong.com/sign-up",
    },
    {
      key: 10,
      img: "/assets/logwrite.png",
      title: "블로그 기능",
      content:
        "skills: react, antd, node, mysql \n 글쓰기, 삭제, 상세보기, 검색, 페이지네이션 기능입니다.",
      url: "https://inyongjeong.com/List",
    },
    {
      key: 11,
      img: "/assets/calendar.png",
      title: "캘린더 기능",
      content:
        "skills: react-big-calendar, node, mysql \n reat-big-calendar 에서 팝업을 띄어 일정작성, 일정삭제 등등의 기능을 커스텀 했습니다. ",
      url: "https://inyongjeong.com/calendar",
    },
    {
      key: 12,
      img: "/assets/payment.png",
      title: "결제기능",
      content:
        "skills: 아임포트 , kg이니시스 테스트 서버를 구축해서 테스트 결제프로그램을 개발했습니다. ",
      url: "https://inyongjeong.com/billing",
    },
    {
      key: 13,
      img: "/assets/map.png",
      title: "카카오 길찾기 기능",
      content:
        "skills: react, js, kakao map api 를 사용하여 길찾기, 리스트 불러오기, 해당 주소 route, 마커 기능 구현",
      url: "https://inyongjeong.com/map",
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
    window.open(url, "_blank");
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
