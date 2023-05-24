import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.kaaeo.com/api/careers/";

const STATUS = Object.freeze({
  idle: "idle",
  loading: "loading",
  error: "error",
});

const careerSlice = createSlice({
  name: "career",
  initialState: {
    status: STATUS.loading,
    isLoading: true,
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export function SendData(data) {
  return async function getData(dispatch) {
    try {
      dispatch(setStatus(STATUS.loading));
      await axios.post(url, data);
      dispatch(setLoading(false));
      dispatch(setStatus(STATUS.idle));
    } catch (e) {
      console.log(e);
      dispatch(setStatus(STATUS.error));
    }
  };
}

export const { setStatus, setLoading } = careerSlice.actions;
export default careerSlice.reducer;
