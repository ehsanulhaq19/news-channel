import apiClient from './client/client';

interface SignUpPayload {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

export const signUpApi = async (payload: SignUpPayload) => {
    const { email = '', first_name = '', last_name = '', password = '' } = payload;
    const client = await apiClient();

    return client.post('/register', {
        email,
        first_name,
        last_name,
        password
    });
};

export const loginApi = async (payload: LoginPayload) => {
    const { email = '', password = '' } = payload;
    const client = await apiClient();

    return client.post('/login', {
        email,
        password
    });
};
