import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from "../pages/Page404";
import Main from "../pages/MainSection";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
