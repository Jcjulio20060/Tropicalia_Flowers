// Importação do useParams do react-router para pegar o ID
import { useParams } from 'react-router-dom';

// Importação do componente de Axios
import useAxios from '../../hooks/useAxios';

// Importação do Componente do Carrinho
import useCart from '../../hooks/useCart';

// Importação do Botão
import Button from '../../components/common/Button';

// Importação do estilo da página
import styles from './Flower.module.css';

function Flower({}) {
    const { id } = useParams();

    const { data: flowers, loading, error } = useAxios(`http://localhost:5000/flowers/${id}`, 'get', []);

     // Hook para a lógica do carrinho
    const { cart, cartLoading, cartError, addToCart } = useCart();

    if (loading) return <p>Carregando flores...</p>;
    if (error) return <p>Erro: {error.message}</p>;
    if (!flowers || flowers.length === 0) return <p>Nenhuma flor encontrada.</p>;

    return (
        <div className={styles.Flower_Info}>
            <img src={flowers.image} alt={flowers.name}/>
            <div className={styles.Flower_Details}>
                <h2>{flowers.name}</h2>
                <p><strong>Descrição:</strong> {flowers.description}</p>
                <p><strong>Categoria:</strong> {flowers.category}</p>
                <p><strong>Origem:</strong> {flowers.origin}</p>
                <p><strong>Cuidados:</strong> {flowers.careful}</p>
                <p><strong>Ambiente:</strong> {flowers.environment}</p>
                <p><strong>Tamanho:</strong> {flowers.size}</p>
                <div className={styles.Payment_Info}>
                    <p><strong>Valor:</strong> {flowers.price}</p>
                    <Button text="Adicionar ao Carrinho" onClick={() => addToCart(flowers.id)}/>
                </div>
            </div>
        </div>
    )
}

export default Flower;