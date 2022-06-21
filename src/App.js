
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/home/home';
import About from './components/about/about';
import Header from './components/header/header';
import Contact from './components/contact/contact';
import Products from './components/products/products';
import ProductDetails from './components/products/productDetails';
function App() {
  return (
    
    <>
    <div className="container">

    <Router>
    <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/products" exact component={Products} />
        <Route path="/details/:id" component={ProductDetails}/>
      </Switch>
    </Router>


    </div>
 
  </>
       
  );
}

export default App;
