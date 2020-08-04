/* eslint-disable */
import axios from 'axios';
import { getSavedState, saveState } from '@/utils/localStorage';

const domain = process.env.VUE_APP_URL_API;
const apiInstance = axios.create({
  baseURL: domain,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

apiInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getSavedState('auth.token')}`;
  return config;
});

export default apiInstance;
