import { useEffect, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Footer from '../shared/Footer';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

function AppRouter() {
    const { user, verifyingToken } = useContext(UserContext);

    /* Para mantenener una sesión activa apesar de refrescar la página */
    useEffect(() => {
        verifyingToken();
    }, [verifyingToken]);

    return (
        <Router>
            {
                user.uid ? (<PrivateRoute />) : (<PublicRoute />)
            }
                  <Footer />
        </Router>
    );
}

export default AppRouter;