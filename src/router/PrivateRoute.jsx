import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products/Products';
import Product from '../pages/Products/Product';
import Profile from '../pages/Profile/Profile';
import NotFound from '../pages/NotFound';
import NavbarPrivate from '../shared/NavbarPrivate';
import Cart from '../pages/Cart/Cart';

export const PrivateRoute = () => {

  return (
    <>
      <NavbarPrivate />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )

}
