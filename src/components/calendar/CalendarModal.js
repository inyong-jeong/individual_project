import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getCalendarLists, postCalendar } from "redux/calendar/actions";
// import { getUserList } from "redux/actions";
import {
  Modal,
  Input,
  DatePicker,
  TimePicker,
  Divider,
  Switch,
  Select,
} from "antd";
import moment from "moment";
import { ReactComponent as Noti } from "../../assets/icons/noti.svg";
import { ReactComponent as PersonIcon } from "../../assets/icons/log/person.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/log/location.svg";

// import { ReactComponent as CalIcon } from "assets/icons/log/cal.svg";
import { ReactComponent as CalIcon } from "../../assets/icons/log/cal.svg";

import { ReactComponent as Log } from "../../assets/icons/main/log.svg";

export default function CalendarModal({
  Cdata,
  isModalVisible,
  setIsModalVisible,
}) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Calendar);
  const state2 = useSelector((state) => state.SalesLog);

  const AlarmOption = [
    { label: "정시", value: 0 },
    { label: "5분전", value: 5 },
    { label: "10분전", value: 10 },
    { label: "30분전", value: 30 },
    { label: "2시간전", value: 120 },
    { label: "4시간전", valuse: 240 },
  ];

  const [CheckAlarm, setCheckAlarm] = useState(false);
  const [CheckAllDay, setCheckAllDay] = useState(false);

  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  //날짜 스테이트
  const [sdateString, setsDateString] = useState(moment());
  const [edateString, seteDateString] = useState(moment());
  const [start, setStart] = useState(moment());
  const [end, setEnd] = useState(moment());

  // useEffect(() => {
  //   setsDateString(moment(new Date(state.ClickDate)));
  //   seteDateString(moment(new Date(state.ClickDate)));
  //   setBody({
  //     ...body,
  //     sdt: moment(new Date(state.ClickDate)).format("YYYY-MM-DD"),
  //     edt: moment(new Date(state.ClickDate)).format("YYYY-MM-DD"),
  //   });
  // }, [state.ClickDate]);

  // useEffect(() => {
  //   if (state.CalendarPlus) {
  //     setsDateString(moment(state.CalendarEvent));
  //     seteDateString(moment(state.CalendarEvent));
  //     setBody({
  //       ...body,
  //       sdt: moment(state.CalendarEvent).format("YYYY-MM-DD"),
  //       edt: moment(state.CalendarEvent).format("YYYY-MM-DD"),
  //     });
  //     state.CalendarPlus = false;
  //   }
  // }, [state.CalendarPlus]);

  //알람시간
  const [AlarmTime, setAlarmTime] = useState();

  //모달 데이터
  const [body, setBody] = useState({
    dept_idx: 0,
    acc_idx: 0,
    plan: "",
    content: "",
    sdt: moment().format("YYYY-MM-DD"),
    edt: moment().format("YYYY-MM-DD"),
    stime: moment().format("HH:mm"),
    etime: moment().format("HH:mm"),
    location: "",
    pub_yn: "N",
    pub_mans: "",
    alarm_yn: "Y",
    alarm_min: 10,
  });

  const handleOk = () => {
    if (body.plan === "") {
      return alert("일정은 필수값입니다");
    }
    // dispatch(postCalendar.call(body));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const AllDayCheck = (e) => {
    if (e === true) {
      setBody({ ...body, stime: "00:00", etime: "00:00" });
    } else if (e === false) {
      setStart(moment());
      setEnd(moment());
      setBody({
        ...body,
        stime: moment().format("HH:mm"),
        etime: moment().format("HH:mm"),
      });
    }
    setCheckAllDay(e);
  };

  const AlarmCheck = (e) => {
    if (e === true) {
      setBody({ ...body, alarm_yn: "Y" });
    } else if (e === false) {
      setBody({ ...body, alarm_yn: "N" });
    }
    setCheckAlarm(!e);
  };

  const selectStyle = { width: "100%" };

  //일정, 설명, 주소 변환
  const handleOnChange = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };

  //멤버 이름 넣으면 해당 멤버의 login_idx 반환 하는 함수
  function filterList(label) {
    let list = [];
    for (let i = 0; i < state2.userlist.length; i++) {
      for (let j = 0; j < label.length; j++) {
        if (label[j] === state2.userlist[i].user_name) {
          list = list.concat(state2.userlist[i].login_idx);
        } else if (label === []) {
          list = [];
        }
      }
    }
    return list;
  }

  const onOrganizationUserSelectChange = (label) => {
    console.log(label);
    if (label.length > 0) {
      setBody({ ...body, pub_yn: "Y" });
    } else if (label.length === 0) {
      setBody({ ...body, pub_yn: "N" });
    }
    setSelectedItems(label);
    let memberlist = filterList(label);
    setBody({ ...body, pub_mans: memberlist });
  };

  //날짜 및 시간 변화

  const onDatePickerSChange = (date) => {
    setsDateString(date);
    seteDateString(date);
    const convertdate = moment(date).format("YYYY-MM-DD");
    setBody({
      ...body,
      sdt: convertdate,
      edt: convertdate,
    });
  };

  const onDatePickerEChange = (date) => {
    seteDateString(date);
    const convertdate = moment(date).format("YYYY-MM-DD");
    setBody({
      ...body,
      edt: convertdate,
    });
  };

  const onChangesSartValue = (stime) => {
    setStart(stime);
    const convertstime = moment(stime).format("HH:mm");
    setBody({
      ...body,
      stime: convertstime,
    });
  };

  const onChangeEndValue = (etime) => {
    setEnd(etime);
    const convertetime = moment(etime).format("HH:mm");
    setBody({
      ...body,
      etime: convertetime,
    });
  };

  const handleAlarmTime = (option) => {
    setAlarmTime(option);
    setBody({ ...body, alarm_min: option });
  };
  //모달창 open -> 공유멤버 리스트 조회
  useEffect(() => {
    if (isModalVisible) {
      // dispatch(getUserList.call({ srch: "" }));
    }
  }, [isModalVisible]);

  // useEffect(() => {
  //   if (state2.userlistresponse) {
  //     const memList = state2.userlist.map((v) => v.user_name);
  //     const optList =
  //       memList && memList.filter((v) => !selectedItems.includes(v));
  //     setFilteredOptions(optList);
  //     state.userlistresponse = false;
  //   }
  // }, [state2.userlistresponse]);

  // 일정 등록 후 모달 닫기
  // useEffect(() => {
  //   if (state.postState) {
  //     setBody({
  //       ...body,
  //       dept_idx: 0,
  //       acc_idx: 0,
  //       plan: "",
  //       content: "",
  //       sdt: moment().format("YYYY-MM-DD"),
  //       edt: moment().format("YYYY-MM-DD"),
  //       stime: moment().format("HH:mm"),
  //       etime: moment().format("HH:mm"),
  //       location: "",
  //       pub_yn: "Y",
  //       pub_mans: "",
  //       alarm_yn: "Y",
  //       alarm_min: 10,
  //     });
  //     setCheckAlarm(false);
  //     setAlarmTime(10);
  //     setSelectedItems([]);
  //     setIsModalVisible(false);
  //     state.ClickDate = undefined;
  //     // dispatch(getCalendarLists.call(Cdata));
  //     state.postState = false;
  //   }
  // }, [state.postState]);

  return (
    <>
      <Modal
        title="일정 작성"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="닫기"
        okText="등록"
      >
        <div style={{ display: "flex" }}>
          <Log
            stroke="#aaa"
            style={{ marginRight: "6px", alignSelf: "center" }}
          />
          <Input
            name="plan"
            value={body.plan}
            placeholder="일정"
            onChange={handleOnChange}
          />
        </div>
        <Divider style={{ marginBottom: 10, marginTop: 10 }} />
        <div style={{ display: "flex" }}>
          <Log
            stroke="#aaa"
            style={{ marginRight: "6px", alignSelf: "center" }}
          />
          <Input.TextArea
            name="content"
            value={body.content}
            onChange={handleOnChange}
            placeholder="설명"
          ></Input.TextArea>
        </div>

        <Divider style={{ marginBottom: 10, marginTop: 10 }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <CalIcon stroke="#aaa" style={{ marginRight: "8px" }} />
            <div style={{ display: "inline-block", verticalAlign: "-3px" }}>
              종일
            </div>
          </div>
          <div>
            <Switch size="small" onChange={AllDayCheck} />
          </div>
        </div>

        <div className="mt-2"></div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <span style={{ marginRight: "12px" }}></span>
          <DatePicker
            className="col-6"
            allowClear={false}
            placeholder="날짜"
            inputReadOnly={true}
            defaultValue={moment}
            format={"YYYY.MM.DD"}
            value={sdateString}
            onChange={onDatePickerSChange}
          />
          <span style={{ marginRight: "28px" }}></span>
          {!CheckAllDay ? (
            <TimePicker
              allowClear={false}
              placeholder="시간"
              className="col-4"
              inputReadOnly={true}
              format={"HH:mm"}
              defaultValue={moment}
              minuteStep={10}
              value={start}
              onChange={onChangesSartValue}
              // onSelect={(value) => {
              //   setStart(value);
              // }}
            />
          ) : (
            <span className="col-4"></span>
          )}
        </div>
        <div className="mt-1"></div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <span style={{ marginRight: "12px" }}></span>
          <DatePicker
            className="col-6"
            allowClear={false}
            placeholder="날짜"
            inputReadOnly={true}
            defaultValue={moment}
            format={"YYYY.MM.DD"}
            value={edateString}
            onChange={onDatePickerEChange}
          />
          <span style={{ marginRight: "28px" }}></span>
          {!CheckAllDay ? (
            <TimePicker
              allowClear={false}
              placeholder="시간"
              className="col-4"
              inputReadOnly={true}
              format={"HH:mm"}
              defaultValue={moment}
              minuteStep={10}
              value={end}
              onChange={onChangeEndValue}
              // onSelect={(value) => {
              //   setStart(value);
              // }}
            />
          ) : (
            <span className="col-4"></span>
          )}
        </div>

        <Divider style={{ marginBottom: 10, marginTop: 10 }} />
        <div style={{ display: "flex" }}>
          <LocationIcon
            stroke="#aaa"
            style={{ marginRight: "8px", alignSelf: "center" }}
          />
          <Input
            name="location"
            value={body.location}
            onChange={handleOnChange}
            placeholder="위치"
          />
        </div>
        <Divider style={{ marginBottom: 10, marginTop: 10 }} />
        <div style={{ display: "flex", direction: "column" }}>
          <Noti
            stroke="#aaa"
            style={{ marginRight: "6px", alignSelf: "center" }}
          />
          <Select
            placeholder="알람설정"
            options={AlarmOption}
            defaultValue={10}
            value={AlarmTime}
            onChange={handleAlarmTime}
            disabled={CheckAlarm}
          />
          <div className="ml-2 mt-1" style={{ float: "right" }}>
            <Switch
              size="small"
              onChange={AlarmCheck}
              checked={body.alarm_yn === "Y" ? true : false}
            />
          </div>
        </div>
        {/* <Divider style={{ marginBottom: 10, marginTop: 10 }} />
        <div style={{ display: 'flex' }}>
          <Share stroke='#aaa' style={{ alignSelf: 'center', marginRight: '4px' }} />
          <Radio.Group onChange={onChange} value={body.pub_yn}>
            <Radio onClick={onPublic} value={'Y'}>공개</Radio>
            <Radio onClick={onPrivate} value={'N'}>비공개</Radio>
          </Radio.Group>
        </div> */}

        <Divider style={{ marginBottom: 10, marginTop: 10 }} />
        <div style={{ display: "flex" }}>
          <PersonIcon
            stroke="#aaa"
            style={{ alignSelf: "center", marginRight: "8px" }}
          />
          <Select
            placeholder="공유 멤버"
            mode="multiple"
            style={selectStyle}
            onChange={onOrganizationUserSelectChange}
            value={selectedItems}
            // maxTagCount={isMobile ? 2 : 3}
          >
            {filteredOptions &&
              filteredOptions.map((item, index) => (
                <Select.Option key={index} value={item}>
                  {item}
                </Select.Option>
              ))}
          </Select>
        </div>
      </Modal>
    </>
  );
}
