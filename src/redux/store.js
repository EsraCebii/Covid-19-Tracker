import { configureStore } from "@reduxjs/toolkit";

import valuesSlice  from "./valuesSlice";

export const store = configureStore({
    reducer: {
        covidvalues: valuesSlice,
    },
});