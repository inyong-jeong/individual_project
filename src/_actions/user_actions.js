import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  POST_LOG,
  POST_LOG_ERROR,
  POST_LOG_LOADING,
  GET_LIST,
  GET_LISTS,
  DELETE_LIST,
  DELETE_LIST_LOADING,
  DELETE_LIST_ERROR,
  PUT_LIST,
  GET_SEARCH,
  SET_KEYWORD,
  GET_CALENDAR_LISTS,
  GET_CALENDAR_LIST,
  POST_CALENDAR,
  PUT_CALENDAR,
  DELETE_CALENDAR,
} from "../_actions/types";
import { LIST_SERVER, CALENDAR_SERVER } from "../components/config";
//일지 리스트 불러오기
export function GetLists(dataToSubmit) {
  const request = axios
    .post(`${LIST_SERVER}/get_lists`, dataToSubmit)
    .then((res) => res.data);

  return {
    type: GET_LISTS,
    payload: request,
  };
}
//일지 검색
export function GetSearch(dataToSubmit) {
  const request = axios
    .post(`${LIST_SERVER}/get_search`, dataToSubmit)
    .then((res) => res.data);

  return {
    type: GET_SEARCH,
    payload: request,
  };
}
//일지 작성
export function PostLog(dataToSubmit) {
  const request = axios
    .post(`${LIST_SERVER}/regi_log`, dataToSubmit)
    .then((res) => res.data);

  return {
    type: POST_LOG,
    payload: request,
  };
}

export function PostLogLoading() {
  return {
    type: POST_LOG_LOADING,
  };
}

export function PostLogError() {
  return {
    type: POST_LOG_ERROR,
  };
}
//일지 삭제
export function DeleteList(dataToSubmit) {
  const request = axios
    .post(`${LIST_SERVER}/delete_log`, dataToSubmit)
    .then((res) => res.data);

  return {
    type: DELETE_LIST,
    payload: request,
  };
}

export function DeleteListLoading() {
  return {
    type: DELETE_LIST_LOADING,
  };
}

export function DeleteListError() {
  return {
    type: DELETE_LIST_ERROR,
  };
}

//일지 검색
export function SetKeyword(keyword) {
  return {
    type: SET_KEYWORD,
    payload: keyword,
  };
}

//일정 리스트 조회

export function GetCalendars(dataToSubmit) {
  const request = axios
    .post(`${CALENDAR_SERVER}/get_calendars`, dataToSubmit)
    .then((res) => res.data);

  return {
    type: GET_CALENDAR_LISTS,
    payload: request,
  };
}

//일정 리스트 상세 조회

export function GetCalendar(dataToSubmit) {
  const request = axios
    .post(`${CALENDAR_SERVER}/get_calendar`, dataToSubmit)
    .then((res) => res.data);

  return {
    type: GET_CALENDAR_LIST,
    payload: request,
  };
}
//일정 등록

export function PostCalendar(dataToSubmit) {
  const request = axios
    .post(`${CALENDAR_SERVER}/post_calendar`, dataToSubmit)
    .then((res) => res.data);

  return {
    type: POST_CALENDAR,
    payload: request,
  };
}
//일정 수정

export function PutCalendar(dataToSubmit) {
  const request = axios
    .post(`${CALENDAR_SERVER}/put_calendar`, dataToSubmit)
    .then((res) => res.data);

  return {
    type: PUT_CALENDAR,
    payload: request,
  };
}
//일정 삭제
export function DeleteCalendar(dataToSubmit) {
  const request = axios
    .post(`${CALENDAR_SERVER}/delete_calendar`, dataToSubmit)
    .then((res) => res.data);

  return {
    type: DELETE_CALENDAR,
    payload: request,
  };
}
