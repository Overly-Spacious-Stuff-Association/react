'use client';

import { useMutation } from '@tanstack/react-query';
import { authApi } from '@/features/auth/services/authApi';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/useToast';

export const useSignUp = () => {
  const router = useRouter();
  const toast = useToast();

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: () => {
      toast.success('Регистрация успешна!');
      router.push('/login');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};