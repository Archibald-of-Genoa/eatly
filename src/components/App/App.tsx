import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "../../pages/Main";
import { Blog } from "../../components/Blog/Blog";
import { Faq } from "../Faq";


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about"/>
        <Route path="/faq" element={<Faq />}/>
        <Route path="/contact"/>
      </Routes>
    </BrowserRouter>
  );
}
 