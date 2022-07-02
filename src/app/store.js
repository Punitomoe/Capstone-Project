import { configureStore } from "@reduxjs/toolkit";
import hasilReducer from "../features/calculator/hasilSlice";
import omzetResultReducer from "../features/calculator/omzetResultSlice";

export const store = configureStore({
  reducer: {
    hasil: hasilReducer,
    omzetResult: omzetResultReducer,
  },
});
