import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// eslint-disable-next-line import/no-named-as-default
import issueInformation from "./kanbanSlice";

const persistIssue = {
  key: "Issue",
  version: 1,
  storage,
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const persistedReducer_Issue = persistReducer(persistIssue, issueInformation);
export const store = configureStore({
  reducer: {
    issueInformation: persistedReducer_Issue,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
