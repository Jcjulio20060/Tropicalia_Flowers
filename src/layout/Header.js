// Importação do hook useState
import { useState } from 'react';

// Importação do LinkButton
import LinkButton from '../components/LinkButton';

// Importação do Componente Botão
import Button from '../components/common/Button';

// Importação dos estilos do header
import styles from './Header.module.css';

function Header() {
    const Logged = localStorage.getItem('Logged');

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
                    <div className={styles.User}>
                        <Button typeIcon="User"/>
                        {Logged ? 
                            <ul className={styles.User_Dropdown}>
                                <li><LinkButton to={`/user/${Logged}`} text="Minha Conta"/></li>
                                <li><LinkButton to="/flowers" text="Configurações"/></li>
                                <li><LinkButton to="/" text="Sair"/></li>
                            </ul>
                            :
                            <ul className={styles.User_Dropdown}>
                                <li><LinkButton to="/Login" text="Entrar"/></li>
                                <li><LinkButton to="/Register" text="Registrar"/></li>
                            </ul>
                        }
                    </div>
                    <LinkButton to="/cart" typeIcon="Cart"/>
                </div>
            </nav>
        </header>
    )
}

export default Header;