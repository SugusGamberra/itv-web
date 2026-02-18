import type { Pregunta } from '../types/index';
import lenguajeMarcas from './preguntas/lenguaje-marcas.json';
import empleabilidad from './preguntas/empleabilidad.json';
// importar el resto d json cuando los tenga

export const MAPA_PREGUNTAS: Record<string, Pregunta[]> = {
    'marcas': lenguajeMarcas as Pregunta[],
    'empleabilidad': empleabilidad as Pregunta[]
  // importar el resto segun lleguen aqui
};