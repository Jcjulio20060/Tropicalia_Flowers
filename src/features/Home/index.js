// Importação do useAxios
import useAxios from '../../hooks/useAxios';

// Importação do Componente Card
import Card from '../../components/common/Card';

// Importação dos estilos da página
import styles from './Home.module.css';

function Home() {
    const { data: flowers, loading, error } = useAxios('http://localhost:5000/flowers', 'get', []);

    if (loading) return <p>Carregando flores...</p>;
    if (error) return <p>Erro: {error.message}</p>;
    if (!flowers || flowers.length === 0) return <p>Nenhuma flor encontrada.</p>;

    const Orquídeas = flowers.filter(flower => flower.category === "Orquídea");
    const NormalFlowers = flowers.filter(flower => flower.category !== "Orquídea");

    return (
        <div className={styles.Home_Container}>
            <img src="assets/Banner-home.jpeg" alt="Banner de Promoção"/>
            <h1>Flores em Destaque</h1>
            <div className={styles.Home_Cards}>
                {NormalFlowers.map((data) => (
                    <Card data={data}/>
                ))}
            </div>
            <h1>Promoções de Orquídeas</h1>
            <div className={styles.Home_Cards}>
                {Orquídeas.map(flower => <Card data={flower}/>)}
            </div>
        </div>
    )
}

export default Home;