import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import About from './pages/About';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/home" element={<HomePage />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path='/projects' element={<Projects/>}></Route>
          <Route exact path='/blog' element={<Blog/>}></Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
