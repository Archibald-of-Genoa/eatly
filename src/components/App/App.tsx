import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "../../pages/Main";
import { Blog } from "../../components/Blog/Blog";
import Third from "../../pages/Third";


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/third" element={<Third />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}
