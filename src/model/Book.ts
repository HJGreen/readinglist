export type Book = {
  id?: string;
  title: string;
  author: string;
  dateRead?: string;
};

export type BookUpdate = Partial<Book>;
