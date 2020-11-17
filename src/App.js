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
import CreateOrder from './components/layout/CreateOrder'


import { Route, Switch } from 'react-router-dom';



const App = () => { 
  
  return (
    <>   
      {/* <Homepage />  */}
      {/* <SimpleNav />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path="/shopping" component={ShoppingCart} />
      </Switch>
      <Footer /> */}
      <CreateOrder />

      {/* <ShoppingCart /> */}      
    </>
      );
    }
    
    export default App;
  