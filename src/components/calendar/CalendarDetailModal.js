import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Divider, Switch, Select } from "antd";
import moment from "moment";

import { ReactComponent as Log } from "../../assets/icons/main/log.svg";
// import {
//   getCalendarLists,
//   deleteCalendar,
//   getCalendarList,
// } from "redux/calendar/actions";
import { ReactComponent as CalIcon } from "../../assets/icons/log/cal.svg";

// import { ReactComponent as CalIcon } from "../../../assets/icons/log/cal.svg";
import { ConvertDate, ConvertTime } from "../../common";
import { ReactComponent as LocationIcon } from "../../assets/icons/log/location.svg";
import { ReactComponent as PersonIcon } from "../../assets/icons/log/person.svg";
import { ReactComponent as ShareIcon } from "../../assets/icons/main/share.svg";
import { ReactComponent as Noti } from "../../assets/icons/noti.svg";

// import { CALENDAR_EDIT_MODAL } from "constants/actionTypes";
import { DeleteCalendar } from "../../_actions/user_actions";
export default function CalendarDetailModal({
  isModalDVisible,
  setIsModalDVisible,
  Cdata,
}) {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state.Calendar);
  const state = useSelector((state) => state.User);

  const [CouserList, setCouserList] = useState([]);
  // const [, setstate.] = useState([]);

  const handleOk = () => {
    dispatch(DeleteCalendar({ id: state.getListRes[0].c_idx })).then((res) => {
      console.log(res);
      if (res.payload.status === 200) {
        setIsModalDVisible(false);
      }
    });
  };

  const handleCancel = (close) => {
    if (
      close.target.innerHTML === "수정" ||
      close.target.className === "ant-btn"
    ) {
      setIsModalDVisible(false);
      // dispatch({
      //   type: CALENDAR_EDIT_MODAL,
      //   payload: true,
      // });
      // 수정버튼 누름 -> 모달 닫고 새로운 모달창 열기
    } else {
      setIsModalDVisible(false);
    }
  };

  // useEffect(() => {
  //   if (state.getListState) {
  //     console.log(234);
  //     let memberlist = state.getListPub.map((v) => v.user_name);
  //     console.log(memberlist);
  //     setCouserList(memberlist);
  //   }
  // }, [state.getListState]);

  // useEffect(() => {
  //   if (state.deleteState) {
  //     setIsModalDVisible(false);
  //     dispatch(getCalendarLists.call(Cdata));
  //   }
  // }, [state.deleteState]);

  const AlarmOption = [
    { label: "정시", value: 0 },
    { label: "5분전", value: 5 },
    { label: "10분전", value: 10 },
    { label: "30분전", value: 30 },
    { label: "2시간전", value: 120 },
    { label: "4시간전", valuse: 240 },
  ];

  const getCalendarDetailList = (idx) => {
    // dispatch();
    // getCalendarList.call({
    //   p_idx: idx,
    // })
  };
  console.log(state.getListRes);

  // useEffect(() => {
  //   if (state.get_calendar_response) {
  //     setstate.getListRes(state.getListRes);
  //   }
  // }, [state.get_calendar_response]);
  // console.log(state.getListRes);

  return (
    <>
      {state.getListRes.length > 0 ? (
        <Modal
          title="일정 상세"
          visible={isModalDVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          cancelText={<span>닫기</span>}
          okText={<span>삭제</span>}
        >
          <>
            {state.getListRes.length > 0 && (
              <div>
                <div style={{ display: "flex" }}>
                  <Log
                    stroke="#aaa"
                    style={{ marginRight: "6px", alignSelf: "center" }}
                  />
                  <span>{state.getListRes[0].plan}</span>
                </div>
                <Divider style={{ marginBottom: 10, marginTop: 10 }} />
                <div style={{ display: "flex" }}>
                  <CalIcon
                    stroke="#aaa"
                    style={{
                      marginRight: "6px",
                      marginLeft: "2px",
                      alignSelf: "center",
                    }}
                  />
                  <span>
                    {/* {ConvertDate(state.getListRes[0].sdt)} &nbsp; */}
                    {/* {ConvertTime(state.getListRes[0].stime)} */}
                  </span>
                  &nbsp;<span>~</span>&nbsp;
                  <span>
                    {/* {ConvertDate(state.getListRes[0].edt)}&nbsp;{" "} */}
                    {/* {ConvertTime(state.getListRes[0].etime)} */}
                  </span>
                </div>
                {state.getListRes[0].content !== "" && (
                  <>
                    <Divider style={{ marginBottom: 10, marginTop: 10 }} />
                    <div style={{ display: "flex" }}>
                      <Log
                        stroke="#aaa"
                        style={{ marginRight: "6px", alignSelf: "center" }}
                      />
                      <span>{state.getListRes[0].content}</span>
                    </div>
                  </>
                )}
                {state.getListRes[0].addr !== "" && (
                  <>
                    <Divider style={{ marginBottom: 10, marginTop: 10 }} />
                    <div style={{ display: "flex" }}>
                      <LocationIcon
                        stroke="#aaa"
                        style={{
                          marginLeft: "2px",
                          marginRight: "6px",
                          alignSelf: "center",
                        }}
                      />
                      <span>{state.getListRes[0].addr}</span>
                    </div>
                  </>
                )}
                <Divider style={{ marginBottom: 10, marginTop: 10 }} />
                {/* <div style={{ display: "flex", direction: "column" }}>
                  <Noti
                    stroke="#aaa"
                    style={{ marginRight: "6px", alignSelf: "center" }}
                  />
                  <Select
                    placeholder="알람설정"
                    value={state.getListRes[0].alarm_min}
                    disabled={true}
                    options={AlarmOption}
                  />
                  <div className="ml-2 mt-1" style={{ float: "right" }}>
                    <Switch
                      size="small"
                      disabled={true}
                      checked={state.getListRes[0].alarm_yn === "Y" ? true : false}
                    />
                  </div>
                </div> */}
                {/* <Divider style={{ marginBottom: 10, marginTop: 10 }} />
                <div style={{ display: "flex" }}>
                  <PersonIcon
                    stroke="#aaa"
                    style={{ marginRight: "6px", alignSelf: "center" }}
                  />
                  <span>{state.getListRes[0].user_name}</span>
                  {CouserList.length > 0 &&
                    CouserList.map((v) => {
                      return (
                        <>
                          <span>, </span>&nbsp;<span>{v}</span>
                          <ShareIcon />
                        </>
                      );
                    })}
                </div> */}
                <Divider dashed style={{ marginBottom: 10, marginTop: 10 }} />
                {state.getListRes.map((v) => {
                  return (
                    <div
                      className="calendar_list mb-2"
                      onClick={() => getCalendarDetailList(v.p_idx)}
                    >
                      <i
                        className={`mdi mdi-checkbox-blank-circle-outline mr-1 ml-2 text`}
                      ></i>
                      <span style={{ fontSize: "16px" }}>
                        <strong>{v.plan}</strong>
                      </span>
                      <div className="ml-4">
                        {moment(v.sdt).format("YYYY.MM.DD HH:mm")} ~{" "}
                        {moment(v.edt).format("YYYY.MM.DD HH:mm")}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        </Modal>
      ) : (
        <Modal
          title="일정 상세"
          visible={isModalDVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          cancelText={<span>수정</span>}
          okText={<span>삭제</span>}
        >
          <>
            {state.getListRes.length > 0 && (
              <div>
                <div style={{ display: "flex" }}>
                  <Log
                    stroke="#aaa"
                    style={{ marginRight: "6px", alignSelf: "center" }}
                  />
                  <span>{state.getListRes[0].plan}</span>
                </div>
                <Divider style={{ marginBottom: 10, marginTop: 10 }} />
                <div style={{ display: "flex" }}>
                  <CalIcon
                    stroke="#aaa"
                    style={{
                      marginRight: "6px",
                      marginLeft: "2px",
                      alignSelf: "center",
                    }}
                  />
                  <span>
                    {/* {ConvertDate(state.getListRes[0].sdt)} &nbsp; */}
                    {/* {ConvertTime(state.getListRes[0].stime)} */}
                  </span>
                  &nbsp;<span>~</span>&nbsp;
                  <span>
                    {/* {ConvertDate(state.getListRes[0].edt)}&nbsp;{" "} */}
                    {/* {ConvertTime(state.getListRes[0].etime)} */}
                  </span>
                </div>
                {state.getListRes[0].content !== "" && (
                  <>
                    <Divider style={{ marginBottom: 10, marginTop: 10 }} />
                    <div style={{ display: "flex" }}>
                      <Log
                        stroke="#aaa"
                        style={{ marginRight: "6px", alignSelf: "center" }}
                      />
                      <span>{state.getListRes[0].content}</span>
                    </div>
                  </>
                )}
                {state.getListRes[0].addr !== "" && (
                  <>
                    <Divider style={{ marginBottom: 10, marginTop: 10 }} />
                    <div style={{ display: "flex" }}>
                      <LocationIcon
                        stroke="#aaa"
                        style={{
                          marginLeft: "2px",
                          marginRight: "6px",
                          alignSelf: "center",
                        }}
                      />
                      <span>{state.getListRes[0].addr}</span>
                    </div>
                  </>
                )}
                <Divider style={{ marginBottom: 10, marginTop: 10 }} />
                <div style={{ display: "flex" }}>
                  <PersonIcon
                    stroke="#aaa"
                    style={{ marginRight: "6px", alignSelf: "center" }}
                  />
                  {/* <span>{state.getListRes.user_name}</span> */}
                  {CouserList.length > 0 &&
                    CouserList.map((v) => {
                      return (
                        <>
                          <span>, </span>&nbsp;<span>{v}</span>
                          <ShareIcon />
                        </>
                      );
                    })}
                </div>
                <Divider dashed style={{ marginBottom: 10, marginTop: 10 }} />
                {state.getListRes.map((v) => {
                  return (
                    <div
                      className="calendar_list mb-2"
                      onClick={() => getCalendarDetailList(v.p_idx)}
                    >
                      <i
                        className={`mdi mdi-checkbox-blank-circle-outline mr-1 ml-2 text`}
                      ></i>
                      <span style={{ fontSize: "16px" }}>
                        <strong>{v.plan}</strong>
                      </span>
                      <div className="ml-4">
                        {moment(v.sdt).format("YYYY.MM.DD HH:mm")} ~{" "}
                        {moment(v.edt).format("YYYY.MM.DD HH:mm")}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        </Modal>
      )}
    </>
  );
}
