import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  POST_LOG,
  POST_LOG_LOADING,
  POST_LOG_ERROR,
  GET_LIST,
  GET_LISTS,
  DELETE_LIST,
  DELETE_LIST_ERROR,
  DELETE_LIST_LOADING,
  PUT_LIST,
} from "../_actions/types";

const initialState = {
  post_log_rs: null,
  post_response: false,
  get_list_rs: null,
  get_lists_rs: null,
  put_list_rs: null,
  delete_list_rs: null,
  delete_response: false,
};

export default function User(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case LOGIN_USER:
      return { ...state, loginSucces: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case LOGOUT_USER:
      return { ...state };
    //일지 작성
    case POST_LOG_LOADING:
      return { ...state, post_response: false };
    case POST_LOG:
      return { ...state, post_log_rs: action.payload, post_response: true };
    case POST_LOG_ERROR:
      return { ...state, post_response: false };
    //일지 삭제
    case DELETE_LIST_LOADING:
      return { ...state, delete_response: false };
    case DELETE_LIST:
      return {
        ...state,
        delete_list_rs: action.payload,
        delete_response: true,
      };
    case DELETE_LIST_ERROR:
      return { ...state, delete_response: false };
    //일지 불러오기
    case GET_LIST:
      return { ...state, get_list_rs: action.payload };
    case GET_LISTS:
      return { ...state, get_lists_rs: action.payload };
    case PUT_LIST:
      return { ...state, put_list_rs: action.payload };
    default:
      return state;
  }
}
