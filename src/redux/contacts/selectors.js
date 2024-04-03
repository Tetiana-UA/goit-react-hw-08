import { selectTextFilter } from "../filters/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectContacts = (state) => state.contacts.items;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectTextFilter],
  (contacts, textFilter) => {
    //console.log("selectVisibleContacts");
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);
