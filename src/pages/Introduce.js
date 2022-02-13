import React, { useState } from "react";
import { Row, Col, Card, Button, Timeline, Typography, Image } from "antd";
import {
  ProfileOutlined,
  CalendarOutlined,
  PhoneOutlined,
  MailOutlined,
  HomeOutlined,
  CodepenOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import ReactWordcloud from "react-wordcloud";
import Paragraph from "antd/lib/typography/Paragraph";
import words from "../components/words";
import { useMediaQuery } from "react-responsive";

const size = [400, 400, 400, 400];

const timelineList = [
  {
    title: "삼성전자 18L(화성) 공조 시스템 구축",
    skill: "C언어, Oracle",
    time: "2019.03 ~ 2020.04",
    color: "green",
  },
  {
    title: "삼성디스플레이 관제시스템 리뉴얼",
    skill: "C언어, Oracle",
    time: "2020.05 ~ 2020.09",
    color: "green",
  },
  {
    title: "자사 ERP솔루션, 홈페이지 유지보수",
    skill: "React, Redux",
    time: "2020.12 ~ 2021.06",
  },
  {
    title: "자사 솔루션 리뉴얼",
    skill: "React, Redux, Node, Mysql",
    time: "2021.07 ~ 현재",
  },
];

export default function Introduce() {
  const isMobile = useMediaQuery({
    query: "(max-width:1190px)",
  });

  const [reverse, setReverse] = useState(false);
  const { Title, Text } = Typography;

  return (
    <>
      <Row>
        <Col span={24} className="mb-24">
          <Card title={<span style={{ fontSize: "30px" }}>인적사항</span>}>
            <div
              style={{
                margin: isMobile ? "10px 40px" : "20px 40px",
                fontSize: isMobile ? "12px" : "20px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex" }}>
                  <div>
                    <ProfileOutlined style={{ fontSize: "150%" }} />
                  </div>
                  <div
                    style={{
                      padding: "0px 20px",
                      width: isMobile ? "72px" : "128px",
                    }}
                  >
                    <span>
                      <strong>이름</strong>
                    </span>
                    <div>정인용</div>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <CalendarOutlined style={{ fontSize: "150%" }} />
                  </div>
                  <div
                    style={{
                      padding: "0px 20px",
                      width: isMobile ? "72px" : "128px",
                    }}
                  >
                    <span>
                      <strong>생년월일</strong>
                    </span>
                    <div>1993.10.29</div>
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div>
                    <PhoneOutlined style={{ fontSize: "150%" }} />
                  </div>
                  <div
                    style={{
                      padding: "0px 20px",
                      width: isMobile ? "72px" : "200px",
                    }}
                  >
                    <span>
                      <strong>연락처</strong>
                    </span>
                    <div>010-4764-1029</div>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: "40px" }}></div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex" }}>
                  <div>
                    <MailOutlined style={{ fontSize: "150%" }} />
                  </div>
                  <div
                    style={{
                      padding: "0px 20px",
                      width: isMobile ? "100px" : "128px",
                    }}
                  >
                    <span>
                      <strong>이메일</strong>
                    </span>
                    <div>jeong4726@gmail.com</div>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <HomeOutlined style={{ fontSize: "150%" }} />
                  </div>
                  <div
                    style={{
                      padding: "0px 20px",
                      width: isMobile ? "72px" : "128px",
                    }}
                  >
                    <span>
                      <strong>거주지</strong>
                    </span>
                    <div>관악구</div>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <CodepenOutlined style={{ fontSize: "150%" }} />
                  </div>
                  <div
                    style={{
                      padding: "0px 20px",
                      width: isMobile ? "72px" : "200px",
                    }}
                  >
                    <span>
                      <strong>학력</strong>
                    </span>
                    <div>
                      경희대학교
                      <br />
                      (전자공학)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className="mb-24">
          <Card title={<span style={{ fontSize: "30px" }}>근무이력</span>}>
            <div className="timeline-box">
              <Title level={5}>Career</Title>
              <Paragraph className="lastweek" style={{ marginBottom: 24 }}>
                에스아이티(한화그룹 자회사 SI 업체){" "}
                <span className="bnb2">60%</span>&nbsp;&nbsp; 더클랩(IT
                스타트업) <span style={{ color: "#1990ff" }}>40%</span>
              </Paragraph>

              <Timeline
                pending="현재진행형..."
                className="timelinelist"
                reverse={reverse}
              >
                {timelineList.map((t, index) => (
                  <Timeline.Item color={t.color} key={index}>
                    <Title level={4}>{t.title}</Title>
                    <Title level={5}>사용 기술 : {t.skill}</Title>

                    <Text>{t.time}</Text>
                  </Timeline.Item>
                ))}
              </Timeline>
              <Button
                type="primary"
                className="width-100"
                onClick={() => setReverse(!reverse)}
              >
                {<MenuUnfoldOutlined />} REVERSE
              </Button>
            </div>
          </Card>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className="mb-24">
          <Card title={<span style={{ fontSize: "30px" }}>인성</span>}>
            <div style={{ height: "584px" }}>
              <ReactWordcloud words={words} size={size} />
            </div>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className="mb-24">
          <Card title={<span style={{ fontSize: "30px" }}>프론트(main)</span>}>
            <Image src={"/assets/html.png"} width={100} height={100} />
            <Image src={"/assets/css.png"} width={100} height={100} />
            <Image src={"/assets/js.png"} width={100} height={100} />
            <Image src={"/assets/react.png"} width={100} height={100} />
            <Image src={"/assets/ecma.png"} width={100} height={100} />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="mb-24">
          <Card title={<span style={{ fontSize: "30px" }}>백엔드(sub)</span>}>
            <Image src={"/assets/node.png"} width={100} height={100} />
            <Image src={"/assets/mysql.png"} width={100} height={100} />
            <Image src={"/assets/aws.png"} width={100} height={100} />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={4} xl={4} xxl={4} className="mb-24">
          <Card title={<span style={{ fontSize: "30px" }}>협업 Tool</span>}>
            <Image src={"/assets/git.png"} width={100} height={100} />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} className="mb-24">
          <Card
            title={<span style={{ fontSize: "30px" }}>공부중인 개발 서적</span>}
          >
            <Image src={"/assets/book/node.jpeg"} width={100} height={100} />
            <Image src={"/assets/book/react.jpeg"} width={100} height={100} />
            <Image src={"/assets/book/type.jpeg"} width={100} height={100} />
            <Image src={"/assets/book/zerocho.jpeg"} width={100} height={100} />
            <Image
              src={"/assets/book/clean_code.jpeg"}
              width={100}
              height={100}
            />
            <Image src={"/assets/book/http.jpeg"} width={100} height={100} />
            <Image src={"/assets/book/sql.jpeg"} width={100} height={100} />
          </Card>
        </Col>
      </Row>
      <h1 style={{ fontSize: "24px" }}>현업에서 구현한 기능 리스트</h1>
      <Row gutter={[12, 12]}>
        <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6} className="mb-24">
          <Card
            title={
              <span style={{ fontSize: "20px" }}>
                주요 데이터 조회/수정/삭제
              </span>
            }
          >
            주요 데이터에 대한 조회/편집/삭제/검색/정렬 기능
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6} className="mb-24">
          <Card
            title={
              <span style={{ fontSize: "20px" }}>일간 주간 월간 통계</span>
            }
          >
            일, 주, 월 단위로 합산한 통계
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6} className="mb-24">
          <Card
            title={
              <span style={{ fontSize: "20px" }}>다중 항목에 대한 통계</span>
            }
          >
            여러 항목을 선택해 해당 항목에 대한 통계
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6} className="mb-24">
          <Card
            title={
              <span style={{ fontSize: "20px" }}>선택한 날짜 기간 통계</span>
            }
          >
            날짜를 선택해 해당 기간에 해당하는 통계
          </Card>
        </Col>
      </Row>
      <Row gutter={[12, 12]}>
        <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6} className="mb-24">
          <Card
            title={
              <span style={{ fontSize: "20px" }}>이미지/파일/동영상 첨부</span>
            }
          >
            이지지/파일/동영상 업로드 기능
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6} className="mb-24">
          <Card title={<span style={{ fontSize: "20px" }}>그래프</span>}>
            바차트, 파이차트, 라인차트 등의 그래프를 표시하는 기능
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6} className="mb-24">
          <Card title={<span style={{ fontSize: "20px" }}>커뮤니티</span>}>
            그룹 내 게시판, 좋아요, 댓글, 권한 설정, 그룹, 조직도 생성
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6} className="mb-24">
          <Card title={<span style={{ fontSize: "20px" }}>캘린더</span>}>
            캘린더 상에서 날짜/시간대를 클릭해서 일정을 등록하는 기능
          </Card>
        </Col>
      </Row>
      <Row gutter={[12, 12]}>
        <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6} className="mb-24">
          <Card title={<span style={{ fontSize: "20px" }}>챗봇</span>}>
            챗봇 시나리오에 따라 질문/답변을 주고받는 기능
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6} className="mb-24">
          <Card
            title={<span style={{ fontSize: "20px" }}>회원가입/로그인</span>}
          >
            이메일 인증, 로그인, 로그아웃 등등 회원가입과 관계된 기능들
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6} className="mb-24">
          <Card title={<span style={{ fontSize: "20px" }}>검색</span>}>
            일반 검색, 통합검색, 최근검색어 기능
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6} className="mb-24">
          <Card title={<span style={{ fontSize: "20px" }}>결제</span>}>
            일반, 정기, 가격 변동에따른 정기결제 청구 기능
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className="mb-24">
          <Card
            title={<span style={{ fontSize: "30px" }}>최근 협업 프로젝트</span>}
          >
            <h3>자사 영업관리 B2B 솔루션 리뉴얼</h3>
            <div>
              &nbsp;<a href="https://www.saleslog.co.kr">웹사이트 바로 이동</a>
            </div>
            <div>
              &nbsp;
              <a href="https://play.google.com/store/apps/details?id=com.saleslog">
                구글 플레이 스토어 바로 이동
              </a>
            </div>
            <div>
              &nbsp;
              <a href="https://apps.apple.com/kr/app/%EC%84%B8%EC%9D%BC%EC%A6%88%EB%A1%9C%EA%B7%B8-saleslog/id1594126546?l">
                애플 앱스토어 바로 이동
              </a>
            </div>
            <div style={{ marginBottom: "12px" }}></div>
            <Button>앱: React 하이브리드 앱</Button>
            <Button>나의 포지션 : 웹프론트, 백엔드(서브)</Button>
            <Button> 프로젝트 기여도 : 40%</Button>
            <div style={{ marginBottom: "12px" }}></div>
            <Button> 프로젝트 기간: ~4개월 /유지보수</Button>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className="mb-24">
          <Card
            title={<span style={{ fontSize: "30px" }}>메인 기능 영상</span>}
          >
            <div style={{ textAlign: "center" }}>
              <video
                controls
                autoplay
                src="/assets/manual_2022-01-12.mov"
                type="video/mp4"
                width="400px"
                height="200px"
              ></video>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24} className="mb-24">
          <Card title={<span style={{ fontSize: "30px" }}>개인 프로젝트</span>}>
            <div>
              현재 웹사이트 입니다. 지속적으로 현업에서 쓰인 기능들을 실시간
              업데이트 중입니다.
              <br /> 모바일: 우측상단 햄버거바, 웹: 왼쪽 사이드바에서
              기능리스트들이 있습니다.
            </div>
            <div>사용 기술: React, Redux, Node, Mysql</div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
