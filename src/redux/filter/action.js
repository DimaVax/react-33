import { FILTER_CONTACTS } from "./type";
import { createAction } from "@reduxjs/toolkit";

// export const filterContacts = (keyword) => {
//     return {type: FILTER_CONTACTS, payload: keyword}
// }

export const filterContacts = createAction(FILTER_CONTACTS)