import React, { useEffect, useState, useRef } from "react";
import { Input, Row, Col, Divider, Button, Modal } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GetLists } from "../_actions/user_actions";
import LogLists from "../components/LogLists";
import WriteModal from "../components/WriteModal";

const { Search } = Input;
const List = () => {
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
      setLogList(res.payload.message);
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
      {/* <Modal
        title="일지 작성"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}
      <Divider />
      <Row>
        <Col span={24}>
          {loglists.length > 0 ? (
            <LogLists loglists={loglists} />
          ) : (
            // <div key={v.log_idx}>{ v.title}</div>

            <>
              <p>작성된 일지가 없습니다.</p>
            </>
          )}
        </Col>
      </Row>
      {/* <div ref={observer}/> */}
    </>
  );
};

export default List;
