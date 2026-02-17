import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, GraduationCap, Calendar, LayoutDashboard } from 'lucide-react';

export default function NavMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef<HTMLDivElement>(null);

    // segmentar url pa saber dnd se encuentra
    const segments = location.pathname.split('/').filter(Boolean);
    
    const gradoID = segments[0];
    const year = segments[1];
    const asignaturaID = segments[2];
    const isTest = segments.includes('test');

    // cerrar si hacen click fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // en home no renderizo menu d navegacion
    if (location.pathname === '/') return null;

    return (
        <div className="absolute top-0 right-0 z-50" ref={menuRef}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full border transition-all duration-300 backdrop-blur-md shadow-lg
                ${isOpen 
                    ? 'bg-white text-black border-white rotate-90' 
                    : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
                }`}
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* MENU DESPLEGABLE */}
            <div className={`absolute top-12 right-0 w-56 bg-[#0a0a0a]/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top-right
                ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}
            `}>
                <div className="p-1 flex flex-col gap-1">
                    
                    {/* SIEMPRE: Ir a Inicio */}
                    <Link 
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-left"
                    >
                        <Home size={16} className="shrink-0" /> 
                        <span>Inicio</span>
                    </Link>

                    {/* SI HAY AÑO: Mostrar enlace al grado */}
                    {year && (
                        <Link 
                            to={`/${gradoID}`}
                            onClick={() => setIsOpen(false)}
                            className="w-full flex items-center gap-3 px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-left"
                        >
                            <Calendar size={16} className="shrink-0" />
                            <span className="truncate">Curso {year}</span>
                        </Link>
                    )}

                    {/* SI HAY ASIGNATURA: Mostrar enlace alc urso */}
                    {asignaturaID && (
                        <Link 
                            to={`/${gradoID}/${year}`}
                            onClick={() => setIsOpen(false)}
                            className="w-full flex items-center gap-3 px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-left"
                        >
                            
                            <GraduationCap size={16} className="shrink-0" />  
                            <span>Ir a {gradoID}</span>
                        </Link>
                    )}

                    {/* EN TEST: Mostrar enlace al dashboard de asignatura */}
                    {isTest && (
                        <Link 
                            to={`/${gradoID}/${year}/${asignaturaID}`}
                            onClick={() => setIsOpen(false)}
                            className="w-full flex items-center gap-3 px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-left border-t border-white/10 mt-1"
                        >
                            <LayoutDashboard size={16} className="shrink-0" /> 
                            <span className="truncate">Panel {asignaturaID}</span>
                        </Link>
                    )}

                </div>
            </div>
        </div>
    );
}