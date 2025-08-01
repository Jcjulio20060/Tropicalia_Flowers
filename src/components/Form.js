// Importação do useState
import { useState } from 'react';

// Importação do Componente Input
import Input from './common/Input';

// Importação do componente de Submit
import Button from './common/Button';

// Importação do estilo do componente de formulário
import styles from './Form.module.css';

function Form({ type, txtBtn, data, handleLogin }){
    const [formData, setFormData] = useState(data ? data : { address: {} });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    function Submit(e){
        e.preventDefault();
        handleLogin();
    }

    const config = {
        Login: [
            {
                text: "CPF",
                type: "text",
                name: "cpf",
                placeholder: "Digite seu CPF",
                handleOnChange: handleChange,
            },
            {
                text: "Senha",
                type: "password",
                name: "password",
                placeholder: "Digite sua senha",
                handleOnChange: handleChange,
            }
        ],
        Cadastro: [
            {
                text: "Nome",
                type: "text",
                name: "name",
                placeholder: "Digite seu Nome",
                handleOnChange: handleChange,
            },
            {
                text: "CPF",
                type: "text",
                name: "cpf",
                placeholder: "Digite seu CPF",
                handleOnChange: handleChange,
            },
            {
                text: "Data de Nascimento",
                type: "date",
                name: "date",
                placeholder: "Digite sua data de nascimento",
                handleOnChange: handleChange,
            },
            {
                text: "Email",
                type: "email",
                name: "email",
                placeholder: "Digite seu Email",
                handleOnChange: handleChange,
            },
            {
                text: "Senha",
                type: "password",
                name: "Senha",
                placeholder: "Digite sua Senha",
                handleOnChange: handleChange,
            },
            {
                text: "Confirme a Senha",
                type: "password",
                name: "ConfirmPassword",
                placeholder: "Digite sua Senha",
                handleOnChange: handleChange,
            },
            {
                text: "CEP",
                type: "text",
                name: "CEP",
                placeholder: "Digite seu CEP",
                handleOnChange: handleChange,
            },
        ],
        UserProfile: [
            {
                text: "Nome",
                type: "text",
                name: "name",
                placeholder: "Digite seu Nome",
                handleOnChange: handleChange,
            },
            {
                text: "CPF",
                type: "text",
                name: "cpf",
                placeholder: "Digite seu CPF",
                handleOnChange: handleChange,
            },
            {
                text: "Data de Nascimento",
                type: "date",
                name: "date",
                placeholder: "Digite sua data de nascimento",
                handleOnChange: handleChange,
            },
            {
                text: "Email",
                type: "email",
                name: "email",
                placeholder: "Digite seu Email",
                handleOnChange: handleChange,
            },
            {
                text: "Senha",
                type: "password",
                name: "Senha",
                placeholder: "Digite sua Senha",
                handleOnChange: handleChange,
            },
            {
                text: "Confirme a Senha",
                type: "password",
                name: "ConfirmPassword",
                placeholder: "Digite sua Senha",
                handleOnChange: handleChange,
            },
            {
                text: "CEP",
                type: "text",
                name: "CEP",
                placeholder: "Digite seu CEP",
                handleOnChange: handleChange,
            },
        ]
    };

    return (
        <form onSubmit={Submit}>
            {config[type].map(element => (
                <Input key={element.name} type={element.type} text={element.text} name={element.name} placeholder={element.placeholder} value={formData[element.name] || ''} handleOnChange={handleChange}/>
            ))}
            <Button text={txtBtn}/>
        </form>
    )
}

export default Form;