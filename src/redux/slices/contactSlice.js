import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const url = "https://api.kaaeo.com/api/contacts/";
const url = "http://127.0.0.1:8000/api/contacts/";

const STATUS = Object.freeze({
  idle: "idle",
  loading: "loading",
  error: "error",
});

const contactSlice = createSlice({
  name: "contact",
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

export const { setStatus, setLoading } = contactSlice.actions;
export default contactSlice.reducer;
