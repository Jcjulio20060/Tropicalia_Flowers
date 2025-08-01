// Importação do componente de ícones
import Icons from './Icons';

// Importação do React-Router
import { Link } from 'react-router-dom';

// Importação do estilo do botão
import styles from './Button.module.css';

function Button({ text, icon, onClick, customClass, to }) {
    // Busca o objeto do ícone (corrigindo a busca para usar o `name` do ícone)
    const iconObj = Icons.find(item => item.name === icon);
    const IconComponent = iconObj ? iconObj.icon : null;

    // Lógica para decidir se renderiza um <Link> ou um <button>
    // Se a prop `to` existir, ele renderiza um Link
    return (
        <>
            {to ? (
                <Link to={to} className={`${styles.btn} ${styles[customClass]}`}>
                    {IconComponent && <IconComponent className={styles.Icon}/>}
                    {text}
                </Link>
            ) : (
                <button className={`${styles.btn} ${styles[customClass]}`} onClick={onClick}>
                    {IconComponent && <IconComponent className={styles.Icon}/>}
                    {text}
                </button>
            )}
        </>
    );
}

export default Button;