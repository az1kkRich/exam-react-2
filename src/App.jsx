import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/home/HeroSection'
import ProductGrid from './components/home/HeaderProductGrid'
import CategorySlider from './components/home/CategorySlider'
import ProductTabs from './components/home/products/ProductTabs'
import ProductShowcase from './components/home/ProductShowcase'
import Footer from './components/Footer'
import HomePro from './components/products/HomeProduct'

const App = () => {
  return (
    <>
      
        <Navbar />
        {/* <HeroSection />
        <ProductGrid />
        <CategorySlider />
        <ProductTabs />
        <ProductShowcase /> */}
        <HomePro />
        <Footer />
        

    </>
  )
}

export default App
