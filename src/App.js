import React from 'react';

import './App.scss';
import CarouselElastic from './components/layout/CarouselElastic'
// import { ClothSection } from './components/layout'
import { 
  ShoppingCart, Header, 
  Navbar, Footer, 
  SubscribeForm, 
  ClothListings, MaterialNav, 
  SimpleNav } from './components/layout'
import StyledTest from './components/layout/StyledTest';


const App = () => { 
  
  return (
    <> 
      {/* <StyledTest /> */}
      {/* <Navbar />   */}
      <SimpleNav />
      {/* <MaterialNav /> */}
      <Header /> 
      <ClothListings /> 
      <SubscribeForm /> 
      <Footer />

      {/* <ShoppingCart /> */}

      {/* <CarouselElastic /> */}
      
    </>
      );
    }
    
    export default App;
  