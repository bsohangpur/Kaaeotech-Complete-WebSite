import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.kaaeo.com/api/services/";

const STATUS = Object.freeze({
  idle: "idle",
  loading: "loading",
  error: "error",
});

const serviceSlice = createSlice({
  name: "service",
  initialState: {
    status: STATUS.loading,
    isLoading: true,
    services: [],
    service: undefined,
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setAllData: (state, action) => {
      state.services = action.payload;
    },
    setData: (state, action) => {
      state.service = action.payload;
    },
  },
});

export function GetServiceData() {
  return async function getData(dispatch) {
    try {
      dispatch(setStatus(STATUS.loading));
      const res = await axios.get(url);
      dispatch(setAllData(res.data));
      dispatch(setLoading(false));
      dispatch(setStatus(STATUS.idle));
    } catch (e) {
      console.log(e);
      dispatch(setStatus(STATUS.error));
    }
  };
}

export function GetSingleServiceData(title) {
  return async function getSingleData(dispatch) {
    try {
      dispatch(setStatus(STATUS.loading));
      const res = await axios.get(`${url}?title=${title}`);
      console.log(`${url}?title=${title}`)
      dispatch(setData(res.data));
      dispatch(setLoading(false));
      dispatch(setStatus(STATUS.idle));
    } catch (e) {
      console.log(e);
      dispatch(setData([]));
      dispatch(setStatus(STATUS.error));
    }
  };
}

export const { setStatus, setLoading, setData, setAllData } =
  serviceSlice.actions;
export default serviceSlice.reducer;
