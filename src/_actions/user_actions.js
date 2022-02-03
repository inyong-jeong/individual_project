import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  POST_LOG,
  GET_LIST,
  GET_LISTS,
  DELETE_LIST,
  PUT_LIST
} from '../_actions/types';
import { LIST_SERVER } from '../components/config';

export function GetLists(dataToSubmit) {
  const request = axios.post(`${LIST_SERVER}/get_lists`, dataToSubmit)
    .then(res => res.data);
  
  return {
    type: GET_LISTS,
    payload: request
  }
}