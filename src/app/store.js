import { configureStore } from "@reduxjs/toolkit";
import authReducerr from "../features/auth/auth";
import contactsReducer from "../features/contacts/contacts";

export const store = configureStore({
  reducer: {
    auth: authReducerr,
    contacts: contactsReducer,
  },
});
