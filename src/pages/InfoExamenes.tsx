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
                    <p className="mb-4 text-white">📍 <b>CTO:</b> C. de Albarracín, 34, San Blas-Canillejas, 28037 Madrid</p>
                    <div className="h-64 w-full rounded-xl overflow-hidden border border-white/20">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.1424911099684!2d-3.6300188!3d40.4389659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422f2835978a3f%3A0x6e96906a28246e75!2sC.%20de%20Albarrac%C3%ADn%2C%2034%2C%20San%20Blas-Canillejas%2C%2028037%20Madrid!5e0!3m2!1ses!2ses!4v1711380000000!5m2!1ses!2ses" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </AccordionItem>

                <AccordionItem 
                    title="Barcelona" 
                    isOpen={openSection === 'bcn'} 
                    onClick={() => toggleSection('bcn')}
                >
                    <p className="mb-4 text-white">📍 <b>CTO:</b> Carrer de Tarragona, 78, 82, Eixample, 08015 Barcelona</p>
                    <div className="h-64 w-full rounded-xl overflow-hidden border border-white/20">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.8863674253164!2d2.1436423!3d41.3787358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2632239f60d%3A0x8670c538a7c2f82c!2sCarrer%20de%20Tarragona%2C%2078%2C%2008015%20Barcelona!5e0!3m2!1ses!2ses!4v1711380200000!5m2!1ses!2ses" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                        ></iframe>
                    </div>
                </AccordionItem>

                <AccordionItem 
                    title="Sevilla (Utrera)" 
                    isOpen={openSection === 'sevilla'} 
                    onClick={() => toggleSection('sevilla')}
                >
                    <p className="mb-4 text-white">
                        📍 <b>Salesianos Utrera:</b> C. de San Juan Bosco, 13, 41710 Utrera, Sevilla
                    </p>
                    <div className="h-64 w-full rounded-xl overflow-hidden border border-white/20">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6357.588006505689!2d-5.7779703!3d37.1813662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd127f0c6313e5b5%3A0x4dc8be9ee98a1198!2sSalesianos%20Utrera%20Colegio%20Nuestra%20Se%C3%B1ora%20del%20Carmen!5e0!3m2!1ses!2ses!4v1774451663999!5m2!1ses!2ses" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
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
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Acceso a datos</span> <b>09:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Desarrollo de interfaces</span> <b>10:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Prog. servicios y procesos</span> <b>11:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Prog. multimedia y dispositivos</span> <b>12:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Sistemas de gestión empresarial</span> <b>13:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Sostenibilidad</span> <b>14:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Digitalización</span> <b>16:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Inglés</span> <b>17:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Itinerario personal empleabilidad II</span> <b>18:00</b></li>
                    </ul>
                </AccordionItem>

                <AccordionItem 
                    title="2º DAW - Desarrollo de Aplicaciones Web" 
                    isOpen={openSection === '2daw'} 
                    onClick={() => toggleSection('2daw')}
                >
                    <ul className="space-y-2 text-sm">
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Desarrollo web entorno cliente</span> <b>10:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Desarrollo web entorno servidor</span> <b>11:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Despliegue de aplicaciones web</span> <b>12:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Diseño de interfaces web</span> <b>13:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Sostenibilidad</span> <b>14:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Digitalización</span> <b>16:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Inglés técnico</span> <b>17:00</b></li>
                        <li className="flex justify-between border-b border-white/5 pb-1"><span>Itinerario personal empleabilidad II</span> <b>18:00</b></li>
                    </ul>
                </AccordionItem>

            </div>
        </PageLayout>
    );
}