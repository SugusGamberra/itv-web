import { useParams } from 'react-router-dom';
import ArtCard from '../ui/components/ArtCard';
import PageLayout from '../ui/layout/PageLayout';

import imgC1 from '../assets/images/c1.jpg';

export default function Grado() {
    const { gradoID } = useParams();
    // poner mas años cuando eso
    const years = [{ id: '2026', title: 'Curso 2025/2026', subtitle: 'Año Actual' }];

    return (
        <PageLayout backTo="/" backText="Volver al inicio">
            
            <div className="text-center mb-12">
                <h1 className="text-5xl md:text-7xl font-serif font-black uppercase mb-4 tracking-tight drop-shadow-sm text-white">
                    {gradoID}
                </h1>
                <p className="text-xl opacity-80 font-medium text-white/60">Selecciona el año académico</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center max-w-2xl mx-auto">
                {years.map((year) => (
                    <ArtCard 
                        key={year.id} 
                        title={year.title} 
                        subtitle={year.subtitle}
                        to={`/${gradoID}/${year.id}`} 
                        image={imgC1}
                    />
                ))}
            </div>

        </PageLayout>
    );
}