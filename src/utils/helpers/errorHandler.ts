import { AxiosError } from 'axios';

export const errorHandler = (error: unknown) => {
    if (error instanceof AxiosError) {
        return new Error(error.response?.data?.message || 'Ошибка запроса');
    }
    return new Error('Неизвестная ошибка');
};