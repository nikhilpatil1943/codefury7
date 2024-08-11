import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import Login from "./components/Pages/Login";
import Dashboard from "./components/Pages/Dashboard";
import Testw from "./components/Pages/tt";
import AlertCard from "./components/alert";
import BlogCards from "./components/blogCard";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<div><Home /><AlertCard/><Testw/><BlogCards/></div>} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<BlogCards />} />
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard/>}></Route>
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;