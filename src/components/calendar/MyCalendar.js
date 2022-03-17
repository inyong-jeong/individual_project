/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/ko";
import { useMediaQuery } from "react-responsive";

import { useDispatch, useSelector } from "react-redux";
import { GetCalendars, GetCalendar } from "../../_actions/user_actions";
import CalendarModal from "./CalendarModal";
import CalendarDetailModal from "./CalendarDetailModal";
import CalendarEditModal from "./CalendarEditModal";

import { CALENDAR_DATE } from "../../_actions/types";

export default function MyCalendar(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.User);

  const [CalendarDate, setCalendarDate] = useState(moment);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalDVisible, setIsModalDVisible] = useState(false);

  const [mtEventsList, setmtEventsList] = useState([]);

  // console.log(12345);
  const [Cdata, setCdata] = useState({
    cyear: moment().format("YYYY"),
    cmonth: moment().format("MM"),
  });

  // const showModal = () => {
  //   dispatch({
  //     type: CALENDAR_PLUS,
  //     payload: true
  //   })
  //   setIsModalVisible(true);
  // };

  // console.log(22);
  const localizer = momentLocalizer(moment);

  const onSelectSlot = (event) => {
    setIsModalVisible(true);
    setCalendarDate(moment(event.slots[0]).format("YYYY-MM-DD"));
    dispatch({
      type: CALENDAR_DATE,
      payload: moment(event.slots[0]).format("YYYY-MM-DD"),
    });
  };
  // console.log(state.click_state);

  const handleOnSelect = (e, v) => {
    // console.log(e);
    // console.log(e);
    // dispatch(
    //   GetCalendar.call({
    //     p_idx: e.p_idx,
    //   })
    // );
    // dispatch(
    //   GetCalendars.call({
    //     cyear: e.start.getFullYear(),
    //     cmonth: moment(e.start).format("MM"),
    //     cday: moment(e.start).format("DD"),
    //   })
    // );
    // setIsModalDVisible(true);
  };

  const handleOnNavigate = (e, v) => {
    console.log(e);
    // let data = undefined;
    // if (e.getMonth() === new Date().getMonth()) {
    //   data = new Date();
    // } else {
    //   data = new Date(e.getFullYear(), e.getMonth(), 1);
    // }
    // dispatch({
    //   type: CALENDAR_EVENT,
    //   payload: data,
    // });
    setCdata({
      ...Cdata,
      cyear: moment(e).format("YYYY"),
      cmonth: moment(e).format("MM"),
    });
  };
  // console.log(22);
  //캘린더 list 가공 함수
  function FilterList(lists) {
    console.log("캘린더 가공 함수 리스트", lists);
    let result = [];
    for (let i = 0; i < lists.length; i++) {
      result[i] = {
        title: `${lists[i].plan}`,
        allDay: false,
        p_idx: lists[i].c_idx,
        start: new Date(
          Number(moment(lists[i].sdt).format("YYYY")),
          Number(moment(lists[i].sdt).format("MM")) - 1,
          Number(moment(lists[i].sdt).format("DD")),
          Number(moment(lists[i].sdt).format("HH")),
          Number(moment(lists[i].sdt).format("mm"))
        ),
        end: new Date(
          Number(moment(lists[i].edt).format("YYYY")),
          Number(moment(lists[i].edt).format("MM")) - 1,
          Number(moment(lists[i].edt).format("DD")),
          Number(moment(lists[i].edt).format("HH")),
          Number(moment(lists[i].edt).format("mm"))
        ),
      };
    }
    return result;
  }

  // 캘린더 리스트 호출
  useEffect(() => {
    console.log(Cdata);
    dispatch(GetCalendars.call(Cdata));
  }, [Cdata, state.post_calendar_response]);

  // 캘린더 디테일 확인 후 닫을 때 리스트 다시 호출
  // useEffect(() => {
  //   if (!isModalDVisible) {
  //     dispatch(getCalendarLists.call(Cdata))
  //   }
  // }, [isModalDVisible])

  // 캘린더 리스트 받아오면 리스트 데이터 set
  useEffect(() => {
    if (state.get_calendars_response) {
      // console.log(state.getListsRes);
      setmtEventsList(FilterList(state.get_calendars_rs));
      state.get_calendars_response = false;
    }
  }, [state.get_calendars_response]);

  return (
    <>
      <div className="content_body">
        <Calendar
          onNavigate={handleOnNavigate}
          longPressThreshold={0.1}
          localizer={localizer}
          events={mtEventsList}
          style={{ height: "80vh" }}
          views={["month", "week", "day"]}
          onSelectEvent={handleOnSelect}
          selectable={true}
          onSelectSlot={onSelectSlot}
          culture="ko"
          messages={{
            today: "오늘",
            previous: "<",
            next: ">",
            month: "월",
            week: "주",
            day: "일",
          }}
        />

        <CalendarModal
          Cdata={Cdata}
          setIsModalVisible={setIsModalVisible}
          isModalVisible={isModalVisible}
          CalendarDate={CalendarDate}
          onSelectSlot={onSelectSlot}
        />
        {/* <CalendarDetailModal
          Cdata={Cdata}
          setIsModalDVisible={setIsModalDVisible}
          isModalDVisible={isModalDVisible}
        /> */}
        <CalendarEditModal Cdata={Cdata} />
      </div>
    </>
  );
}
