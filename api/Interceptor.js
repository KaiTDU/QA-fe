import axios from 'axios';

const brAxios = axios.create({
  baseURL: 'http://localhost:3001/api/',
  timeout: 10000,
});

const requestHandler = (request) => {
  // token authen
  const authToken = 'dasdasdasdasdas';
  request.headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With',
    Authorization: `Bearer ${authToken}`,
  };
  return request;
};

const redirectToLogin = (response) => {
  if (response.status === 401 || response.status === 403) {
    JSCookie.remove('token');
    window.location = '/login';
  }
};

const responseHandler = (response) => {
  return response;
};

const errorHandler = (error) => {
  const { response } = error;
  redirectToLogin(response);
  return Promise.reject(error);
};

brAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error),
);

brAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error),
);


export default {
  get: brAxios.get,
  post: brAxios.post,
  put: brAxios.put,
  delete: brAxios.delete,
  patch: brAxios.patch,
};