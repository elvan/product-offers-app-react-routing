import { useState } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';

// pages
import About from './pages/About';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';

function App() {
  const [cartIsEmpty] = useState(false);

  return (
    <div className='App'>
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/products'>Products</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about/*' element={<About />} />
          <Route path='/products/:id/*' element={<ProductDetails />} />
          <Route path='/products' element={<Products />} />
          <Route
            path='/test'
            element={
              <div>
                <h2>Test page</h2>
              </div>
            }
          />
          <Route path='/redirect' element={<Navigate to='/about' />} />
          <Route
            path='/checkout'
            element={
              cartIsEmpty ? <Navigate to='/products' /> : <p>checkout</p>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
