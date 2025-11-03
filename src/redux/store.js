// import { createStore, combineReducers } from 'redux'
// import { reducer as contactsReducer } from './contacts/reducer';
// import { reducer as filterReducer } from './filter/reducer';

// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer
// })

// export const store = createStore(rootReducer);

import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice"
// import { reducer as filterReducer } from "./filter/reducer";
// import { reducer as contactsReducer } from "./contacts/reducer";
import contactsReducer from "./contactsSlice"

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        contacts: contactsReducer
    }
})

