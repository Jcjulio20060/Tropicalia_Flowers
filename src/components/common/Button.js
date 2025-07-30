// Importação do componente de ícones
import Icons from './Icons';

// Importação do estilo do botão
import styles from './Button.module.css';

function Button({ text, typeIcon, onClick, customClass }) {
    const iconObj = Icons.find(icon => icon.name === typeIcon);
    const IconComponent = iconObj ? iconObj.icon : null;

    return (
        <button className={`${styles.btn} ${styles[customClass]}`} onClick={onClick}>
            {IconComponent && <IconComponent className={styles.Icon}/>}
            {text}
        </button>
    );
}

export default Button;