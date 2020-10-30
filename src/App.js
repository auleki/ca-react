import React from 'react';

import './App.scss';
import CarouselElastic from './components/layout/CarouselElastic'
// import { ClothSection } from './components/layout'
import { Header, Navbar, Footer, SubscribeForm, ClothListings } from './components/layout'
import StyledTest from './components/layout/StyledTest';


const App = () => { 
  
  return (
    <> 
      {/* <StyledTest /> */}
      <Navbar />  
      <Header /> 
      <ClothListings /> 
      <SubscribeForm /> 
      <Footer />
      {/* <CarouselElastic /> */}
      
    </>
      );
    }
    
    export default App;
  