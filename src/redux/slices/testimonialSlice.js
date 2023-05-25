import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.kaaeo.com/api/testimonial/";

const STATUS = Object.freeze({
  idle: "idle",
  loading: "loading",
  error: "error",
});

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState: {
    status: STATUS.loading,
    isLoading: true,
    testimonial: [],
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setData: (state, action) => {
      state.testimonial = action.payload;
    },
  },
});

export function GetTestimonialData() {
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

export const { setStatus, setLoading, setData } = testimonialSlice.actions;
export default testimonialSlice.reducer;
