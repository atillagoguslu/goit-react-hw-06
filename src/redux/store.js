import { configureStore, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

let initialState = [
  { id: nanoid(8), name: "Rosie Simpson", number: "459-12-56" },
  { id: nanoid(8), name: "Hermione Kline", number: "443-89-12" },
  { id: nanoid(8), name: "Eden Clements", number: "645-17-79" },

  { id: nanoid(8), name: "Annie Copeland", number: "227-91-26" },
  { id: nanoid(8), name: "John Doe", number: "123-45-67" },
  { id: nanoid(8), name: "Jane Smith", number: "789-01-23" },

  { id: nanoid(8), name: "Alice Johnson", number: "345-67-89" },
  { id: nanoid(8), name: "Bob Brown", number: "901-23-45" },
  { id: nanoid(8), name: "Charlie Davis", number: "567-89-01" },
];

const savedContacts = localStorage.getItem("contacts");
if (savedContacts) {
  initialState = JSON.parse(savedContacts);
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("contacts", JSON.stringify(state)); // LocalStorage'a kaydetmek için kullanılır.
    },


    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    contactsInRedux: contactsSlice.reducer,
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default store;
