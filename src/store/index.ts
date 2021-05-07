import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const appStore = createStore(rootReducer, composeWithDevTools());

export default appStore;
