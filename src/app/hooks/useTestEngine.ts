import { useState, useEffect, useCallback } from 'react';
import type { Pregunta, ModoTest } from '../../types/index';

export const useTestEngine = (todasLasPreguntas: Pregunta[], modo: ModoTest) => {
    const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
    const [indiceActual, setIndiceActual] = useState(0);
    const [respuestas, setRespuestas] = useState<Record<number, 'a' | 'b' | 'c' | 'd'>>({});
    const [finalizado, setFinalizado] = useState(false);

    // barajar
    const shuffle = (array: Pregunta[]) => {
        return [...array].sort(() => Math.random() - 0.5);
    };

    // preparacion preguntas
    useEffect(() => {
        if (!todasLasPreguntas || todasLasPreguntas.length === 0) return;

        let seleccion: Pregunta[] = [];

        switch (modo) {
            case 'examen_easy':
            case 'examen_hard':
                seleccion = shuffle(todasLasPreguntas).slice(0, 30);
                break;
            case 'puntuar':
                seleccion = shuffle(todasLasPreguntas);
                break;
            case 'repaso':
            default:
                seleccion = [...todasLasPreguntas];
                break;
        }
        
        setPreguntas(seleccion);
        setIndiceActual(0);
        setRespuestas({});
        setFinalizado(false);
    }, [modo, todasLasPreguntas]); 

    // respuestas
    const responder = useCallback((opcionId: 'a' | 'b' | 'c' | 'd') => {
        const preguntaActual = preguntas[indiceActual];
        
        // si acabo o la pregunta no existe q no haga nada
        if (finalizado || !preguntaActual) return;

        // si no es modo repaso y la pregunta esta respondida ignorar click para evitar bugs
        if (modo !== 'repaso' && respuestas[preguntaActual.id]) return;

        // guardar la respuesta
        setRespuestas(prev => ({
            ...prev,
            [preguntaActual.id]: opcionId
        }));

        // si no es repaso saltar a proxima pregunta automaticamente
        if (modo !== 'repaso') {
            setTimeout(() => {
                setIndiceActual(prevIndex => {
                    // verificar si es la ultima pregunta
                    if (prevIndex >= preguntas.length - 1) {
                        setFinalizado(true); // FIN!!!
                        return prevIndex; // parar avance pa q no se pete
                    }
                    return prevIndex + 1; // avanzar
                });
            }, 300); 
        }
    }, [finalizado, indiceActual, preguntas, modo, respuestas]);

    // navegacion manual para modo repaso
    const siguiente = () => {
        if (indiceActual < preguntas.length - 1) setIndiceActual(prev => prev + 1);
        else setFinalizado(true);
    };
    
    const anterior = () => {
        if (indiceActual > 0) setIndiceActual(prev => prev - 1);
    };

    // calculo nota
    const calcularNota = () => {
        if (preguntas.length === 0) return "0.00";

        let aciertos = 0;
        let fallos = 0;

        preguntas.forEach(p => {
            const userRes = respuestas[p.id];
            if (userRes) {
                if (userRes === p.correcta) {
                    aciertos++;
                } else {
                    fallos++;
                }
            }
        });

        // modo basto: x cada 3 fallos resta 1
        if (modo === 'examen_hard') {
            const penalizacion = Math.floor(fallos / 3);
            let puntuacionNeta = aciertos - penalizacion;
            if (puntuacionNeta < 0) puntuacionNeta = 0; 
            return ((puntuacionNeta / preguntas.length) * 10).toFixed(2);
        }

        // modo normal
        return ((aciertos / preguntas.length) * 10).toFixed(2);
    };

    const reiniciar = () => window.location.reload();

    return {
        preguntas,
        preguntaActual: preguntas[indiceActual],
        indiceActual,
        total: preguntas.length,
        respuestas,
        responder,
        siguiente,
        anterior,
        finalizado,
        nota: calcularNota(),
        reiniciar
    };
};