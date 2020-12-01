import React from 'react';

import './App.scss';
// import CarouselElastic from './components/layout/CarouselElastic'
// import { ClothSection } from './components/layout'
import { 
  ShoppingCart, 
  // Header, 
  Footer, 
  // SubscribeForm, 
  // SubscribeSuccess,
  // ClothListings, 
  OrderCompleted,
  SimpleNav, Homepage } from './components/layout'
import CreateOrder from './components/layout/CreateOrder'
import { Route, Switch } from 'react-router-dom';
import PaymentPage from './components/layout/PaymentPage';



const App = () => { 
  
  return (
    <>   
      {/* <Homepage />  */}
      <SimpleNav />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path="/shopping" component={ShoppingCart} />
          <Route path="/confirm" component={CreateOrder}/>
          <Route path="/order-complete" component={OrderCompleted} />
          <Route path="/payment" component={PaymentPage} />
        </Switch>
        <Footer />

      {/* Returning to complete the UI for ORDER FORM  */}

      {/* <CreateOrder /> */}

      {/* <ShoppingCart /> */}      
    </>
      );
    }
    
    export default App;
  