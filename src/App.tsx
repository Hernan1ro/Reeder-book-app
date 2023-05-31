import { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL } from "./api";

function App() {
  const [books, setBooks] = useState([]);

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

  console.log(books);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
