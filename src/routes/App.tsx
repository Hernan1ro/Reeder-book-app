import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from "../pages/Page404";
import Main from "../pages/MainSection";
import AddBook from "../pages/AddBook";
import BookDetail from "../pages/BookDetail";
import Favorites from "../pages/Favorites";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/bookdetail/:id" element={<BookDetail />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
