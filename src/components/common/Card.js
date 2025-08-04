// Importação do useState e useEffect
import { useState, useEffect } from 'react';

// Importação do useAxios
import useAxios from '../../hooks/useAxios';

// Importação dos componentes
import Button from './Button';
import styles from './Card.module.css';

function Card({ data, onAddToCart }) {
    return (
        <div className={styles.Card_Container}>
            <img src={data.image} alt="Imagem da flor"/>
            <h2>{data.name}</h2>
            <p>Preço R$ {data.price}</p>
            <div className={styles.Card_Buttons}>
                <Button text="Adicionar ao Carrinho" onClick={() => onAddToCart(data.id)}/>
                <Button to={`/flower/${data.id}`} text="Mais Informações" />
            </div>
        </div>
    )
}

export default Card;