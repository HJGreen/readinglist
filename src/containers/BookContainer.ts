import { Container } from "unstated";
import uuidv1 from "uuid";
import { Book, BookUpdate } from "../model/Book";

interface IBookState {
  byId: {
    [id: string]: Book;
  };
  allIds: string[];
}

const deleteProperty = (key: string, { [key]: _, ...newObj }) => newObj;

class BookContainer extends Container<IBookState> {
  persistToLocalStorage = () => {
    window.localStorage.setItem("books", JSON.stringify(this.state));
  };

  retrieveFromLocalStorage = () => {
    const data = window.localStorage.getItem("books");
    if (data) {
      return JSON.parse(data);
    }

    return false;
  };

  state = this.retrieveFromLocalStorage() || {
    byId: {},
    allIds: []
  };

  addBook = async (book: Book): Promise<any> => {
    const id = book.id || uuidv1();

    await this.setState(state => ({
      allIds: [...state.allIds, id],
      byId: Object.assign(state.byId, { [id]: { id: id, ...book } })
    })).then(this.persistToLocalStorage);
  };

  updateBook = async (id: string, book: BookUpdate): Promise<any> => {
    await this.setState(state => ({
      byId: Object.assign(state.byId, { [id]: { ...state.byId[id], ...book } })
    })).then(this.persistToLocalStorage);
  };

  removeBook = (bookId: string) => {
    this.setState(state => ({
      allIds: state.allIds.filter(id => bookId !== id),
      byId: deleteProperty(bookId ,state.byId)
    })).then(this.persistToLocalStorage);
  };
}

export default BookContainer;
