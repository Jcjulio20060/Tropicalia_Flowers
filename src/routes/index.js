// Importação do componente Routes
import { Routes, Route } from 'react-router-dom'

// Importação de componentes de página

// Páginas da Empresa
import Home from '../features/Home';
import Flowers from '../features/Flowers';
import Flower from '../features/Flowers/Flower';
import About from '../features/About';
import Contact from '../features/Contact';

// Páginas do Usuário
import Login from '../features/Login';
import Register from '../features/Register';
import User from '../features/User';
import Cart from '../features/Cart';

function AppRoutes() {
    return (
        <Routes>
            {/* Rotas */}
            {/* Rotas da Empresa */}
            <Route path="/" element={<Home />} />
            <Route path="/flowers" element={<Flowers />} />
            <Route path="/flower/:id" element={<Flower />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/politic" element={<Contact />} />
            <Route path="/terms" element={<Contact />} />
            {/* Rotas do Usuário */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user" element={<User />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}

export default AppRoutes;