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
      <SimpleNav />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path="/shopping" component={ShoppingCart} />
          <Route path="/confirm" component={CreateOrder}/>
        </Switch>
        <Footer />

      {/* Returning to complete the UI for ORDER FORM  */}

      {/* <CreateOrder /> */}

      {/* <ShoppingCart /> */}      
    </>
      );
    }
    
    export default App;
  