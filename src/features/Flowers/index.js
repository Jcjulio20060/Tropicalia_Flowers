// Importação do useState
import { useState, useEffect } from 'react';

// Importação do Hook useAxios
import useAxios from '../../hooks/useAxios';

// Importação do componente Card
import Card from '../../components/common/Card';

// Importação do estilo da página
import styles from './Flowers.module.css';

function Flowers() {
    const { data: flowers, loading, error } = useAxios('http://localhost:5000/flowers', 'get', []);

    // Estado para armazenar as categorias únicas
    const [categories, setCategories] = useState([]);

    // UseEffect para atualizar as categorias sempre que as flores forem carregadas
    useEffect(() => {
        if (flowers && flowers.length > 0) {
            const uniqueCategories = Array.from(new Set(flowers.map(flower => flower.category)));
        setCategories(uniqueCategories);
    }
    }, [flowers]); // O useEffect será executado novamente sempre que a variável `flowers` mudar

    if (loading) return <p>Carregando flores...</p>;
    if (error) return <p>Erro: {error.message}</p>;
    if (!flowers || flowers.length === 0) return <p>Nenhuma flor encontrada.</p>;
    return (
        <div className={styles.Flowers_Container}>
            {/* Itera sobre o array de categorias */}
            <h1>Flores por categoria</h1>
            {categories.map(category => (
            // Para cada categoria, renderiza um bloco
            <div key={category} className={styles.Flowers_Categories}>
                <h2 className={styles.Flowers_Title}>{category}</h2> {/* Título da categoria */}
                
                {/*
                Filtra as flores, mantendo apenas aquelas que
                pertencem à categoria atual.
                */}
                <div className={styles.Flowers_subCategories}>
                    {flowers
                    .filter(flower => flower.category === category)
                    .map(filteredFlower => (
                        <Card data={filteredFlower}/>
                    ))}
                </div>
            </div>
            ))}
        </div>
    )
}

export default Flowers;