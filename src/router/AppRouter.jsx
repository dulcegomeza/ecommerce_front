import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Login from '../pages/Login';
import Account from '../pages/Account';
import NotFound from '../pages/NotFound';
import { UserProvider } from '../context/UserProvider';
import Navbar from '../shared/Navbar';

function AppRouter() {
    return (
        <UserProvider>
            <Navbar />
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<Login />} />
                <Route path="/account" element={<Account />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </UserProvider>
    );
}

export default AppRouter;