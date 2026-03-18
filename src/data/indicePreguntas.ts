//AÑO 2026

import type { Pregunta } from '../types/index';
import lenguajeMarcas from './preguntas/lenguaje-marcas.json';
import empleabilidad from './preguntas/empleabilidad.json';
import servproc from './preguntas/servproc.json';
import bbdd from './preguntas/bbdd.json';
import programacion from './preguntas/programacion.json';

// AÑO 2025:
import entornos from './preguntas/entornos-2025.json';
import sistemas from './preguntas/sistemas-2025.json';

// importar el resto d json cuando los tenga

export const MAPA_PREGUNTAS: Record<string, Pregunta[]> = {
  // 2026
    'marcas': lenguajeMarcas as Pregunta[],
    'empleabilidad': empleabilidad as Pregunta[],
    'servproc' : servproc as Pregunta[],
    'bbdd' : bbdd as Pregunta[],
    'programacion' : programacion as Pregunta[],
  // importar el resto segun lleguen aqui

  //2025
    'entornos-2025' : entornos as Pregunta[],
    'sistemas-2025' : sistemas as Pregunta[]
};