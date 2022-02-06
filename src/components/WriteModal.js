import React, { useState, useEffect } from "react";
import { Modal, Divider, Input } from "antd";
import moment from "moment";
import axios from "axios";
import { LIST_SERVER } from "../components/config";
import { useDispatch, useSelector } from "react-redux";
import {
  PostLog,
  PostLogLoading,
  PostLogError,
} from "../_actions/user_actions";

export default function WriteModal({ title, visible, onCancel }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.User);
  const [body, setBody] = useState({
    title: "",
    content: "",
    time: moment(new Date()).format("YYYY-MM-DD HH:mm "),
    addr: "",
  });
  const handleOnTile = (e) => {
    setBody({ ...body, title: e.target.value });
  };
  const handleOnContent = (e) => {
    setBody({ ...body, content: e.target.value });
  };

  const handleOk = () => {
    dispatch(PostLogLoading());
    dispatch(PostLog(body))
      .then((res) => {
        console.log(res);
        if (res.payload.status === 200) {
          console.log(res);
          onCancel();
          state.post_response = false;
        } else {
          alert("fail");
        }
      })
      .catch((error) => {
        dispatch(PostLogError());
      });
  };

  return (
    <>
      <Modal
        title={title}
        visible={visible}
        onOk={handleOk}
        onCancel={onCancel}
        cancelText={<span>취소</span>}
        okText={<span>작성</span>}
      >
        <h6>현재시각</h6>
        <span>{moment(new Date()).format("YYYY-MM-DD HH:mm ")}</span>
        <Divider />
        <h6>제목</h6>
        <Input name="title" onChange={handleOnTile} value={body.title} />
        <Divider />

        <h6>내용</h6>
        <Input.TextArea
          value={body.content}
          name="content"
          onChange={handleOnContent}
          style={{ height: "150px" }}
        />
      </Modal>
    </>
  );
}
