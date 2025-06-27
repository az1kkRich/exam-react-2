import React from 'react'
import HeroSection from '../components/home/HeroSection'
import ProductGrid from '../components/home/HeaderProductGrid'
import CategorySlider from '../components/home/CategorySlider'
import ProductTabs from '../components/home/products/ProductTabs'
import ProductShowcase from '../components/home/Showcase'

const Home = () => {
  return (
    <>
        <HeroSection />
        <ProductGrid />
        <CategorySlider />
        <ProductTabs />
        <ProductShowcase />
    </>
  )
}

export default Home
