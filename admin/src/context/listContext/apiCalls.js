import axios from "../../axios";
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  updateListStart,
  updateListSuccess,
  updateListFailure,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from "./ListActions";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("/lists");
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

//create
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post("/lists", list);
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};

//delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete("/lists/" + id);
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};

//update

export const updateList = async (id, dispatch) => {
  dispatch(updateListStart());
  try {
    const res = await axios.put("/lists/" + id);
    dispatch(updateListSuccess(res.data));
  } catch (err) {
    dispatch(updateListFailure());
  }
};