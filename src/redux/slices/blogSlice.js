import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.kaaeo.com/api/blogs/";

const STATUS = Object.freeze({
  idle: "idle",
  loading: "loading",
  error: "error",
});

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    status: STATUS.loading,
    isLoading: true,
    blogs: [],
    blog: {},
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setData: (state, action) => {
      state.blogs = action.payload;
    },
    setSingle: (state, action) => {
      state.blog = action.payload;
    },
  },
});

export function GetBlogData() {
  return async function getData(dispatch) {
    try {
      dispatch(setStatus(STATUS.loading));
      const res = await axios.get(url);
      dispatch(setData(res.data));
      dispatch(setLoading(false));
      dispatch(setStatus(STATUS.idle));
    } catch (e) {
      console.log(e);
      dispatch(setStatus(STATUS.error));
    }
  };
}

export function GetSingleBlogData(title) {
  return async function getSingleData(dispatch) {
    try {
      dispatch(setStatus(STATUS.loading));
      const res = await axios.get(`${url}?title=${title}`);
      dispatch(setSingle(res.data));
      dispatch(setLoading(false));
      dispatch(setStatus(STATUS.idle));
    } catch (e) {
      console.log(e);
      dispatch(setStatus(STATUS.error));
    }
  };
}

export const { setStatus, setLoading, setData, setSingle } = blogSlice.actions;
export default blogSlice.reducer;
