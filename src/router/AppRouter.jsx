import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Login from '../pages/Login';
import Account from '../pages/Account';
import NotFound from '../pages/NotFound';
import { UserProvider } from '../context/UserProvider';
import Navbar from '../shared/Navbar';
import Profile from '../pages/Profile';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function AppRouter() {
    return (
        <UserProvider>
            <PayPalScriptProvider options={{ "client-id": "AemE31m31cXaJSLZOKUI66oMaUAIOxNsrOodbaihysPrkRKNryRDvvvaMD2zMFp71ed7tZE-UYO_srHG" }}>
                <Navbar />
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/login" element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    } />
                    <Route path="/account" element={
                        <PublicRoute>
                            <Account />
                        </PublicRoute>
                    }
                    />

                    <Route path="/profile" element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    } />
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </PayPalScriptProvider>
        </UserProvider>
    );
}

export default AppRouter;