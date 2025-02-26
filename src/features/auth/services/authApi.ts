import { ENDPOINTS } from '@/lib/config/endpoints';
import { api } from '@/lib/api';
import { SignUpFormData } from '@/features/auth/types/authTypes';

export const authApi = {
  register: async (data: SignUpFormData) => {
    try {
      const response = await api.post(ENDPOINTS.AUTH.SIGNUP, data);
      return response.data;
    } catch (error) {
      console.error('Ошибка при регистрации:', error);
      throw error;
    }
  },
  login: async (credentials: { email: string; password: string }) => {
    const response = await api.post(ENDPOINTS.AUTH.LOGIN, credentials);
    return response.data;
  },
  logout: async () => {
    const response = await api.post(ENDPOINTS.AUTH.LOGOUT);
    return response.data;
  },
};