import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePro from './pages/Category'
import Home from './pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Detail from './pages/Detail'
import CartPage from './pages/Cart'
import WishlistPage from './pages/WishlistPage'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Redirect when only /categories is visited */}
        <Route path="/categories" element={<Navigate to="/categories/smartphones" replace />} />

        
        <Route path="/categories/:id" element={<HomePro />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
      <Footer />


    </>
  )
}

export default App
