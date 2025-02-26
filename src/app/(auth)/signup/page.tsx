import { SignUpForm } from '@/features/auth/components/SignUpForm/SignUpForm';

export default function SignUpPage() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Регистрация</h1>
                <SignUpForm />
            </div>
        </div>
    );
}