import React from 'react';

import './App.css';
import Navbar from './components/layout/Navbar'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import SubscribeForm from './components/layout/SubscribeForm'
import { ClothSection } from './components/layout'


function App() { 
  return (
      <>   
        <Navbar />  
        <Header /> 
        <ClothSection />
        <SubscribeForm /> 
        <Footer />
        {/* <CarouselItem /> */}
      </>
      );
    }
    
    export default App;
    