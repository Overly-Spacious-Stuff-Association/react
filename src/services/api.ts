import axios, { AxiosError } from 'axios';

interface UserData {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    birthdate: string;
}

export const registerUser = async (userData: UserData): Promise<void> => {
    try {
        await axios.post('http://localhost:8080/api/user/signin', userData);
    } catch (error) {
        const axiosError = error as AxiosError;
        throw new Error(axiosError.response?.data?.toString() || 'Ошибка регистрации');
    }
};