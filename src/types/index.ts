export type GradoID = '1dam' | '1daw' | '2daw' | '2dam';

export interface Grado {
    id: GradoID;
    titulo: string;
    descripcion: string;
}

export interface CursoEscolar {
    year: number;
    titulo: string;
}

export interface Asignatura {
    id: string;
    nombre: string;
    emoji: string;
    color: string;
}

export interface Opcion {
    id: 'a' | 'b' | 'c' | 'd';
    texto: string;
}

export interface Pregunta {
    id: number;
    pregunta: string;
    opciones: Opcion[];
    correcta: 'a' | 'b' | 'c' | 'd';
    explicacion?: string;
}

export type ModoTest = 
    | 'repaso'
    | 'puntuar'
    | 'examen_easy'
    | 'examen_hard';