import axios from 'axios';

class ErrorHandler {
  static handle(error: any) {
    const errorData = {
      message: error.data?.message,
      status: error?.status,
    };
    console.log(errorData);
    return Promise.reject(error);
  }
}

const apiUrl = import.meta.env.VITE_DEV_API_SOURCE;
const authorization = import.meta.env.VITE_API_KEY;

if (!apiUrl || !authorization) {
  throw new Error('API URL, Authorization, and User Agent must be provided');
}

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers.Authorization = `APIKey ${authorization}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use((response) => {
  const apiResult = response.data.Result
  const data = JSON.parse(apiResult);
  response.data.Result = data;
  return response;
}, (error) => {
  const isError = error.response && error.response.status >= 400 && error.response.status < 500;

  if (isError) {
    ErrorHandler.handle(error);
  }

  return Promise.reject(error);
});

export default api;
