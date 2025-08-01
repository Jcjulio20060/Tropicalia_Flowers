// Importação do Botão
import Button from './Button';

// Importação do estilo do botão
import styles from './Card.module.css';

function Card({ data }){
    return (
        <div className={styles.Card_Container}>
            <img src={data.image} alt="Imagem da flor"/>
            <h2>{data.name}</h2>
            <p>Preço R$ {data.price}</p>
            <div className={styles.Card_Buttons}>
                <Button text="Adicionar ao Carrinho" />
                <Button to={`/flower/${data.id}`} text="Mais Informações" />
            </div>
        </div>
    )
}

export default Card;