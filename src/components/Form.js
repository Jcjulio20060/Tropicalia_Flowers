// Importação do Componente Input
import Input from './common/Input';

// Importação do componente de Submit
import SubmitButton from './common/SubmitButtton';

// Importação do estilo do componente de formulário
import styles from './Form.module.css';

function Form({ type, txtBtn }){
    const config = {
        Login: [
            {
                text: "CPF",
                type: "text",
                name: "cpf",
                placeholder: "Digite seu CPF",
                handleOnChange: "",
            },
            {
                text: "Senha",
                type: "password",
                name: "password",
                placeholder: "Digite sua senha",
                handleOnChange: "",
            }
        ],
        Cadastro: [
            {
                text: "Nome",
                type: "text",
                name: "name",
                placeholder: "Digite seu Nome",
                handleOnChange: "",
            },
            {
                text: "CPF",
                type: "text",
                name: "cpf",
                placeholder: "Digite seu CPF",
                handleOnChange: "",
            },
            {
                text: "Data de Nascimento",
                type: "date",
                name: "date",
                placeholder: "Digite sua data de nascimento",
                handleOnChange: "",
            },
            {
                text: "Email",
                type: "email",
                name: "email",
                placeholder: "Digite seu Email",
                handleOnChange: "",
            },
            {
                text: "Senha",
                type: "password",
                name: "Senha",
                placeholder: "Digite sua Senha",
                handleOnChange: "",
            },
            {
                text: "Confirme a Senha",
                type: "password",
                name: "Senha",
                placeholder: "Digite sua Senha",
                handleOnChange: "",
            },
            {
                text: "CEP",
                type: "text",
                name: "CEP",
                placeholder: "Digite seu CEP",
                handleOnChange: "",
            },
        ]
    };

    return (
        <form>
            {config[type].map(element => (
                <Input type={element.type} text={element.text} name={element.name} placeholder={element.placeholder}/>
            ))}
            <SubmitButton text={txtBtn}/>
        </form>
    )
}

export default Form;