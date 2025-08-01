// Importação do componente de Formulário
import Form from '../../components/Form';

// Importação do estilo da página
import styles from './Login.module.css';

function Login() {
    return (
        <div className={styles.Container}>
            <div className={styles.Login_Container}>
                <img src="/assets/Logo.png" alt="Logo Tropicália Flowers"/>
                <h2>Login</h2>
                <Form type="Login" txtBtn="Entrar"/>
            </div>
        </div>
    )
}

export default Login;