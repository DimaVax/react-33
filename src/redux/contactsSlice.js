import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [{ name: "dima", id: 67, phone: "+67 1488 5242" }],
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    removeContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      ); // ✅ теперь обновляем поле items, не весь state
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;