import createStore from "stockroom";
import StoreWorker from "./store.worker";

let store = createStore(new StoreWorker());

const defaultState = {
  books: {
    byId: {},
    allIds: []
  }
};

const storeContents = JSON.parse(localStorage.getItem("state")) || defaultState;

store.setState(storeContents);

// Write store to localStorage each time it changes.
store.subscribe(newState =>
  localStorage.setItem("state", JSON.stringify(newState))
);

export default store;
