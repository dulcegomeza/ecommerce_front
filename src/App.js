import AppRouter from './router/AppRouter';
import { UserProvider } from './context/UserProvider';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ProductProvider from './context/ProductProvider';
import 'animate.css';



function App() {


  return (
    <>
      <UserProvider>
      <PayPalScriptProvider options={{ "client-id": "AemE31m31cXaJSLZOKUI66oMaUAIOxNsrOodbaihysPrkRKNryRDvvvaMD2zMFp71ed7tZE-UYO_srHG" }}>
       <ProductProvider>
        <AppRouter />
      
        </ProductProvider>
  
        </PayPalScriptProvider>
      </UserProvider>
    </>
  );
}

export default App;
