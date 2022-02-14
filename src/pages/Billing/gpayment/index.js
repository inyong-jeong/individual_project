import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { Col, Card, Divider, Button, Input, Checkbox } from "antd";
import moment from "moment";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ConvertDate } from "../../../common";

export default function Gpayment() {
  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.8.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);

    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const history = useHistory();
  // const title = history.location.state;
  const [title, setTitle] = useState("");
  const params = useParams();
  const id = params.id;

  const dispatch = useDispatch();

  const oneYearLater = new Date(
    new Date().setFullYear(new Date().getFullYear() + 1)
  );
  const sixMonthLater = new Date(
    new Date().setMonth(new Date().getMonth() + 6)
  );
  const threeMonthLater = new Date(
    new Date().setMonth(new Date().getMonth() + 3)
  );
  const oneMonthLater = new Date(
    new Date().setMonth(new Date().getMonth() + 1)
  );

  //1년 후 날짜
  const Later = ConvertDate(moment(oneYearLater).format("YYYY-MM-DD"));
  //6개월 후 날짜
  const sixLayter = ConvertDate(moment(sixMonthLater).format("YYYY-MM-DD"));
  //3개월 후 날짜
  const threeLayter = ConvertDate(moment(threeMonthLater).format("YYYY-MM-DD"));
  //1개월 후 날짜
  const oneLater = ConvertDate(moment(oneMonthLater).format("YYYY-MM-DD"));
  //현재 날짜
  const duration = ConvertDate(moment().format("YYYY-MM-DD"));

  const [formData, setFormData] = useState({
    payment_name: "",
    phone_number: "",
    alarm_email: "",
    standard_name: "",
  });

  const [checkData, setCheckData] = useState({
    payment_check: "",
    agree_check: "",
  });

  const onChangeTerm1 = (e) => {
    setCheckData({ ...checkData, payment_check: e.target.checked });
  };

  const onChangeTerm2 = (e) => {
    setCheckData({ ...checkData, agree_check: e.target.checked });
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (id === "12") {
      setTitle("12개월 결제");
      setFormData({ ...formData, standard_name: "12개월 일반결제" });
    } else if (id === "6") {
      setTitle("6개월 결제");
      setFormData({ ...formData, standard_name: "6개월 일반결제" });
    } else if (id === "3") {
      setTitle("3개월 결제");
      setFormData({ ...formData, standard_name: "3개월 일반결제" });
    } else if (id === "1") {
      setTitle("1개월 결제");
      setFormData({ ...formData, standard_name: "1개월 일반결제" });
    }
  }, []);

  //결제
  const handleOnSubmit = () => {
    if (formData.payment_name === "") {
      return window.alert("결제자 이름 누락입니다.");
    } else if (formData.phone_number === "") {
      return window.alert("연락처 누락입니다.");
    } else if (formData.alarm_email === "") {
      return window.alert("결제알림 이메일 누락입니다.");
    } else if (
      checkData.payment_check === "" ||
      checkData.payment_check === false
    ) {
      return window.alert("정기결제에 동의해주세요.");
    } else if (
      checkData.agree_check === "" ||
      checkData.agree_check === false
    ) {
      return window.alert("이용약관 및 유의사항에 동의해주세요.");
    } else {
      const { IMP } = window;

      IMP.init("imp08302711");
      const data = {
        pg: "html5_inicis", // PG사
        pay_method: "card", // 결제수단
        merchant_uid: String(new Date().getTime()), // 주문번호
        amount: 101, // 결제금액
        name: formData.standard_name,
        buyer_name: formData.payment_name, // 구매자 이름
        buyer_tel: formData.phone_number, // 구매자 전화번호
        buyer_email: formData.alarm_email, // 구매자 이메일              -
      };

      IMP.request_pay(data, callback);
      function callback(response) {
        console.log(response);
        const {
          success,
          merchant_uid,
          error_msg,
          imp_uid,
          pay_method,
          paid_amount,
          status,
          name,
        } = response;

        if (success) {
          axios({
            url: "http://localhost:5526/general_billings",
            method: "POST",
            // headers: {
            //   "Content-Type": "application/json",
            //   Authorization: `Bearer ${token}`,
            // },
            data: {
              amount: paid_amount,
              imp_uid: imp_uid,
              merchant_uid: merchant_uid,
              name: name,
            },
          })
            .then(function (response) {
              console.log(response);
              if (response.status === 200) {
                alert("결제가 성공하였습니다.");
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          alert(`결제에 실패하였습니다. 에러내용 : ${error_msg}`);
        }
      }
    }
  };

  return (
    <div>
      <div
        className="container"
        style={{ justifyContent: "center", display: "flex" }}
      >
        <Col sm={16} xs={16} md={16} lg={16}>
          <Card>
            <div className="mb-3">
              {id === "12" && <span>{`이용기간 ${duration} ~ ${Later}`}</span>}
              {id === "6" && (
                <span>{`이용기간 ${duration} ~ ${sixLayter}`}</span>
              )}
              {id === "3" && (
                <span>{`이용기간 ${duration} ~ ${threeLayter}`}</span>
              )}
              {id === "1" && (
                <span>{`이용기간 ${duration} ~ ${oneLater}`}</span>
              )}
            </div>
            <div>
              <div
                className="mb-1"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>상품가격</span>
                {id === "12" && <span>420,000원</span>}
                {id === "6" && <span>220,000원</span>}
                {id === "3" && <span>120,000원</span>}
                {id === "1" && <span>50,000원</span>}
              </div>

              <div
                className="mb-1"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>구매가격</span>
                {id === "12" && <span>378,000원</span>}
                {id === "6" && <span>198,000원</span>}
                {id === "3" && <span>108,000원</span>}
                {id === "1" && <span>45,000원</span>}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>부가세(10%)</span>
                {id === "12" && <span>42,000원</span>}
                {id === "6" && <span>22,000원</span>}
                {id === "3" && <span>12,000원</span>}
                {id === "1" && <span>5,000원</span>}
              </div>

              <Divider />
              <div
                className="mb-2"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>총 결제금액</span>
                {id === "12" && (
                  <span style={{ fontSize: "18px", color: "#398fff" }}>
                    420,000원
                  </span>
                )}
                {id === "6" && (
                  <span style={{ fontSize: "18px", color: "#398fff" }}>
                    220,000원
                  </span>
                )}
                {id === "3" && (
                  <span style={{ fontSize: "18px", color: "#398fff" }}>
                    120,000원
                  </span>
                )}
                {id === "1" && (
                  <span style={{ fontSize: "18px", color: "#398fff" }}>
                    50,000원
                  </span>
                )}
              </div>

              <div className="mt-3 mb-2">
                <span>
                  <strong>구매자정보</strong>
                </span>
              </div>
              <div>
                <div className="mb-1" style={{ fontSize: "12px" }}>
                  결제자 이름
                </div>
                <div className="mb-2">
                  <Input
                    name="payment_name"
                    onChange={handleOnChange}
                    value={formData.payment_name}
                  ></Input>
                </div>
                <div className="mb-1" style={{ fontSize: "12px" }}>
                  연락처
                </div>
                <div className="mb-1">
                  <Input
                    name="phone_number"
                    onChange={handleOnChange}
                    value={formData.phone_number}
                  ></Input>
                </div>
                <div className="mb-1" style={{ fontSize: "12px" }}>
                  결제알림 이메일
                </div>
                <div className="mb-2">
                  <Input
                    name="alarm_email"
                    onChange={handleOnChange}
                    value={formData.alarm_email}
                  ></Input>
                </div>
                <div>
                  <Checkbox
                    onChange={onChangeTerm1}
                    // style={CheckBoxStyle}
                  >
                    <span style={{ fontSize: "12px" }}>
                      {" "}
                      정기결제에 동의합니다.{" "}
                    </span>
                  </Checkbox>
                </div>
                <div className="mb-2">
                  <Checkbox
                    onChange={onChangeTerm2}
                    // style={CheckBoxStyle}
                  >
                    <span style={{ fontSize: "12px" }}>
                      {" "}
                      이용약관 및 유의사항에 동의합니다.{" "}
                    </span>
                  </Checkbox>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#F6F6F6",
                  padding: "15px",
                  overflowY: "scroll",
                  height: "110px",
                  fontSize: "10px",
                }}
              >
                <p>
                  [이용안내] - 멤버십 상품은 구매일로부터 이용 기간 내에 이용
                  가능한 상품입니다.
                  <br />
                  - 멤버십 상품은 결제가 완료되는 즉시 이용 가능합니다.
                  <br />
                  - 이용 기간 중 PC, 모바일웹, 스마트폰(앱)에서 이용가능합니다.
                  (단, 일부서비스는 PC에서만 가능)
                  <br />
                  - 일부 콘텐츠는 기업 및 작성자의 요청에 따라 열람이 거부될 수
                  있습니다.
                  <br />
                  - 콘텐츠 특성상 실사용 도중 해지 및 이에 따른 환불이
                  불가능합니다.
                  <br />
                  단, 결제일로부터 7일 이내에 콘텐츠(텍스트, 영상 등 일체)를
                  시청하지 않은 경우에만 전액 환불이 가능합니다.(환불 수수료
                  없음)
                  <br />
                  - 아이디 공유가 적발 될 경우, 이용 자격이 박탈되며 환불이
                  불가능합니다.
                  <br />
                  - 기타 불법 공유 행위가 적발될 경우, 형사 고발 조치가 진행될
                  수 있습니다.
                  <br />- 결제에 따른 개인 정보는 '개인정보처리방침'에 근거하여
                  관리됩니다.
                </p>
              </div>
              <div
                className="mt-3"
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <Button
                  onClick={() => {
                    history.goBack();
                  }}
                  style={{ width: "40%" }}
                >
                  취소
                </Button>
                <Button onClick={handleOnSubmit} style={{ width: "40%" }}>
                  결제
                </Button>
              </div>
              <div></div>
            </div>
          </Card>
        </Col>
      </div>
    </div>
  );
}
