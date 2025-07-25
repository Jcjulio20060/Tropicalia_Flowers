import { BrowserRouter as Router } from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';

import Routes from './routes';

function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  )
}

export default App;
