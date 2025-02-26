import { z } from 'zod';

export const signUpSchema = z.object({
    email: z.string().email('Некорректный email'),
    password: z.string().min(8, 'Пароль должен содержать минимум 8 символов'),
    firstName: z.string().min(1, 'Имя обязательно'),
    lastName: z.string().min(1, 'Фамилия обязательна'),
    birthDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Неверный формат даты'),
    roleId: z.enum(['1', '2'], {
        errorMap: () => ({ message: 'Пожалуйста, выберите роль' }),
    }),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;