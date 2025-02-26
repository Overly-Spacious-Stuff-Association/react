import { ReactNode } from 'react';
import { Header } from '@/components/layouts/Header/Header';
import { Footer } from '@/components/layouts/Footer/Footer';

export const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
                <main className="flex-grow container mx-auto p-4">{children}</main>
            <Footer />
        </div>
    );
};