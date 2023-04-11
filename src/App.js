import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

// pages
import About from './pages/About';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/products'>Products</Link>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/products/:id'>
            <ProductDetails />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
