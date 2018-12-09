import createStore from "stockroom/worker";

let store = createStore();

function hashCode(str) {
  return str
    .split("")
    .reduce(
      (prevHash, currVal) =>
        ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
      0
    );
}

store.registerActions(store => ({
  addBook: ({ books }, book) => {
    const id = hashCode(book.title);

    return {
      books: {
        allIds: [...books.allIds, id],
        byId: Object.assign({}, books.byId, { [id]: book })
      }
    };
  }
}));

export default store; // if you wish to use `stockroom/inline`
