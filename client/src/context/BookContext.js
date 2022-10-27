import React from "react";

export const BooksContext = React.createContext();

export const booksReducer = (state, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        books: action.payload,
      };
    case "CREATE_BOOK":
      return {
        books: [action.payload, ...state.books],
      };
    // return {
    //   books: [action.payload, ...state.books],
    // };
    case "DELETE_BOOK":
      return {
        books: state.books.filter((book) => book._id !== action.payload._id),
        // books: [action.payload, ...state.books],
      };
    default:
      return state;
  }
};

export const BookContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(booksReducer, {
    books: null,
  });
  return (
    <BooksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BooksContext.Provider>
  );
};
