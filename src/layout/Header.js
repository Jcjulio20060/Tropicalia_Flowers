// Importação do LinkButton
import LinkButton from '../components/LinkButton';

// Importação do Componente Botão
import Button from '../components/common/Button';

// Importação dos estilos do header
import styles from './Header.module.css';

function Header() {
    return (
        <header>
            <div className={styles.Header_Container}>
                <img src="/assets/Logo.png" alt="Logo Troícália Flowers"/>
                <h1>Tropicália Flowers</h1>
            </div>
            <div className={styles.Search_Container}>
                <div className={styles.Search_Input}>
                    <input placeholder="Pesquisar Flores..." type="text"></input>
                    <Button className={styles.Search_Button} typeIcon="Search"/>
                </div>
            </div>
            <nav>
                <ul className={styles.NavBar}>
                    <li><LinkButton to="/" text="Início"/></li>
                    <li><LinkButton to="/flowers" text="Flores"/></li>
                    <li><LinkButton to="/about" text="Sobre-nós"/></li>
                </ul>
                <div className={styles.NavBar_Icons}>
                    <Button typeIcon="User"/>
                    <LinkButton to="/cart" typeIcon="Cart"/>
                </div>
            </nav>
        </header>
    )
}

export default Header;