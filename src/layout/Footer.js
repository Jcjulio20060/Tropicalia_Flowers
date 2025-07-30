// Importação do LinkButton
import LinkButton from '../components/LinkButton';

// Importação do Componente Botão
import Button from '../components/common/Button';

// Importação dos estilos do header
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer>
            <section className={styles.Footer_Container}>
                <div className={styles.Footer_Header}>
                    <img src="/assets/Logo.png" alt="Logo Tropicália"/>
                    <div className={styles.Social_Icons}>
                        <Button typeIcon="Facebook"/>
                        <Button typeIcon="Instagram"/>
                        <Button typeIcon="Whatsapp"/>
                    </div>
                </div>
                <div className={styles.Footer_Info}>
                    <strong>Tropicália Flowers</strong>
                    <p>Rua das Flores, 123 - Centro, Cidade Exemplo - SP</p>
                    <p>CNPJ: 12.345.678/0001-99</p>
                    <p>Telefone: (11) 99999-8888 | Email: contato@tropicalia.com.br</p>
                    <p>Horário de atendimento: Seg a Sex, 8h às 18h</p>
                </div>
            </section>
            <div className={styles.Footer_Links}>
                <LinkButton to="/about" text="Sobre"/>
                <LinkButton to="/politic" text="Política de Privacidade"/>
                <LinkButton to="/terms" text="Termos de Uso"/>
            </div>
            <p>© 2025 Tropicalia Flores. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer;