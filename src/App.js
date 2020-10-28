import React from 'react';

import './App.scss';
// import Navbar from './components/layout/Navbar'
// import Header from './components/layout/Header'
// import Footer from './components/layout/Footer'
import CarouselElastic from './components/layout/CarouselElastic'
// import { ClothSection } from './components/layout'
import { Header, Navbar, Footer, SubscribeForm, ClothListings } from './components/layout'


const App = () => { 

  // <CarouselElastic />
  {/* <CarouselItem /> */}
  return (
    <>   
      <Navbar />  
      <Header /> 
      <ClothListings />
      <SubscribeForm /> 
      <Footer />
      </>
      );
    }
    
    export default App;
    