// Importação dos Botões
import Button from '../../components/common/Button';

// Importação dos estilos da página
import styles from './About.module.css';

function Home() {
    return (
        <div className={styles.About_Container}>
            <div className={styles.About_Info}>
                <h1>Sobre a Tropicalia Flores</h1>
                <p>A <strong>Tropicalia Flores</strong> nasceu da paixão pelas plantas e pela natureza. Nosso objetivo é levar mais cor, vida e alegria para sua casa, escritório ou evento, oferecendo uma grande variedade de flores tropicais e orquídeas selecionadas com carinho.</p>
                <p>Trabalhamos com espécies de alta qualidade, sempre priorizando o frescor e a sustentabilidade. Nossa equipe está pronta para ajudar você a escolher a planta ideal, seja para presentear alguém especial ou para decorar ambientes.</p>
                <p>Além da venda de flores, oferecemos dicas de cuidados, montagem de arranjos e entregas rápidas em toda a região.</p>
                <p>Para saber mais sobre nossos produtos, navegue pelo site ou entre em contato conosco. Será um prazer atender você!</p>
                <p>Siga-nos nas redes sociais e fique por dentro das novidades:</p>
            </div>
            <div className={styles.About_Links}>
                <Button text="Instagram" typeIcon="Instagram" customClass="text"/>
                <Button text="Facebook" typeIcon="Facebook" customClass="text"/>
            </div>
        </div>
    )
}

export default Home;