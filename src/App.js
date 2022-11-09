
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import Footer from './shared/Footer';

function App() {

 
  return (
    <BrowserRouter>
      <>

        <AppRouter />

        <Footer />
      </>

    </BrowserRouter>

  );
}

export default App;
