import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface Props {
    children: ReactNode;
    backTo?: string;
    backText?: string;
}

export default function PageLayout({ children, backTo, backText }: Props) {
    return (
        // Contenedor principal que centra todo vertical y horizontalmente
        <div className="min-h-screen w-full flex flex-col items-center p-6 md:p-12 animate-in fade-in duration-700">
            
            <div className="w-full max-w-6xl relative">
                {/* Boton volver */}
                {backTo && (
                    <Link 
                        to={backTo} 
                        className="absolute top-0 left-0 inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold py-2"
                    >
                        <div className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition">
                            <ArrowLeft size={16} />
                        </div>
                        {backText || "Atrás"}
                    </Link>
                )}

                {/* contenido inyectado (titulos y grids) */}
                <div className="mt-16 md:mt-12">
                    {children}
                </div>
            </div>
        </div>
    );
}