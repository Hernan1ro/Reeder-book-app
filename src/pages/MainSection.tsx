import { useState, useEffect } from "react";
import { BASE_URL } from "../api";
import { Book } from "../types";
import { BookList } from "../components/BookList";
import Layout from "../layout";
import { Link } from "react-router-dom";

const Main = () => {
  const [books, setBooks] = useState<Book[]>([]);

  //-------------------- getting all books data ------------------ //
  useEffect(() => {
    fetch(BASE_URL + "/books/")
      .then(async (res) => await res.json())
      .then((res) => {
        setBooks(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout page_title={"Lecturas populares"}>
      <div className="activity-section w-full animate-fadeInUp flex flex-col items-center shadow-md p-8 rounded-lg bg-white">
        <h2 className="text-3xl font-bold text-cyan mb-6">
          Lecturas más populares
        </h2>
        <header className="flex gap-3 mb-4 text-sm">
          <Link
            to="/addbook"
            className="bg-teal p-3 rounded-lg text-white cursor-pointer"
          >
            Añadir nuevo libro
          </Link>
          <Link
            to="/favorites"
            className="bg-cyan p-3 rounded-lg text-white cursor-pointer"
          >
            Mis favoritos
          </Link>
        </header>
        {books.length > 0 ? (
          <BookList books={books} />
        ) : (
          <p>Cargando libros...</p>
        )}
      </div>
    </Layout>
  );
};

export default Main;
