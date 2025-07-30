import { BrowserRouter as Router } from 'react-router-dom';

import Header from './layout/Header';
import Container from './layout/Container';
import Footer from './layout/Footer';

import Routes from './routes';

function App() {
  return (
    <Router>
      <Header />
      <Container customClass="min-height">
        <Routes />
      </Container>
      <Footer />
    </Router>
  )
}

export default App;
