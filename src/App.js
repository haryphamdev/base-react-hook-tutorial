
import './App.css';
import Nav from './Navigation/Nav';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import About from './Navigation/About';
import Contact from "./Navigation/Contact";
import News from "./Navigation/News"
function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<div>index component</div>} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="news" element={<News />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
