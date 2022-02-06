import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Button, Divider } from "antd";
import Comments from "../components/Comments/Comments";
import { LIST_SERVER } from "../components/config";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  DeleteList,
  DeleteListLoading,
  DeleteListError,
} from "../_actions/user_actions";
const ListDetail = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.User);
  const history = useHistory();
  const id = useParams();
  const [detail, SetDetail] = useState([]);

  useEffect(() => {
    axios.post(`${LIST_SERVER}/get_list`, id).then((res) => {
      if (res.status === 200) {
        console.log(res.data.message[0]);
        SetDetail(res.data.message[0]);
      } else {
        console.log("err");
      }
    });
  }, []);

  const contentStyle = {
    whiteSpace: "pre-wrap",
  };

  const handleOnDelete = () => {
    dispatch(DeleteListLoading());
    dispatch(DeleteList(id))
      .then((res) => {
        console.log(res);
        if (res.payload.status === 200) {
          console.log(res);
          history.goBack();
          state.post_response = false;
        } else {
          alert("fail");
        }
      })
      .catch((error) => {
        dispatch(DeleteListError());
      });
  };
  return (
    <>
      <Row>
        <Button
          onClick={() => {
            history.goBack();
          }}
        >
          뒤로가기
        </Button>
        <Button onClick={handleOnDelete}>일지 삭제</Button>
      </Row>
      <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-24">
          <Card
            bordered={false}
            className="criclebox h-full"
            title={detail.title}
          >
            <div style={contentStyle}>
              <Button style={{ marginBottom: "6px" }}>내용</Button>
              <p>{detail.content}</p>
            </div>
            <Divider />
            <div>
              <Button style={{ marginBottom: "6px" }}> 주소</Button>
              <p>{detail.addr}</p>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-24">
          <Card bordered={false} className="criclebox h-full"></Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Comments />
        </Col>
      </Row>
    </>
  );
};

export default ListDetail;
