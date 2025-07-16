import './styles/globals.css';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/menu' exact Component={Menu} />
            <Route path='/about' exact Component={About} />
            <Route path='/contact' exact Component={Contact} />
            <Route path='/cart' exact Component={Cart} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
