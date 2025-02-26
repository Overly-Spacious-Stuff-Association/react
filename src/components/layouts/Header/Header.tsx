import Link from 'next/link';

export const Header = () => {
    return (
        <header className="bg-blue-600 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    My App
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/login" className="hover:underline">
                                Войти
                            </Link>
                        </li>
                        <li>
                            <Link href="/signup" className="hover:underline">
                                Регистрация
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};