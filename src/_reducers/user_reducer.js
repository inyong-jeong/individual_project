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

const initialState = {
  post_log_rs: null,
  get_list_rs: null,
  get_lists_rs: null,
  put_list_rs: null,
  delete_list_rs: null,

}

export default function User (state=initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, register: action.payload }
    case LOGIN_USER:
      return { ...state, loginSucces: action.payload }
    case AUTH_USER:
      return { ...state, userData: action.payload }
    case LOGOUT_USER:
      return { ...state }
    case POST_LOG:
      return { ...state, post_log_rs: action.payload }
    case GET_LIST:
      return { ...state, get_list_rs: action.payload }
    case GET_LISTS:
      return { ...state, get_lists_rs: action.payload }
    case PUT_LIST:
      return { ...state, put_list_rs: action.payload }
    case DELETE_LIST:
      return { ...state, delete_list_rs: action.payload }
    
    default:
      return state;
  }
}