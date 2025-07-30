// Importação do React-Router
import { Link } from 'react-router-dom';

// Importação dos ícones
import Icons from './common/Icons';

// Importação do Estilo do Botão
import styles from './LinkButton.module.css';

function LinkButton({ to, text, typeIcon }) {
    const iconObj = Icons.find(icon => icon.name === typeIcon);
    const IconComponent = iconObj ? iconObj.icon : null;

    return (
        <Link to={to} className={styles.btn}>
            {IconComponent && <IconComponent className={styles.Icon}/>}
            {text}
        </Link>
    )
}

export default LinkButton;