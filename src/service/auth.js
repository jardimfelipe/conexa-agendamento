// import qs from 'qs';
import apiInstance from './api-instance';

const baseUrl = 'http://desafio.conexasaude.com.br/api';

export const Login = async (credentials) => {
  try {
    const { email, password } = credentials;
    if (email === undefined) {
      return Promise.reject(new Error('Missing required  parameter: email'));
    }
    if (password === undefined) {
      return Promise.reject(new Error('Missing required  parameter: password'));
    }
    return await apiInstance({
      method: 'post',
      url: `${baseUrl}/login`,
      data: credentials,
    });
  } catch (e) {
    console.error(e);
    return e.response.data;
  }
};
