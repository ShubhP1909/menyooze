import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './Component/Main.js';
import Search from './Component/Search/Search';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
