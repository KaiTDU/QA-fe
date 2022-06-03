import brAxios from '../../api/Interceptor';

export const AuthApi = {
    loginApi: (params) => {const response = brAxios.post('auth/signin', params); return response},
    registerApi: (params) =>{ const response = brAxios.post('auth/signup', params); return response}
}