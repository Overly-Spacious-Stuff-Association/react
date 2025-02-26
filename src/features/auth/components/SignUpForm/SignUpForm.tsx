'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, SignUpFormData } from '@/features/auth/types/authTypes';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import { useSignUp } from '@/features/auth/hooks/useSignUp';
import { formatDate } from '@/utils/helpers/formatDate';

export const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema),
    });

    const { mutateAsync, isPending } = useSignUp();

    const onSubmit = handleSubmit(async (data) => {
        try {
            const formattedData = {
                ...data,
                birthDate: formatDate(data.birthDate),
            };

            await mutateAsync(formattedData);
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
        }
    });

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <Input
                label="Email"
                type="email"
                error={errors.email?.message}
                {...register('email')}
            />
            <Input
                label="Пароль"
                type="password"
                error={errors.password?.message}
                {...register('password')}
            />
            <Input
                label="Имя"
                type="text"
                error={errors.firstName?.message}
                {...register('firstName')}
            />
            <Input
                label="Фамилия"
                type="text"
                error={errors.lastName?.message}
                {...register('lastName')}
            />

            <div className="space-y-2">
                <label className="block text-sm font-medium">Роль</label>
                <div className="flex gap-4">
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            value="1"
                            {...register('roleId')}
                            className="h-4 w-4 text-blue-600"
                        />
                        <span className="text-gray-700">Клиент</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            value="2"
                            {...register('roleId')}
                            className="h-4 w-4 text-blue-600"
                        />
                        <span className="text-gray-700">Тренер</span>
                    </label>
                </div>
                {errors.roleId?.message && (
                    <p className="text-sm text-red-500">{errors.roleId.message}</p>
                )}
            </div>

            <Input
                label="Дата рождения"
                type="date"
                error={errors.birthDate?.message}
                {...register('birthDate')}
            />

            <div className="mt-8">
                <Button type="submit" disabled={isPending}>
                    {isPending ? 'Отправка...' : 'Зарегистрироваться'}
                </Button>
            </div>
        </form>
    );
};