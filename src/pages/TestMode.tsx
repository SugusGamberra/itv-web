import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { MAPA_PREGUNTAS } from '../data/indicePreguntas';
import { useTestEngine } from '../app/hooks/useTestEngine';
import type { ModoTest } from '../types/index';

export default function TestMode() {
    const { modo, asignaturaID } = useParams();
    const bateriaPreguntas = MAPA_PREGUNTAS[asignaturaID || ''] || [];

    const { 
        preguntaActual, 
        indiceActual, 
        total, 
        responder, 
        respuestas, 
        siguiente,
        anterior,
        finalizado, 
        nota,
        reiniciar
    } = useTestEngine(bateriaPreguntas, modo as ModoTest);

    // Soporte teclado (a,b,c,d)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (['a', 'b', 'c', 'd'].includes(e.key.toLowerCase())) {
                responder(e.key.toLowerCase() as 'a' | 'b' | 'c' | 'd');
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [responder]);

    if (!preguntaActual && !finalizado) return <div className="text-center pt-20 text-white animate-pulse">Invocando preguntas...</div>;

    // PANTALLA RESULTADOS
    if (finalizado) {
        const notaNum = parseFloat(nota);
        const aprobado = notaNum >= 5;

        return (
            <div className="w-full min-h-[80vh] flex flex-col items-center justify-center animate-in zoom-in-95 duration-500">
                <div className="p-12 text-center max-w-lg w-full">
                    {/* Icono gigante */}
                    <div className="text-8xl mb-8 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                        {aprobado ? '🫦' : '💀'}
                    </div>
                    
                    {/* titulo */}
                    <h2 className="text-5xl font-serif font-bold mb-4 text-white tracking-wide">
                        Test Finalizado
                    </h2>
                    
                    {/* nota grandota */}
                    <div className={`text-9xl font-black mb-6 ${aprobado ? 'text-emerald-500' : 'text-[#ff3333]'} drop-shadow-2xl tracking-tighter`}>
                        {nota}
                    </div>
                    
                    <p className="opacity-50 mb-12 font-sans text-lg tracking-wide text-white">
                        {aprobado ? "Vehículo apto. Puedes circular." : "Vehículo no apto. Toca volver al taller."}
                    </p>

                    {/* BOTONES */}
                    <div className="flex flex-col gap-4 max-w-xs mx-auto w-full">
                        {/* Boton Principal: Blanco Hueso */}
                        <button 
                            onClick={reiniciar} 
                            className="bg-[#fbf7ef] text-black py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all"
                        >
                            Repetir Test
                        </button>
                        
                        {/* Boton Secundario: Texto simple */}
                        <Link 
                            to=".." 
                            className="py-2 text-center text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold"
                        >
                            Volver al inicio
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // PANTALLA TEST (PREGUNTAS)
    return (
        <div className="w-full max-w-4xl mx-auto pt-8 pb-20 flex flex-col items-center">
            
            {/* Barra superior */}
            <div className="w-full mb-8 flex items-center justify-between text-white/40 font-bold uppercase tracking-widest text-xs">
                <Link to=".." className="hover:text-white transition-colors flex items-center gap-2">
                    <ArrowLeft size={16} /> Salir
                </Link>
                <span>Pregunta {indiceActual + 1} / {total}</span>
                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">{modo?.replace('_', ' ')}</span>
            </div>

            {/* tarjeta pregunta */}
            <div className="w-full bg-[#0a0a0a] border border-white/10 rounded-[30px] p-8 sm:p-14 shadow-2xl relative overflow-hidden">
                
                {/* Deco de fondo sutil */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                {/* Texto pregunta (Serif) */}
                <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-12 leading-relaxed text-[#fbf7ef]">
                    {preguntaActual.pregunta}
                </h2>

                {/* Opciones */}
                <div className="grid gap-4 relative z-10">
                    {preguntaActual.opciones.map((opcion) => {
                        const isSelected = respuestas[preguntaActual.id] === opcion.id;
                        const isCorrect = opcion.id === preguntaActual.correcta;
                        
                        // Logica de colores
                        let btnClass = "border border-white/10 bg-white/5 hover:bg-white/10 text-white/70"; // Default
                        
                        if (modo === 'repaso' && isSelected) {
                            if (isCorrect) btnClass = "bg-emerald-900/40 border-emerald-500/50 text-emerald-200";
                            else btnClass = "bg-red-900/40 border-red-500/50 text-red-200";
                        } else if (isSelected) {
                            // seleccionado normal
                            btnClass = "bg-[#fbf7ef] text-black border-[#fbf7ef] shadow-[0_0_20px_rgba(255,255,255,0.15)]";
                        }

                        return (
                            <button
                                key={opcion.id}
                                onClick={() => responder(opcion.id)}
                                className={`w-full text-left p-6 rounded-2xl transition-all duration-200 flex items-center gap-6 text-lg group ${btnClass}`}
                            >
                                {/* letra de la opcion */}
                                <span className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${isSelected ? 'bg-black text-white' : 'bg-white/10 text-white/40 group-hover:bg-white/20'}`}>
                                    {opcion.id}
                                </span>
                                <span className="font-sans font-medium">{opcion.texto}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Explicacion (solo repaso) */}
                {modo === 'repaso' && respuestas[preguntaActual.id] && (
                    <div className="mt-10 p-8 bg-[#151520] rounded-2xl border border-white/10 flex gap-5 text-indigo-200 animate-in fade-in slide-in-from-top-2">
                        <AlertCircle className="shrink-0 mt-1 text-indigo-400" size={24} />
                        <div>
                            <p className="font-bold mb-2 uppercase tracking-widest text-xs text-indigo-400">Explicación</p>
                            <p className="text-lg leading-relaxed opacity-90 font-serif text-white/90">{preguntaActual.explicacion}</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Navegacion inferior (solo repaso) */}
            {modo === 'repaso' && (
                <div className="flex gap-4 mt-10">
                    <button 
                        onClick={anterior} 
                        disabled={indiceActual === 0} 
                        className="px-8 py-3 rounded-full text-white/40 hover:text-white disabled:opacity-20 transition uppercase tracking-widest text-xs font-bold"
                    >
                        Anterior
                    </button>
                    <button 
                        onClick={siguiente} 
                        className="px-10 py-3 bg-white text-black rounded-full hover:scale-105 transition uppercase tracking-widest text-xs font-bold shadow-lg"
                    >
                        Siguiente
                    </button>
                </div>
            )}
        </div>
    );
}