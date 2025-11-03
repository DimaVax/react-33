import { createSlice } from "@reduxjs/toolkit";


const contactsSlice = createSlice({
    name: "contacts",
    initialState: [{name: 'dima', id: 67, phone: '+67 1488 5242'}] ,
    reducers: {
        addContact(state, action){
            state.push(action.payload)
        },
        removeContact(state, action){
            return state.filter(contact => contact.id !== action.payload);
        }
    }
})

export const {addContact, removeContact} = contactsSlice.actions
export default contactsSlice.reducer
