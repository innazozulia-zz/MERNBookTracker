import React from "react";
import { BooksContext } from "../context/BookContext";

export const useBooksContext = () => {
  const context = React.useContext(BooksContext);

  if (!context) {
    throw Error("Must be inside an BooksContextProvider");
  }

  return context;
};
