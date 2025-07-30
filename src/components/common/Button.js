// Importação do componente de ícones
import Icons from './Icons';

// Importação do estilo do botão
import styles from './Button.module.css';

function Button({ text, typeIcon, onClick }) {
    const iconObj = Icons.find(icon => icon.name === typeIcon);
    const IconComponent = iconObj ? iconObj.icon : null;

    return (
        <button className={styles.btn} onClick={onClick}>
            {IconComponent && <IconComponent className={styles.Icon}/>}
            {text}
        </button>
    );
}

export default Button;