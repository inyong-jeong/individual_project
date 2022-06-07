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
import ClipLoader from "react-spinners/ClipLoader";

const ListDetail = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.User);
  const history = useHistory();
  const id = useParams();
  const [detail, SetDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.post(`${LIST_SERVER}/get_list`, id).then((res) => {
      if (res.status === 200) {
        console.log(res.data.message[0]);
        SetDetail(res.data.message[0]);
        setLoading(false);
      } else {
        // console.log("err");
      }
    });
  }, []);

  // console.log(1122);

  const contentStyle = {
    whiteSpace: "pre-wrap",
  };

  const handleOnDelete = () => {
    dispatch(DeleteListLoading());
    dispatch(DeleteList(id))
      .then((res) => {
        // console.log(res);
        if (res.payload.status === 200) {
          // console.log(res);
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

  const handleOnEdit = () => {
    console.log("revise");
  };
  return (
    <>
      {loading ? (
        <div
          style={{
            position: "absolute",
            left: "45%",
            top: "50%",
          }}
        >
          <ClipLoader color={"blue"} loading={loading} size={100} />
        </div>
      ) : (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={() => {
                history.goBack();
              }}
            >
              뒤로 가기
            </Button>
            <Button onClick={handleOnDelete}>일지 삭제</Button>
          </div>

          <div style={{ marginTop: "6px" }}></div>
          <Row gutter={[24, 0]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="mb-24">
              <Card
                bordered={false}
                className="criclebox h-full"
                title={
                  <div style={{ textAlign: "center" }}>
                    <span>{detail.title}</span>
                  </div>
                }
              >
                <div style={contentStyle}>
                  <p>{detail.content}</p>
                </div>
                <Divider />
                <div>
                  <p>{detail.addr}</p>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default ListDetail;
