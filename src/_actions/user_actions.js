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
} from "../_actions/types";
import { LIST_SERVER } from "../components/config";
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
