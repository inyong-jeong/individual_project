import React, { useEffect, useState, useRef } from "react";
import { Input, Row, Col, Divider, Button, Modal } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GetLists } from "../_actions/user_actions";
import LogLists from "../components/LogLists";
import WriteModal from "../components/WriteModal";
import ClipLoader from "react-spinners/ClipLoader";

const { Search } = Input;
const List = () => {
  //react-spinners 초기세팅
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.User);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // modal set
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [loglists, setLogList] = useState([]);
  const [data, setData] = useState({
    page_no: 1,
    srch: "",
  });
  const handleOnSearch = () => {
    console.log(1);
  };
  useEffect(() => {
    dispatch(GetLists(data)).then((res) => {
      // console.log(typeof res.payload.status);
      setLogList(res.payload.message);
      // console.log(res.paylod.status);
      if (res.payload.status === 200) {
        setLoading(false);
      }
    });
  }, [data, state.post_response, state.delete_response]);

  // console.log(LogList)

  return (
    <>
      <Row>
        <Col span={24} className="mb-24">
          <Search onSearch={handleOnSearch} placeholder="검색하세요" />
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button onClick={showModal}>글쓰기</Button>
        </Col>
      </Row>
      <WriteModal
        title="일지 작성"
        visible={isModalVisible}
        onCancel={handleCancel}
      />

      <Divider />
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
        <Row>
          <Col span={24}>
            {loglists.length > 0 ? (
              <LogLists loglists={loglists} />
            ) : (
              <>
                <p>작성된 일지가 없습니다.</p>
              </>
            )}
          </Col>
        </Row>
      )}
    </>
  );
};

export default List;
