import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage"; 
import authReducer from './Slices/authSlice';

const persistConfig = {
  key: "root",
  storage,
};


const persistedAuthReducer = persistReducer(persistConfig, authReducer);


export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    middleware: [thunk]
  },
});

export const persistor = persistStore(store);
