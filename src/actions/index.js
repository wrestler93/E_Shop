import { ActionTypes } from "../contants/action-type";

export const searchEmail = (email, password) => {
  return {
    type: ActionTypes.SEARCH_EMAIL,
    payload: { email, password },
  };
};
export const Logout = (data) => {
  return {
    type: ActionTypes.LOGOUT,
    payload: { data },
  };
};
export const ItemCount = (data) => {
  return {
    type: ActionTypes.ITEM_DATA,
    payload: { data },
  };
};
export const removeData = (data) => {
  return {
    type: ActionTypes.REMOVE_DATA,
    payload: { data },
  };
};
export const DataRecord = (data) => {
  return {
    type: ActionTypes.DATA_RECORD,
    payload: { data },
  };
};
