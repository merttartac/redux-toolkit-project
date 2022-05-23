import Counter from "./features/counter/Counter";
//Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./features/header/Header";
import NotFound from './features/not-found/NotFound';
import { GlobalStyle } from "./GlobalStyle";
import PostsPage from './pages/posts-page/index';

function App() {
  return (
    <main>
      <Router>

        <Header />

        <Routes>
          <Route path='/' element={<Counter />} />
          <Route path='/posts' element={<PostsPage />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>

        <GlobalStyle />
      </Router>

    </main>
  );
}

export default App;
