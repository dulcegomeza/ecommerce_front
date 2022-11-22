import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products/Products';
import Login from '../pages/Auth/Login';
import Account from '../pages/Auth/Account';
import NotFound from '../pages/NotFound';
import Navbar from '../shared/Navbar';
import Product from '../pages/Products/Product';

export const PublicRoute = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )

}
