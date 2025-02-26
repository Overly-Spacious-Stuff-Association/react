import { Loader2 } from 'lucide-react';

export const Button = ({
                           children,
                           loading,
                           ...props
                       }: React.ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean }) => (
    <button
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
        {...props}
    >
        {loading ? <Loader2 className="animate-spin mx-auto" /> : children}
    </button>
);