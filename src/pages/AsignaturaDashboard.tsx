import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '../ui/layout/PageLayout';
import ArtCard from '../ui/components/ArtCard';

import imgB1 from '../assets/images/b1.jpg';
import imgB2 from '../assets/images/b2.jpg';
import imgB3 from '../assets/images/b3.jpg';
import imgB4 from '../assets/images/b4.jpg';

export default function AsignaturaDashboard() {
    const { gradoID, year, asignaturaID } = useParams();
    const [activeTab, setActiveTab] = useState<'tests' | 'apuntes'>('tests');
    const basePath = `/${gradoID}/${year}/${asignaturaID}`;

    return (
        <PageLayout backTo={`/${gradoID}/${year}`} backText="Asignaturas">
        
            {/* CABECERA */}
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 text-white capitalize">
                    {asignaturaID?.replace(/-/g, ' ')}
                </h1>
                <p className="text-white/50 text-lg font-light max-w-2xl mx-auto">
                    Selecciona el modo de entrenamiento o consulta los apuntes.
                </p>
            
                {/* PESTAÑAS FLOTANTES */}
                <div className="mt-10 inline-flex p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                    <button 
                        onClick={() => setActiveTab('tests')} 
                        className={`px-8 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all ${activeTab === 'tests' ? 'bg-white text-black shadow-lg' : 'text-white/60 hover:text-white'}`}
                    >
                        Tests
                    </button>
                    <button 
                        onClick={() => setActiveTab('apuntes')} 
                        className={`px-8 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all ${activeTab === 'apuntes' ? 'bg-white text-black shadow-lg' : 'text-white/60 hover:text-white'}`}
                    >
                        Apuntes
                    </button>
                </div>
            </div>

            {/* CONTENIDO */}
            {activeTab === 'tests' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    
                    <ArtCard 
                        to={`${basePath}/test/repaso`}
                        title="Repaso Chill"
                        subtitle="Modo Zen"
                        description="Sin tiempo. Explicaciones activadas. Ideal para aprender."
                        image={imgB1}
                    />

                    <ArtCard 
                        to={`${basePath}/test/puntuar`}
                        title="Modo Puntuación"
                        subtitle="El Reto (150)"
                        description="Todas las preguntas. Sin ayudas. ¿Podrás con todo el temario?"
                        image={imgB2}
                    />

                    <ArtCard 
                        to={`${basePath}/test/examen_easy`}
                        title="Simulacro"
                        subtitle="Rápido (30)"
                        description="30 preguntas aleatorias para calentar motores."
                        image={imgB3}
                    />

                    <ArtCard 
                        to={`${basePath}/test/examen_hard`}
                        title="Modo Diablo"
                        subtitle="Hardcore"
                        description="3 Fallos = -1 Acierto. Solo para verdaderos maestros."
                        image={imgB4}
                    />

                </div>
            )}

            {activeTab === 'apuntes' && (
                <div className="max-w-2xl mx-auto text-center py-20 bg-white/5 rounded-3xl border border-white/10">
                    <p className="text-white/40 italic">La biblioteca está cerrada por ahora... (Próximamente)</p>
                </div>
            )}
        </PageLayout>
    );
}