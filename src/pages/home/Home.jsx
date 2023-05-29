import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer';
import { PopularDestinations } from '../../components/popularDestinations/PopularDestinations';
import "./home.css"


export const Home = () => {
  
  return (
    <> 
    <Navbar />
    <Header />
    <PopularDestinations/>
    <Footer/>
    </>
  )
}
