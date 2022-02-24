import React, { useEffect } from "react";
import { Button, Col, Row, Card } from "antd";
import axios from "axios";

import { useHistory } from "react-router";

export default function Membership() {
  const history = useHistory();

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

  // useEffect(() => {
  //   return () => {
  //     window.alert(
  //       "테스트 결제입니다. 실제 결제가 이루어지며 익일 12시경 환불됩니다."
  //     );
  //   };
  // }, []);
  const onClickPayment = () => {
    const { IMP } = window;
    IMP.init("imp08302711");

    const data = {
      pg: "html5_inicis", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: String(new Date().getTime()), // 주문번호
      amount: 101, // 결제금액
      name: "정기결제",
      // customer_uid: 'your-customer-unique-id',                  // 주문명
      buyer_name: "정인용", // 구매자 이름
      buyer_tel: "01047641029", // 구매자 전화번호
      buyer_email: "jeong7240@theklab.co.kr", // 구매자 이메일              -
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
      } = response;

      if (success) {
        axios({
          url: "http://localhost:5526/billings",
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json",
          //   Authorization: `Bearer ${token}`,
          // },
          data: {
            name: "아임포트 결제 데이터 분석",
            customer_uid: "your-customer-unique-id",
          },
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        alert("빌링키 발급 성공");
      } else {
        alert(`빌링키 발급 실패: ${error_msg}`);
      }
    }
  };

  const test = () => {
    // const token = getOauthAccessToken();

    axios({
      url: "http://localhost:5526/billings",
      method: "POST",
      // headers: {
      //   // 'Content-type': 'application/x-www-form-urlencoded',
      //   "Content-Type": "application/json",
      //   Authorization: `Bearer ${token}`,
      // },
      data: {
        customer_uid: "your-customer-unique-id",
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleOnBack = () => {
    history.goBack();
  };

  return (
    <div>
      <div className="content_body">
        <h3>
          <strong>일반/정기 결제</strong>
        </h3>
        <div className="mt-1"></div>
        <div className="mb-4">
          <span style={{ fontSize: "14px" }}>
            매매일지기록을 통해 본인의 종목을 쉽게 정리하고, 이익 실현으로
            활용해보세요!
          </span>
        </div>
        <Row gutter={[16, 16]}>
          <Col sm={8} xs={8} md={8} lg={8}>
            <Card>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="mb-3">
                  <span>정기권</span>
                  <br />
                  <span>
                    <strong>월 43,000원</strong>
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: "12px" }}>총 43,000원</span>
                </div>
                <div>
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "black",
                      color: "white",
                    }}
                    onClick={() => {
                      window.alert(
                        ' "테스트 결제입니다. 실제 결제가 이루어지며 익일 12시경 환불됩니다."'
                      );
                      history.push("/billing/payment");
                    }}
                  >
                    구매
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
          <Col sm={8} xs={8} md={8} lg={8}>
            <Card>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="mb-3">
                  <span>12개월</span>
                  <br />
                  <span>
                    <strong>월 35,000원</strong>
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: "12px" }}>총 420,000원</span>
                </div>
                <div>
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "black",
                      color: "white",
                    }}
                    onClick={() => {
                      window.alert(
                        ' "테스트 결제입니다. 실제 결제가 이루어지며 익일 12시경 환불됩니다."'
                      );
                      history.push({
                        pathname: `billing/gpayment/${12}`,
                        state: "12개월 결제",
                      });
                    }}
                  >
                    구매
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
          <Col sm={8} xs={8} md={8} lg={8}>
            <Card>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="mb-3">
                  <span>6개월</span>
                  <br />
                  <span>
                    <strong>월 37,000원</strong>
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: "12px" }}>총 220,000원</span>
                </div>
                <div>
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "black",
                      color: "white",
                    }}
                    onClick={() => {
                      window.alert(
                        ' "테스트 결제입니다. 실제 결제가 이루어지며 익일 12시경 환불됩니다."'
                      );
                      history.push({
                        pathname: `billing/gpayment/${6}`,
                        state: "6개월 결제",
                      });
                    }}
                  >
                    구매
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
          <Col sm={8} xs={8} md={8} lg={8}>
            <Card>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="mb-3">
                  <span>3개월</span>
                  <br />
                  <span>
                    <strong>월 40,000원</strong>
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: "12px" }}>총 120,000원</span>
                </div>
                <div>
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "black",
                      color: "white",
                    }}
                    onClick={() => {
                      window.alert(
                        ' "테스트 결제입니다. 실제 결제가 이루어지며 익일 12시경 환불됩니다."'
                      );
                      history.push({
                        pathname: `billing/gpayment/${3}`,
                        state: "3개월 결제",
                      });
                    }}
                  >
                    구매
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
          <Col sm={8} xs={8} md={8} lg={8}>
            <Card>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="mb-3">
                  <span>1개월</span>
                  <br />
                  <span>
                    <strong>월 50,000원</strong>
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: "12px" }}>총 50,000원</span>
                </div>
                <div>
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "black",
                      color: "white",
                    }}
                    onClick={() => {
                      window.alert(
                        ' "테스트 결제입니다. 실제 결제가 이루어지며 익일 12시경 환불됩니다."'
                      );
                      history.push({
                        pathname: `billing/gpayment/${1}`,
                        state: "1개월 결제",
                      });
                    }}
                  >
                    구매
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        {/* <Button onClick={onClickPayment}>프리미엄 결제</Button>
        <Button onClick={test}>백엔드 테스트</Button> */}
      </div>
    </div>
  );
}
