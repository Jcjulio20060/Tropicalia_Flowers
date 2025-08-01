// Importação do componente de Formulário
import Form from '../../components/Form';

// Importação do estilo da página
import styles from './Register.module.css';

function Login() {
    return (
        <div className={styles.Container}>
            <div className={styles.Register_Container}>
                <img src="/assets/Logo.png" alt="Logo Tropicália Flowers"/>
                <h2>Cadastro</h2>
                <Form type="Cadastro" txtBtn="Cadastrar"/>
            </div>
        </div>
    )
}

export default Login;