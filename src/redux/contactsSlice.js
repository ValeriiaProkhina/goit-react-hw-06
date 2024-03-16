import { createSlice, nanoid } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: (value) => {
        return {
          payload: {
            ...value,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export default slice.reducer;
export const { addContact, deleteContact } = slice.actions;
export const selectContacts = (state) => state.contacts.items;
