import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function useAxios(url, method = 'get', initialData = null) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false); // Começa como false, pois a requisição pode ser disparada manualmente
  const [error, setError] = useState(null);

  // Usa useCallback para memoizar a função e evitar recriações desnecessárias
  const executeRequest = useCallback(async (body = null, params = {}) => {
    setLoading(true);
    setError(null); // Limpa erros anteriores ao iniciar nova requisição

    try {
      let response;
      switch (method.toLowerCase()) {
        case 'get':
          response = await axios.get(url, { params });
          break;
        case 'post':
          response = await axios.post(url, body, { params });
          break;
        case 'put':
          response = await axios.put(url, body, { params });
          break;
        case 'delete':
          response = await axios.delete(url, { params, data: body }); // DELETE com body é um pouco diferente
          break;
        case 'patch':
          response = await axios.patch(url, body, { params });
          break;
        default:
          throw new Error(`Método HTTP '${method}' não suportado.`);
      }
      setData(response.data);
      return response.data; // Retorna os dados para quem chamou a função
    } catch (err) {
      setError(err);
      throw err; // Re-lança o erro para que o componente possa tratá-lo se necessário
    } finally {
      setLoading(false);
    }
  }, [url, method]); // Dependências do useCallback

  // Para requisições GET que devem ser disparadas na montagem do componente
  useEffect(() => {
    if (method.toLowerCase() === 'get') {
      executeRequest();
    }
  }, [method, executeRequest]); // Adicione executeRequest como dependência

  // Retorna os dados, status de carregamento, erro e a função para executar a requisição
  return { data, loading, error, executeRequest };
}

export default useAxios;