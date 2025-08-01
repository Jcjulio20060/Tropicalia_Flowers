// Importação do useParams
import { useParams } from 'react-router-dom';

// Importação do formulário
import Form from '../../components/Form';

// Importação do hook useAxios
import useAxios from '../../hooks/useAxios';

// Importação do estilo da página
import styles from './User.module.css';

function User() {
    const { id } = useParams;

    const { data: users, loading, error } = useAxios(`http://localhost:5000/users/1`, 'get', []);

    if (loading) return <p>Carregando flores...</p>;
    if (error) return <p>Erro: {error.message}</p>;
    if (!users || users.length === 0) return <p>Nenhum usuário encontrada.</p>;

    return (
        <div className={styles.User_Container}>
            <h1>Configurações do Usuário</h1>
            <div className={styles.User_Context}>
                <Form type="UserProfile" txtBtn="Salvar Alterações" data={users}/>
            </div>
        </div>
    )
}

export default User;