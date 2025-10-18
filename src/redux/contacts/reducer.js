
import { createReducer } from "@reduxjs/toolkit";
import { addContact, removeContact } from "./action";

const initialState = [{name: 'dima', id: 67, phone: '+67 1488 5242'}] 

// export const reducer = (state = initialState, action) => {
//     switch( action.type ){
//         case ADD_CONTACT:
//             // state = [...state, action.payload]
//             // console.log(state)
//             return [...state, action.payload]

//         case REMOVE_CONTACT:
//             return [...state].filter((contact) => contact.id !== action.payload)
//         default: 
//             return state
//     }
// }

export const reducer = createReducer(initialState, builder => {
  builder.addCase(addContact, (state, action) => {
    return [...state, action.payload];
  }).addCase(removeContact, (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  });
});