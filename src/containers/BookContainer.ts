import { Container } from "unstated";
import uuidv1 from "uuid";
import { Book } from "../model/Book";

interface IBookState {
  byId: {
    [id: string]: Book;
  };
  allIds: string[];
}

const deleteProperty = ({ [key]: _, ...newObj }, key: string) => newObj;

class BookContainer extends Container<IBookState> {
  state = {
    byId: {},
    allIds: []
  };

  addBook = (book: Book) => {
    const id = book.id || uuidv1();

    this.setState(state => ({
      allIds: [...state.allIds, id],
      byId: Object.assign(state.byId, { [id]: { id: id, ...book } })
    }));
  };

  removeBook = (bookId: string) => {
    this.setState(state => ({
      allIds: state.allIds.filter(id => bookId !== id),
      byId: deleteProperty(state.byId, bookId)
    }));
  };
}

export default BookContainer;
