import createStore from "stockroom/worker";
import uuidv1 from "uuid";

let store = createStore();

store.registerActions(store => ({
  addBook: ({ books }, book) => {
    const id = uuidv1();

    return {
      books: {
        allIds: [...books.allIds, id],
        byId: {
          [id]: book
        }
      }
    };
  },
  removeBook: ({ books }, bookId) => {
    console.log(`Attempting to remove ${bookId}`);
    const newBooks = Object.assign({}, books);
    delete newBooks.byId[bookId];

    newBooks.allIds = newBooks.allIds.filter(id => bookId !== id);
    console.log(newBooks);

    return {
      books: newBooks
    };
  }
}));

export default store; // if you wish to use `stockroom/inline`
