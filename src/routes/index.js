// Importação do componente Routes
import { Routes, Route } from 'react-router-dom'

// Importação de componentes de página

// Páginas da Empresa
import Home from '../features/Home';
import Flowers from '../features/Home';
import Flower from '../features/Home';
import About from '../features/Home';
import Contact from '../features/Home';

// Páginas do Usuário
import Login from '../features/Home';
import Register from '../features/Home';
import User from '../features/Home';
import Cart from '../features/Home';

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
            {/* Rotas do Usuário */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}

export default AppRoutes;