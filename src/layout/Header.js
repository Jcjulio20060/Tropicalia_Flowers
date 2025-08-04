// Importação do hook useState
import { useState } from 'react';

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
                    <Button className={styles.Search_Button} icon="Search"/>
                </div>
            </div>
            <nav>
                <ul className={styles.NavBar}>
                    <li><Button to="/" text="Início" customClass="link"/></li>
                    <li><Button to="/flowers" text="Flores" customClass="link"/></li>
                    <li><Button to="/about" text="Sobre-nós" customClass="link"/></li>
                </ul>
                <div className={styles.NavBar_Icons}>
                    <div className={styles.User}>
                        <Button icon="User"/>
                        {Logged !== 0 ? 
                            <ul className={styles.User_Dropdown}>
                                <li><Button to={`/user`} text="Minha Conta" customClass="link"/></li>
                                <li><Button to="/flowers" text="Configurações" customClass="link"/></li>
                                <li><Button to="/" text="Sair" customClass="link"/></li>
                            </ul>
                            :
                            <ul className={styles.User_Dropdown}>
                                <li><Button to="/Login" text="Entrar" customClass="link"/></li>
                                <li><Button to="/Register" text="Registrar" customClass="link"/></li>
                            </ul>
                        }
                    </div>
                    <Button to="/cart" icon="Cart"/>
                </div>
            </nav>
        </header>
    )
}

export default Header;