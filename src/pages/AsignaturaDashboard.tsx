import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '../ui/layout/PageLayout';
import ArtCard from '../ui/components/ArtCard';
import { FileText, ExternalLink } from 'lucide-react';

import { MAPA_PREGUNTAS } from '../data/indicePreguntas';
import imgPlaceholder from '../assets/images/cinnamostrong.png';

import imgB1 from '../assets/images/b1.jpg';
import imgB2 from '../assets/images/b2.jpg';
import imgB3 from '../assets/images/b3.jpg';
import imgB4 from '../assets/images/b4.jpg';

// apuntes
const DB_APUNTES: Record<string, {titulo: string; url: string; tipo: string }[]> = {
    'marcas': [
        {titulo: 'Apuntes de la asignatura', url: 'https://docs.google.com/document/d/1Q9LFt9wckhTPMJTwFnd_9t6cJ6vhRK1iDF33uMPKtXk/edit?tab=t.tj0pltcwihm#heading=h.2nyo0qdu5z72', tipo: 'Google Docs' },
        {titulo: 'HTML y CSS', url: 'https://github.com/SugusGamberra/Aprendiendo_HTML_CSS', tipo: 'Github'},
        {titulo: 'XML', url: 'https://github.com/SugusGamberra/AprendiendoXML', tipo: 'Github'},
        {titulo: 'JS orientado a LM', url: 'https://github.com/SugusGamberra/AprendiendoJS/tree/main/0.1.%20JS%20Orientado%20a%20Lenguajes%20de%20marcado', tipo: 'Github'}
    ],
    'bbdd': [
        {titulo: 'Apuntes de la asignatura', url: 'https://docs.google.com/document/d/1foGVL2taVsKJTTpWQlghn1IULypuMzzUrLEEOIWcKSw/edit?tab=t.0', tipo: 'Google Docs'}
    ],
    'programacion': [
        {titulo: 'Apuntes de la asignatura', url: 'https://docs.google.com/document/d/1Dw635Vv00hgOEsyFBBzjpU12_fHFS2Z1k-IjjgVq6OY/edit?tab=t.josw4u3lk63m#heading=h.2nyo0qdu5z72', tipo: 'Google Docs'},
        {titulo: 'JAVA', url:'https://github.com/SugusGamberra/AprendiendoJAVA', tipo: 'Github'},
        {titulo: 'C#', url: 'https://github.com/SugusGamberra/AprendiendoCS/tree/main/0485.PRG/MO485.PRG.P01.Menu.Net', tipo: 'Github'}
    ],
    'entornos': [
        {titulo: 'Apuntes de la asignatura', url: 'https://docs.google.com/document/d/1vhlVGjAyOSAy47hgwMw69kWZICHidSPu7OfjdzfTK2Q/edit?tab=t.0', tipo: 'Google Docs'}
    ],
    'sistemas': [
        {titulo: 'Apuntes de la asignatura', url: 'https://docs.google.com/document/d/1dT5zGTvTffTldNAOlREEUMeld9CRzSy-yTCMQvNCaDg/edit?tab=t.0', tipo: 'Google Docs'}
    ],
    'jesubuntu': [
        {titulo: 'Los 10 mandamientos de la terminal', url: 'https://docs.google.com/document/d/1Jx2x2Y_U6XJj03okQoZHY_KetQki-9TZGJ6uHh8s1DI/edit?tab=t.0', tipo: 'Piedras sagradas talladas por Jesubuntu'},
        {titulo: 'Grimorio de Oraciones Bash', url: 'https://github.com/SugusGamberra/AprendiendoBash', tipo: 'Sagrada Jesubiblia'}
    ],
    'empleabilidad': [
        {titulo: 'Apuntes completos hechos por Lidia 🩵', url: 'https://docs.google.com/document/d/1fblR1lFMOTnYpxSZwLU62hWAZ5e17S__YqfYUjkTaSg/edit?tab=t.0', tipo: 'Google Docs'}
    ]
};

export default function AsignaturaDashboard() {
    const { gradoID, year, asignaturaID } = useParams();
    
    // PARA JESUBUNTU
    const IS_JESUBUNTU = asignaturaID === 'jesubuntu';
    
    const [activeTab, setActiveTab] = useState<'tests' | 'apuntes'>(
        IS_JESUBUNTU ? 'apuntes' : 'tests'
    );

    const hayPreguntas = MAPA_PREGUNTAS[asignaturaID || '']?.length > 0;

    const basePath = `/${gradoID}/${year}/${asignaturaID}`;
    const apuntes = DB_APUNTES[asignaturaID || ''] || [];
    
    return (
        <PageLayout backTo={`/${gradoID}/${year}`} backText="Asignaturas">
        
            {/* CABECERA */}
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 text-white capitalize">
                    {asignaturaID?.replace(/-/g, ' ')}
                </h1>

                {/* jesubuntu deidad */}
                {IS_JESUBUNTU ? (
                    <p className="text-emerald-400/80 text-xl font-medium max-w-2xl mx-auto animate-pulse">
                        "Jesubuntu no se estudia, se siente. Alabada sea la deidad del código abierto."
                    </p>
                ) : (
                    <p className="text-white/50 text-lg font-light max-w-2xl mx-auto">
                        Selecciona el modo de entrenamiento o consulta los apuntes.
                    </p>
                )}
            
                {/* ocultar pestañas si es jesubuntu deidad padre todopoderoso */}
                {!IS_JESUBUNTU && (
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
                )}
            </div>

            {/* CONTENIDO: TESTS (salvo si estamos en donde jesubuntu deidad) */}
            {!IS_JESUBUNTU && activeTab === 'tests' && (
                hayPreguntas ? (
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
                ) : (
                    <div className="flex flex-col items-center justify-center py-10 animate-in fade-in slide-in-from-bottom-4">
                        <img 
                            src={imgPlaceholder} 
                            alt="Estamos trabajando en ello" 
                            className="w-64 h-64 object-contain mb-8 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                        <p className="text-white/70 text-xl font-medium text-center max-w-md tracking-wide bg-white/5 px-6 py-4 rounded-2xl border border-white/10">
                            "Aún no tenemos esta batería de preguntas, pero estamos trabajando en ello."
                        </p>
                    </div>
                )
            )}

            {/* APUNTES*/}
            {activeTab === 'apuntes' && (
                <div className="space-y-4 animate-in fade-in max-w-2xl mx-auto pb-10">
                    {apuntes.length > 0 ? (
                        apuntes.map((apunte, index) => (
                            <a 
                                key={index}
                                href={apunte.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-5 p-5 bg-[#0a0a0a] border border-white/10 rounded-2xl hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                            >
                                <div className="p-3 bg-white/5 rounded-xl text-white/60 group-hover:text-white group-hover:scale-110 transition-all">
                                    <FileText size={24} />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                                        {apunte.titulo}
                                    </h4>
                                    <p className="text-xs text-white/40 uppercase tracking-wider font-bold mt-1">
                                        {apunte.tipo}
                                    </p>
                                </div>
                                <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white/40">
                                    <ExternalLink size={20} />
                                </div>
                            </a>
                        ))
                    ) : (
                        <div className="text-center py-12 px-6 bg-white/5 rounded-3xl border border-white/5 border-dashed">
                            <p className="text-white/40 italic mb-2">
                                {IS_JESUBUNTU 
                                    ? "La palabra de Jesubuntu aún no ha sido escrita..." 
                                    : "El grimorio de esta materia está en blanco..."}
                            </p>
                            <p className="text-xs text-white/20 uppercase tracking-widest">Próximamente</p>
                        </div>
                    )}
                </div>
            )}
        </PageLayout>
    );
}