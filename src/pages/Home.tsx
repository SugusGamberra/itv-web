import ArtCard from '../ui/components/ArtCard';
import imgA1 from '../assets/images/a1.jpg';
import imgA2 from '../assets/images/a2.jpg';
import imgA3 from '../assets/images/a3.jpg';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] w-full animate-in zoom-in-95 duration-700">
            <div className="text-center mb-20">
                <h1 className="text-7xl md:text-9xl font-serif font-black mb-6 tracking-tighter text-white drop-shadow-2xl">
                    ITV
                </h1>
                <p className="text-xl font-medium text-white/60 tracking-[0.2em] uppercase font-sans">
                    Inspección Técnica de Variables
                </p>
            </div>

            {/* GRID DE CARTAS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl px-4">
                
                <ArtCard 
                    to="/1dam"
                    title="1º DAM/W"
                    subtitle="Primer Curso"
                    description="Fundamentos de programación, marcas y sistemas."
                    image={imgA1} 
                />

                <ArtCard 
                    to="/2daw"
                    title="2º DAW"
                    subtitle="Desarrollo Web"
                    description="Despliegue, cliente, servidor y diseño de interfaces."
                    image={imgA2}
                />

                <ArtCard 
                    to="/2dam"
                    title="2º DAM"
                    subtitle="Multiplataforma"
                    description="Desarrollo móvil, acceso a datos y gestión empresarial."
                    image={imgA3}
                />
            </div>
        </div>
    );
}