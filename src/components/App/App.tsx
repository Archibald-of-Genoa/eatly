import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "../../pages/Main";
import { Blog } from "../../components/Blog/Blog";
import { Faq } from "../Faq";
import OneArticle from "../OneArticle/OneArticle";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article/:id" element={<OneArticle />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}
