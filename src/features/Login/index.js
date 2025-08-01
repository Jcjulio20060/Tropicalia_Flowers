// Importação do useState
import { useState } from 'react';

// Importação do Navigate
import { useNavigate } from 'react-router-dom';

// Importação do componente de Formulário
import Form from '../../components/Form';

// Importação do Axios
import axios from 'axios'; // Importe o axios aqui

// Importação do estilo da página
import styles from './Login.module.css';

function Login() {
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');

    // A requisição GET não deve ser feita aqui.
    // Em vez disso, ela será feita dentro do handleLogin.

    // Esta função será chamada quando o formulário for submetido
    const handleLogin = async (formData) => {
        setLoginError('');
        try {
            // A requisição é feita AQUI, dentro da função,
            // garantindo que ela só seja executada no clique do botão.
            const response = await axios.get(`http://localhost:5000/users?cpf=${formData.cpf}`);
            
            const user = response.data[0];

            console.log(user)

            if (user && user.password === formData.password) {
                alert('Login bem-sucedido!');
                localStorage.setItem("Logged", user.id);
                navigate('/');
            } else {
                setLoginError('CPF ou senha incorretos.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setLoginError('Ocorreu um erro no servidor. Tente novamente mais tarde.');
        }
    };

    return (
        <div className={styles.Container}>
            <div className={styles.Login_Container}>
                <img src="/assets/Logo.png" alt="Logo Tropicália Flowers"/>
                <h2>Login</h2>
                {loginError && <p className={styles.error}>{loginError}</p>}
                <Form type="Login" txtBtn="Entrar" onSubmit={handleLogin}/>
            </div>
        </div>
    )
}

export default Login;