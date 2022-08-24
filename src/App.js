import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Main from './Component/Main.js';
  
function App() {
  return (
   <Router>
    <Routes>
    <Route path="/" element={<Main />} />
    </Routes>
   </Router>
  );
}

export default App;
