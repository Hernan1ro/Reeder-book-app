import { ReactNode } from "react";
import { useState, createContext } from "react";
import { Book } from "../types";

interface Props {
  children: ReactNode;
}

interface FavoritesTypes {
  favBooks: Book[];
  setFavBooks: (books: Book[]) => void;
}

const FavoritesContext = createContext<FavoritesTypes>({
  favBooks: [],
  setFavBooks: () => {},
});

const FavoritesProvider = ({ children }: Props) => {
  const [favBooks, setFavBooks] = useState<Book[]>([]);
  return (
    <FavoritesContext.Provider
      value={{
        favBooks,
        setFavBooks,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesProvider, FavoritesContext };
