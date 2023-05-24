import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.kaaeo.com/api/blog/comments/";

const STATUS = Object.freeze({
  idle: "idle",
  loading: "loading",
  error: "error",
});

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    status: STATUS.loading,
    isLoading: true,
    comment: [],
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setData: (state, action) => {
      state.comment = action.payload;
    },
  },
});

export function GetCommentData(blog_id) {
  return async function getData(dispatch) {
    try {
      dispatch(setStatus(STATUS.loading));
      const res = await axios.get(`${url}?blog_id=${blog_id}`);
      dispatch(setData(res.data));
      dispatch(setLoading(false));
      dispatch(setStatus(STATUS.idle));
    } catch (e) {
      console.log(e);
      dispatch(setStatus(STATUS.error));
    }
  };
}

export function CreateComment(comment) {
    return async function sendData(dispatch) {
      try {
        dispatch(setStatus(STATUS.loading));
        await axios.post(url, comment);
        dispatch(setLoading(false));
        dispatch(setStatus(STATUS.idle));
      } catch (e) {
        console.log(e);
        dispatch(setStatus(STATUS.error));
      }
    };
  }


export const { setStatus, setLoading, setData } = commentSlice.actions;
export default commentSlice.reducer;
