export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-auto">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} My App. Все права защищены.</p>
            </div>
        </footer>
    );
};