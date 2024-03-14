import { combineReducers, createStore } from "redux";
import { addItemReducer } from "./addItemReducer";
import { todoReducer } from "./todoReducer";


const rootReducer = combineReducers({
    addItemReducer: addItemReducer,
    todos:todoReducer
})
export const store = createStore(rootReducer);