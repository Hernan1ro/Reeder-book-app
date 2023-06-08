import { useContext } from "react";
import { FavoritesContext } from "../context/booksProvider";

const useFavs = () => {
  return useContext(FavoritesContext);
};

export default useFavs;
