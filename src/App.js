import React from 'react';

import './App.scss';
// import CarouselElastic from './components/layout/CarouselElastic'
// import { ClothSection } from './components/layout'
import { 
  ShoppingCart, Header, 
  Footer, 
  SubscribeForm, 
  SubscribeSuccess,
  ClothListings, 
  SimpleNav, Homepage } from './components/layout'

import { Route, Switch } from 'react-router-dom';



const App = () => { 
  
  return (
    <>   
      <SimpleNav />
      {/* <Homepage />  */}
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path="/shopping" component={ShoppingCart} />
      </Switch>

      <Footer />

      {/* <ShoppingCart /> */}      
    </>
      );
    }
    
    export default App;
  