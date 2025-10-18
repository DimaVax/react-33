import { createReducer } from "@reduxjs/toolkit";
import { filterContacts } from "./action";

const initialState = '';

// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FILTER_CONTACTS:
//       return action.payload

//     default:
//       return state;
//   }
// };

export const reducer = createReducer(initialState, builder => {
    builder.addCase(filterContacts, (state, action) => {
        return action.payload
    })
})