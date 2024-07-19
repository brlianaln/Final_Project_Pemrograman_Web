
import './App.css';
import { BrowserRouter as Router,  Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Shop,About,Home,Contact} from './pages';
import CartItem from './pages/Cart';
import ProductDetail from './components/ProductDetail';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import SignUp from './pages/SignUp'


function App() {
  return (
  <div className='App'>
   
  <Router>
  <Navbar/>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/ProductDetail/:id' element={<ProductDetail />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Cart" element={<CartItem/>} />
          <Route path='/Login' element={<Login/>}/>
          <Route path='/SingUp' element={<SignUp/>}/>

          </Routes>
    </Router>
   <Footer/>
    </div>
  );
}

export default App;
