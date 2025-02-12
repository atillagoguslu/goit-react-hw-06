import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      { id: "id-5", name: "John Doe", number: "123-45-67" },
      { id: "id-6", name: "Jane Doe", number: "765-43-21" },
    ],
  },

  reducers: {
    addContact: {
      reducer(state, action) {
        try {
          state.items.push(action.payload);
        } catch (error) {
          console.error("Failed to add contact:", error);
        }
      },
    },
    deleteContact: {
      reducer(state, action) {
        try {
          const index = state.items.findIndex(
            (contact) => contact.id === action.payload
          );
          state.items.splice(index, 1);
        } catch (error) {
          console.error("Failed to delete contact:", error);
        }
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;
export default contactsSlice.reducer;
