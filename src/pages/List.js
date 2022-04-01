/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import { Input, Row, Col, Divider, Button, Modal } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GetLists, GetSearch, SetKeyword } from "../_actions/user_actions";
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

  console.log(loglists.length);

  const handleOnSearch = (value) => {
    console.log(1);
    // console.log(value);

    dispatch(GetSearch(data)).then((res) => {
      setLoading(true);
      setLogList(res.payload.message);
      if (res.payload.status === 200) {
        setLoading(false);
      }
    });
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
  }, [state.post_response, state.delete_response]);

  // console.log(LogList)
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setData({ ...data, srch: e.target.value });
    dispatch(SetKeyword(e.target.value));
  };

  console.log("test");
  console.log("test");

  return (
    <>
      <Row>
        <Col span={24} className="mb-24">
          <Search
            onSearch={handleOnSearch}
            placeholder="일지제목 혹은 내용을 검색해보세요"
            onChange={handleOnChange}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button onClick={showModal}>글쓰기</Button>
        </Col>
        <Col span={24} style={{ color: "blue" }}>
          {!loading && (
            <span onClick={showModal}>총 일지 {loglists.length} 개</span>
          )}
        </Col>
        <div></div>
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
