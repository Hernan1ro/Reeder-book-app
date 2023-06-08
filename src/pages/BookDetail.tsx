import { useState, useEffect } from "react";
import Layout from "../layout";
import { useParams } from "react-router-dom";
import { Book } from "../types";
import { BASE_URL } from "../api";
import useFavs from "../hooks/useFavs";

const BookDetail = () => {
  const [book, setBook] = useState<Book>();
  const { id } = useParams();
  const { setFavBooks, favBooks } = useFavs();
  const [isAdded, setIsAdded] = useState(false);

  const {
    name,
    authors,
    country,
    isbn,
    mediaType,
    numberOfPages,
    publisher,
    released,
  } = book || {};

  //-------------------- getting all books data ------------------ //
  useEffect(() => {
    fetch(BASE_URL + `/books/${id}`)
      .then(async (res) => await res.json())
      .then((res) => {
        setBook(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //------------------ verifys wheter the books is in the favorite list or not ---------------- //

  useEffect(() => {
    if (book && !favBooks.some((favBook) => favBook.url === book.url)) {
      setIsAdded(false);
    } else {
      setIsAdded(true);
    }
  }, [book]);

  const addFavorite = (book: Book | undefined) => {
    if (book && !favBooks.some((favBook) => favBook.url === book.url)) {
      setFavBooks([...favBooks, book]);
      setIsAdded(true);
    } else {
      console.log("Libro agregado");
    }
  };
  return (
    <Layout page_title={book?.name}>
      <div className="activity-section w-full animate-fadeInUp flex flex-col items-center shadow-md p-8 rounded-lg bg-white">
        <h2 className="text-3xl text-cyan text-center font-bold mb-6">
          {name}
        </h2>
        <div className="sm:grid w-full grid-cols-2 max-w-4xl gap-2 place-items-center flex flex-col-reverse">
          <div className="grid gap-2 text-2xl">
            <span>
              <strong>Autor:</strong> {authors}
            </span>
            <span>
              <strong>País:</strong> {country}
            </span>
            <span>
              <strong>ISBN:</strong> {isbn}
            </span>
            <span>
              <strong>Tipo:</strong> {mediaType}
            </span>
            <span>
              <strong>Número de páginas</strong>: {numberOfPages}
            </span>
            <span>
              <strong>Editor</strong> {publisher}
            </span>
            <span>
              <strong>Fecha de publicación:</strong>{" "}
              {released?.toLocaleString()}
            </span>
            <button
              onClick={() => addFavorite(book)}
              className={`p-2 mt-2 bg-${
                !isAdded ? "pink-500" : "cyan"
              } hover:bg-${
                !isAdded ? "pink-400" : "cyan-300"
              } text-white font-bold rounded-md`}
            >
              {!isAdded ? "Añadir a favoritos" : "Añadido a favoritos"}
            </button>
          </div>
          <img src="/public/fav_book.svg" alt="Añadir nuevo libro" />
        </div>
      </div>
    </Layout>
  );
};

export default BookDetail;
