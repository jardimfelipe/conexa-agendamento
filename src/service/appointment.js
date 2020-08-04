// import qs from 'qs';
import apiInstance from './api-instance';

const baseUrl = 'http://desafio.conexasaude.com.br/api';

export const PostAppointment = async (appointment) => {
  try {
    return await apiInstance({
      method: 'post',
      url: `${baseUrl}/consulta`,
      data: appointment,
    });
  } catch (e) {
    console.error(e);
    return e.response.data;
  }
};

export const GetAppointMentList = async () => {
  try {
    return await apiInstance({
      method: 'get',
      url: `${baseUrl}/consultas`,
    });
  } catch (e) {
    console.error(e);
    return e.response.data;
  }
};
