import { useEffect, useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import Categories from './components/Categories'
import Marketplace from './components/Marketplace'
import { useMarketContext } from './contexts/Market'


function App() {
  const {selectedOption, setSelectedOption} = useMarketContext();

  const CATEGORIES = [
    "Announcement",
    'Educate & Inform',
    'Invitation',
    "Occassions"
  ]

  return (
    <>
      <div className="w-screen">
      <HeroSection />
      <Marketplace />
      </div>
    </>
  )
}

export default App
