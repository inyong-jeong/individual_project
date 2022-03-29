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
  GET_SEARCH_LOADING,
  GET_SEARCH_ERROR,
  GET_SEARCH,
  SET_KEYWORD,
  GET_CALENDAR_LISTS,
  GET_CALENDAR_LISTS_LOADING,
  GET_CALENDAR_LISTS_ERROR,
  GET_CALENDAR_LIST,
  GET_CALENDAR_LIST_LOADING,
  GET_CALENDAR_LIST_ERROR,
  POST_CALENDAR,
  POST_CALENDAR_LOADING,
  POST_CALENDAR_ERROR,
  PUT_CALENDAR,
  PUT_CALENDAR_LOADING,
  PUT_CALENDAR_ERROR,
  DELETE_CALENDAR,
  DELETE_CALENDAR_LOADING,
  DELETE_CALENDAR_ERROR,
  CALENDAR_DATE,
} from "../_actions/types";

const initialState = {
  post_log_rs: null,
  post_response: false,
  get_list_rs: null,
  get_lists_rs: null,
  put_list_rs: null,
  delete_list_rs: null,
  delete_response: false,
  get_search_rs: null,
  get_response: false,
  keyword: "",
  get_calendars_rs: null,
  get_calendars_response: false,
  getListRes: [],
  get_calendar_response: false,
  post_calendar_rs: null,
  post_calendar_response: false,
  put_calendar_rs: null,
  put_calendar_response: false,
  delete_calendar_rs: null,
  delete_calendar_response: false,
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
    //일지 검색하기
    case GET_SEARCH:
      return { ...state, get_search_rs: action.payload };
    case GET_SEARCH_LOADING:
      return { ...state, get_search_rs: action.payload };
    case GET_SEARCH_ERROR:
      return { ...state, get_search_rs: action.payload };
    case SET_KEYWORD:
      return { ...state, keyword: action.payload };
    //일정리스트 가져오기
    case GET_CALENDAR_LISTS:
      return {
        ...state,
        get_calendars_rs: action.payload.message,
        get_calendars_response: true,
      };
    case GET_CALENDAR_LISTS_LOADING:
      return {
        ...state,
        get_calendars_response: false,
      };
    case GET_CALENDAR_LISTS_ERROR:
      return {
        ...state,
        get_calendars_response: false,
      };
    //일정 상세조회
    case GET_CALENDAR_LIST:
      return {
        ...state,
        getListRes: action.payload.message,
        get_calendar_response: true,
      };
    case GET_CALENDAR_LIST_LOADING:
      return {
        ...state,
        // getListRes: action.payload,
        get_calendar_response: false,
      };
    case GET_CALENDAR_LIST_ERROR:
      return {
        ...state,
        getListRes: action.payload,
        get_calendar_response: false,
      };
    //일정등록
    case POST_CALENDAR:
      return {
        ...state,
        post_calendar_rs: action.payload,
        post_calendar_response: true,
      };
    case POST_CALENDAR_LOADING:
      return {
        ...state,
        post_calendar_response: false,
      };
    case POST_CALENDAR_ERROR:
      return {
        ...state,
        post_calendar_response: false,
      };
    //일정수정
    case PUT_CALENDAR:
      return {
        ...state,
        put_calendar_rs: action.payload,
        put_calendar_response: false,
      };
    case PUT_CALENDAR_LOADING:
      return {
        ...state,
        put_calendar_rs: action.payload,
        put_calendar_response: true,
      };
    case PUT_CALENDAR_ERROR:
      return {
        ...state,
        put_calendar_rs: action.payload,
        put_calendar_response: false,
      };
    //일정삭제
    case DELETE_CALENDAR:
      return {
        ...state,
        delete_calendar_rs: action.payload,
        delete_calendar_response: false,
      };
    case DELETE_CALENDAR_LOADING:
      return {
        ...state,
        delete_calendar_rs: action.payload,
        delete_calendar_response: true,
      };
    case DELETE_CALENDAR_ERROR:
      return {
        ...state,
        delete_calendar_rs: action.payload,
        delete_calendar_response: false,
      };
    case CALENDAR_DATE:
      return {
        ...state,
        click_state: action.payload,
      };
    default:
      return state;
  }
}
