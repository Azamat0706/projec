// import logo from './logo.svg';
import "./App.css";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import About from "./component/about/About"
import Contact from "./component/contact/Contact"
import Blog from "./component/blog/Blog"
import Login from "./component/login/Login"
import { Routes, Route } from "react-router-dom";
// import Counter from './component/counter/Counter';
// import Users from './component/user/user';
function App() {
  return (
    <div className="App">
      {/* /* <Users />
      <Counter/> */}

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
