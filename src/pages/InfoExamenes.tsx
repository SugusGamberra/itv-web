import { useState, type ReactNode } from 'react';
import { MapPin, Clock, Info /*, Calendar*/ } from 'lucide-react';
import PageLayout from '../ui/layout/PageLayout';

// desplegables

interface AccordionItemProps {
    title: string;
    children: ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

const AccordionItem = ({ title, children, isOpen, onClick }: AccordionItemProps) => {
    return (
        <div className="mb-4 border border-white/10 rounded-xl overflow-hidden bg-white/5">
            <button 
                onClick={onClick}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
            >
                <span className="font-bold text-lg text-white">{title}</span>
                <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                </span>
            </button>
            {isOpen && (
                <div className="p-4 border-t border-white/10 bg-black/20 text-white/80">
                    {children}
                </div>
            )}
        </div>
    );
};

//pag principal info
export default function InfoExamenes() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <PageLayout backTo="/" backText="Volver al inicio">
            <div className="max-w-3xl mx-auto pb-10">
                
                {/* TÍTULO DE LA PAGINA */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-5xl font-serif font-black mb-4 text-white">
                        Información de Exámenes
                    </h1>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-200">
                        <Info size={18} />
                        <span className="font-medium">Pruebas de evaluación finales 2025-2026</span>
                    </div>
                </div>

                {/* NORMAS GENERALES */}
                <div className="grid gap-6 mb-10">
                    <div className="glass-card p-6 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            Normativa Importante
                        </h3>
                        <ul className="space-y-3 text-white/70">
                            <li className="flex gap-3">
                                <span className="text-white font-bold">Identificación:</span>
                                Es obligatorio presentar el DNI, Pasaporte o NIE original para acceder al examen.
                            </li>
                            <li className="flex gap-3">
                                <span className="text-white font-bold">Puntualidad:</span>
                                Los horarios son idénticos en las tres sedes. Solo se permitirá el acceso hasta 10 minutos después del inicio.
                            </li>
                            <li className="flex gap-3">
                                <span className="text-white font-bold">Justificantes:</span>
                                Se entregarán en la sede el mismo día del examen si los necesitas.
                            </li>
                            <li className="flex gap-3">
                                <span className="text-white font-bold">Apoyo:</span>
                                Habrá docentes y personal de atención al estudiante para ayudarte.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* SEDES */}
                <h2 className="text-2xl font-serif font-bold text-white mb-4 flex items-center gap-2">
                    <MapPin /> Presencialidad y Sedes
                </h2>
                
                <AccordionItem 
                    title="Madrid" 
                    isOpen={openSection === 'madrid'} 
                    onClick={() => toggleSection('madrid')}
                >
                    <p className="mb-2">Cuando se confirme ubis lo pongo!</p>
                    <div className="h-40 bg-white/10 rounded flex items-center justify-center mb-2">
                        [MAPA MADRID]
                    </div>
                    <p className="text-sm opacity-60">Aquí irá la direccion :P</p>
                </AccordionItem>

                <AccordionItem 
                    title="Barcelona" 
                    isOpen={openSection === 'bcn'} 
                    onClick={() => toggleSection('bcn')}
                >
                    <p className="mb-2">Cuando se confirme ubis lo pongo!</p>
                    <div className="h-40 bg-white/10 rounded flex items-center justify-center mb-2">
                        [MAPA BARNA]
                    </div>
                    <p className="text-sm opacity-60">Aqui ira la dirección :P</p>
                </AccordionItem>

                <AccordionItem 
                    title="Sevilla" 
                    isOpen={openSection === 'sevilla'} 
                    onClick={() => toggleSection('sevilla')}
                >
                    <p className="mb-2">Cuando se confirme ubis lo pongo!</p>
                    <div className="h-40 bg-white/10 rounded flex items-center justify-center mb-2">
                        [MAPA SEVILLA]
                    </div>
                    <p className="text-sm opacity-60">Aqui ira la direccion!!</p>
                </AccordionItem>


                {/* HORARIOS*/}
                <h2 className="text-2xl font-serif font-bold text-white mb-4 mt-8 flex items-center gap-2">
                    <Clock /> Horarios - 16 de Mayo 2026
                </h2>

                <AccordionItem 
                    title="1º DAM y DAW - Desarrollo de Aplicaciones Multiplataforma" 
                    isOpen={openSection === '1dam'} 
                    onClick={() => toggleSection('1dam')}
                >
                    <ul className="space-y-2 text-sm">
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Bases de Datos</span> <b>9:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Entornos de desarrollo</span> <b>10:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Programación</span> <b>11:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Sistemas informáticos</span> <b>12:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Lenguaje de marcas</span> <b>13:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Itinerario personal empleabilidad I</span> <b>14:00</b></li>
                    </ul>
                </AccordionItem>

                <AccordionItem 
                    title="2º DAM - Desarrollo de Aplicaciones Multiplataforma" 
                    isOpen={openSection === '2dam'} 
                    onClick={() => toggleSection('2dam')}
                >
                    <ul className="space-y-2 text-sm">
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Acceso a datos</span> <b>10:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Desarrollo de interfaces</span> <b>11:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Prog. servicios y procesos</span> <b>12:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Prog. multimedia y dispositivos</span> <b>13:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Sistemas de gestión empresarial</span> <b>14:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Sostenibilidad</span> <b>15:30</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Digitalización</span> <b>16:30</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Inglés</span> <b>17:30</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Itinerario personal empleabilidad II</span> <b>18:30</b></li>
                    </ul>
                </AccordionItem>

                <AccordionItem 
                    title="2º DAW - Desarrollo de Aplicaciones Web" 
                    isOpen={openSection === '2daw'} 
                    onClick={() => toggleSection('2daw')}
                >
                    <ul className="space-y-2 text-sm">
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Desarrollo web entorno cliente</span> <b>11:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Desarrollo web entorno servidor</span> <b>12:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Despliegue de aplicaciones web</span> <b>13:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Diseño de interfaces web</span> <b>14:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Sostenibilidad</span> <b>15:30</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Digitalización</span> <b>16:30</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Inglés técnico</span> <b>17:30</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Itinerario personal empleabilidad II</span> <b>18:30</b></li>
                    </ul>
                </AccordionItem>

            </div>
        </PageLayout>
    );
}