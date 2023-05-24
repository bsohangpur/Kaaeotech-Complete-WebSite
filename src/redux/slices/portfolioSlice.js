import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://api.kaaeo.com/api/portfolios/";

const STATUS = Object.freeze({
  idle: "idle",
  loading: "loading",
  error: "error",
});

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    status: STATUS.loading,
    isLoading: true,
    portfolio: [],
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setData: (state, action) => {
      state.portfolio = action.payload;
    },
  },
});

export function GetPortfolioData() {
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

export const { setStatus, setLoading, setData } = portfolioSlice.actions;
export default portfolioSlice.reducer;
