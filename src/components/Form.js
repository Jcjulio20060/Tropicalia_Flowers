// Importação do useState
import { useState, useEffect } from 'react';

// Importação do Componente Input
import Input from './common/Input';

// Importação do componente de Submit
import Button from './common/Button';

// Importação do hook useAxios
import useAxios from '../hooks/useAxios';

// Importação do estilo do componente de formulário
import styles from './Form.module.css';

function Form({ type, txtBtn, data, handleButton }) {
    const [formData, setFormData] = useState(data ? data : { address: {} });
    const [cepValue, setCepValue] = useState('50731040');

    // Chamada do hook sempre no topo
    const { data: viacep, loading, error } = useAxios(
        cepValue.length === 8 ? `https://viacep.com.br/ws/${cepValue}/json/` : null,
        'get',
        []
    );

    // Atualiza o formData quando a API retorna algo
    useEffect(() => {
        if (viacep && !viacep.erro) {
            setFormData(prevData => ({
                ...prevData,
                address: {
                    ...prevData.address,
                    cep: cepValue,
                    street: viacep.logradouro,
                    neighborhood: viacep.bairro,
                    city: viacep.localidade,
                    state: viacep.uf
                }
            }));
        }
    }, [viacep]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'cep') {
            setCepValue(value); // Atualiza estado para o hook reagir
            setFormData(prevData => ({
                ...prevData,
                address: { ...prevData.address, cep: value }
            }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    function Submit(e) {
        e.preventDefault();
        handleButton(formData);
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
                name: "password",
                placeholder: "Digite sua Senha",
                handleOnChange: handleChange,
            },
            {
                text: "Confirme a Senha",
                type: "password",
                name: "confirmPassword",
                placeholder: "Digite sua Senha",
                handleOnChange: handleChange,
            },
            {
                text: "CEP",
                type: "text",
                name: "cep",
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
                value: formData.name || '',
                handleOnChange: handleChange,
            },
            {
                text: "CPF",
                type: "text",
                name: "cpf",
                placeholder: "Digite seu CPF",
                value: formData.cpf || '',
                handleOnChange: handleChange,
            },
            {
                text: "Data de Nascimento",
                type: "date",
                name: "date",
                placeholder: "Digite sua data de nascimento",
                value: formData.birthday || '',
                handleOnChange: handleChange,
            },
            {
                text: "Email",
                type: "email",
                name: "email",
                placeholder: "Digite seu Email",
                value: formData.email || '',
                handleOnChange: handleChange,
            },
            {
                text: "Senha",
                type: "password",
                name: "password",
                placeholder: "Digite sua Senha",
                value: formData.password || '',
                handleOnChange: handleChange,
            },
            {
                text: "Confirme a Senha",
                type: "password",
                name: "confirmPassword",
                placeholder: "Confirme sua Senha",
                handleOnChange: handleChange,
            },
            {
                text: "CEP",
                type: "text",
                name: "cep",
                placeholder: "Digite seu CEP",
                value: formData.address.cep || '',
                handleOnChange: handleChange,
            },
        ]
    };

    return (
        <form onSubmit={Submit}>
            {config[type].map(element => (
                <Input key={element.name} type={element.type} text={element.text} name={element.name} placeholder={element.placeholder} value={element.value} handleOnChange={handleChange}/>
            ))}
            {type === 'UserProfile' ? (
                <div className={styles.Buttons}>
                    <Button text="Excluir" customClass="excluir" icon="Lixeira"/>
                    <Button text={txtBtn}/>
                </div>
            ) : (
                <Button text={txtBtn}/>
            )}
            {loading && <p>Carregando CEP...</p>}
            {error && <p>Erro ao buscar CEP</p>}
        </form>
    )
}

export default Form;