import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Flipkart/Header'
import ElectronicsApplication from './Flipkart/Electronics/ElectronicsApplication'
import Home from './Flipkart/Home'
import  BooksApplication from './Flipkart/SportsBooksAndMore/BooksApplication'
import KidsApplication from './Flipkart/Kids/KidsApplication'
import WomensApplication from './Flipkart/Women/WomensApplication'
import  MensApplication from './Flipkart/Men/MensApplication'
import TVsAppliances from './Flipkart/TVsAppliances/TVsAppliances'
import CartRedux from './Cart_redux/CartRedux'
import FooterFile from './Flipkart/FooterFile'
import Login from './Flipkart/Login'
//import PromotionWithHooks from './Promotion_redux/PromotionWithHooks'
//import Counter from './Counter'
//import Movies from './movies/Movies'
//import CartWithHooks from './CartWithHooks/CartWithHooks'
//import Hooks from './Promotion/Hooks';
//import Kart from './Kart'
//import Cart from './Cart'
//import Promotion from "./Promotion"
//import Child from "./Child";
//import Table from "./Table"
//import Counter from "./Counter"
import { BrowserRouter as Router,Link,Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
      <Header></Header>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/electronics" component={ElectronicsApplication}></Route>
        <Route exact path="/tvAppliance" component={TVsAppliances}></Route>
        <Route path="/men" component={MensApplication}></Route>
        <Route path="/women" component={WomensApplication}></Route>
        <Route path="/kids" component={KidsApplication}></Route>
        <Route path="/sportsBooksandMore" component={BooksApplication}></Route>
        <Route exact path="/cart" component={CartRedux}></Route> 
        <Route  path="/signup" component={Login}></Route> 
      </Router>
      
<FooterFile></FooterFile>
    </div>
  )
}


export default App;