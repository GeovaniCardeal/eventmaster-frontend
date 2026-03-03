import { AxiosError } from 'axios';
import apiRoutesName from '../../constants/apiRoutesName';
import api from '../../server/api';
import type { apiResponseError } from '../../server/apiResponse';
import { setLocalStorageToken } from '../../utils/localStorageToken';

type loginUserSucessMessage = {
    message: string;
    token: string;
    token_type: string;
    user: {
        id: number;
        cpf: string;
        name: string;
        email: string;
        id_role: number;
    };
};

type LoginUserProps = {
    email: string;
    password: string;
};

export async function loginUser({ email, password }: LoginUserProps) {
    try {
        const response = await api.post<loginUserSucessMessage>(
            apiRoutesName.auth.login,
            {
                email,
                password,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        const { token, token_type } = response.data;
        setLocalStorageToken(`${token_type} ${token}`);
        return response.data;
    } catch (err) {
        const error = err as AxiosError<apiResponseError>;

        console.error('erro no login:', error.response?.data || error.message);

        throw error;
    }
}
