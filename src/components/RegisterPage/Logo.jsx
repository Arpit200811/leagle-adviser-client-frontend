import { FaGavel } from 'react-icons/fa';

const Logo = () => {
    return (
        <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FaGavel size={24} />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">LegalTech</h1>
        </div>
    );
};

export default Logo;
