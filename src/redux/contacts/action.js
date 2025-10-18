import { ADD_CONTACT, REMOVE_CONTACT } from "./type";
import { createAction } from "@reduxjs/toolkit";

// export const addContact = (contact) => {
//     return {type: ADD_CONTACT, payload: contact}
// }

// export const removeContact = (id) => {
//     return {type: REMOVE_CONTACT, payload: id}
// }
export const addContact = createAction(ADD_CONTACT)
export const removeContact = createAction(REMOVE_CONTACT)