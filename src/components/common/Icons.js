import { FaSearch, FaUser, FaShoppingCart, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const icons = [
    {
        id: 1,
        name: "User",
        icon: FaUser
    },
    {
        id: 2,
        name: "Search",
        icon: FaSearch
    },
    {
        id: 3,
        name: "Cart",
        icon: FaShoppingCart
    },
    {
        id: 4,
        name: "Facebook",
        icon: FaFacebook
    },
    {
        id: 5,
        name: "Instagram",
        icon: FaInstagram
    },
    {
        id: 6,
        name: "Whatsapp",
        icon: FaWhatsapp
    },
];

// Exemplo de uso:
// icons.map(({ icon: Icon }) => <Icon />)

export default icons;