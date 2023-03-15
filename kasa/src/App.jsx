import './styles/sass/main.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Housing';
import NoMatch from './pages/NoMatch';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/logement/:id" element={<Logement/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
