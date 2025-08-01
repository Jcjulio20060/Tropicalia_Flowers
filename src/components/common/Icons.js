import { FaSearch, FaUser, FaShoppingCart, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const icons = [
    {
        name: "User",
        icon: FaUser
    },
    {
        name: "Search",
        icon: FaSearch
    },
    {
        name: "Cart",
        icon: FaShoppingCart
    },
    {
        name: "Facebook",
        icon: FaFacebook
    },
    {
        name: "Instagram",
        icon: FaInstagram
    },
    {
        name: "Whatsapp",
        icon: FaWhatsapp
    },
];

// Exemplo de uso:
// icons.map(({ icon: Icon }) => <Icon />)

export default icons;