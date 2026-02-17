import type { Pregunta } from '../types/index';
import lenguajeMarcas from './preguntas/lenguaje-marcas.json';
// importar el resto d json cuando los tenga

export const MAPA_PREGUNTAS: Record<string, Pregunta[]> = {
    'marcas': lenguajeMarcas as Pregunta[],
  // 'dwec': dwec as Pregunta[], etc
};