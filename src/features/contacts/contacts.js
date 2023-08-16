import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Doe",
  },
  {
    id: 3,
    name: "Jane",
  },
  {
    id: 4,
    name: "Doe",
  },
];

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setState: (action) => {
      return action.payload;
    },
    addContact: (state, action) => {
      return state.push(action.payload);
    },
    removeContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { setState, addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
