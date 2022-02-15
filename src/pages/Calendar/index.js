import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import MyCalendar from "../../components/calendar/MyCalendar";

const CalendarPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <>
      <MyCalendar />
    </>
  );
};

export default CalendarPage;
