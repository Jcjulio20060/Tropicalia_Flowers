// useCart.js
// Importação do useState e useEffect
import { useState, useEffect } from 'react';

// Importação do Axios
import axios from 'axios';

// Importação do useAxios
import useAxios from './useAxios';

export function useCart() {
    const [cart, setCart] = useState([]);
    const [cartLoading, setCartLoading] = useState(false);
    const [cartError, setCartError] = useState(null);

    const loggedUserId = localStorage.getItem('Logged');
    
    // Requisição para carregar o carrinho do usuário
    const { data: userData, loading, error } = useAxios(
        loggedUserId ? `http://localhost:5000/users/${loggedUserId}` : null, 'get', [loggedUserId]
    );

    // Sincroniza o estado do carrinho com os dados do servidor
    useEffect(() => {
        if (userData && userData.cart) {
            setCart(userData.cart);
        }
    }, [userData]);

    const addToCart = async (flowerId) => {
        setCartLoading(true);
        setCartError(null);

        const newCart = [...cart];
        const existingItem = newCart.find(item => item.FlowerID === flowerId);

        if (existingItem) {
            existingItem.Quantity = Number(existingItem.Quantity) + 1;
        } else {
            const newItem = { FlowerID: flowerId, Quantity: 1 };
            newCart.push(newItem);
        }

        try {
            await axios.patch(`http://localhost:5000/users/${loggedUserId}`, { cart: newCart });
            setCart(newCart); // Atualiza o estado local após o sucesso da requisição
            setCartLoading(false);
            alert('Adicionado ao Carrinho!');
        } catch (err) {
            console.error('Erro ao atualizar o carrinho:', err);
            setCartError('Erro ao adicionar item ao carrinho.');
            setCartLoading(false);
        }
    };

    return {
        cart,
        cartLoading: loading || cartLoading, // Combina os loadings
        cartError: error || cartError,       // Combina os erros
        addToCart,
    };
}

export default useCart;