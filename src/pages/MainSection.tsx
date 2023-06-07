import { useState, useEffect } from "react";
import { BASE_URL } from "../api";
import logo from "../../public/logo.jpg";
import { Book } from "../types";
import { BookList } from "../components/BookList";

const Main = () => {
  const [books, setBooks] = useState<Book[]>([]);
  // const [sortByname, setSortByName] = useState(false);
  //  título, autor, género y fecha de publicación

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
    <>
      <nav className="main-nav h-24 bg-white shadow-md animate-fadeInDown">
        <div className="main-nav__container container flex items-center justify-between h-full px-4">
          <a href="https://grupoaspasia.com/es/">
            <img src={logo} alt="Reeder app" className="h-20 cursor-pointer" />
          </a>
          <div className="account-options flex items-center gap-4">
            <a className="font-normal text-lg text-cyan cursor-pointer">
              Cerrar sesión
            </a>
          </div>
        </div>
      </nav>
      <main className="main-content container  mx-auto  py-16 animate-fade duration-2">
        <div className="activity-section w-full animate-fadeInUp flex flex-col items-center shadow-md p-8 rounded-lg bg-white">
          <h2 className="text-3xl font-bold text-cyan mb-6">
            Lecturas más populares
          </h2>
          <header className="flex gap-3 mb-4 text-sm">
            <button className="bg-teal p-3 rounded-lg text-white">
              Añadir nuevo libro
            </button>
            <button className="bg-cyan p-3 rounded-lg text-white">
              Mis favoritos
            </button>
          </header>
          {books.length > 0 ? (
            <BookList books={books} />
          ) : (
            <p>Cargando libros...</p>
          )}
        </div>
      </main>
    </>
  );
};

export default Main;
