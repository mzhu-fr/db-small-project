import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from "./reduc/redux-index";

const store = configureStore(
    { reducer: rootReducer, }
)

export default store;