import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import pofileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: pofileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store;