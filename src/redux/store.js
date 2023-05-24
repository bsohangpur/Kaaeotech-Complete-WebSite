import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./slices/contactSlice";
import portfolioSlice from "./slices/portfolioSlice";
import testimonialSlice from "./slices/testimonialSlice";
import teamSlice from "./slices/teamSlice";
import serviceSlice from "./slices/serviceSlice";
import blogSlice from "./slices/blogSlice";
import commentSlice from "./slices/commentSlice";
import careerSlice from "./slices/careerSlice";

const store = configureStore({
  reducer: {
    contact: contactSlice,
    portfolio:portfolioSlice,
    testimonial:testimonialSlice,
    team:teamSlice,
    service:serviceSlice,
    blog:blogSlice,
    comment:commentSlice,
    career:careerSlice,

  },
});

export default store;
