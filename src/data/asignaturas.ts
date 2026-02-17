// defino aqui tb xk el import ya me estaba dando dolor d cabeza
interface Asignatura {
    id: string;
    nombre: string;
    emoji: string;
    color: string;
}

// bbdd local
export const ASIGNATURAS_DB: Record<string, Asignatura[]> = {
    '2daw-2026': [
        // Poner en caso d q m lo pasen
    ],
    '2dam-2026': [
        // Poner en caso d q m lo pasen
    ],
    '1dam-2026': [
        { id: 'marcas', nombre: 'Lenguaje de Marcados', emoji: '🎨', color: 'bg-red-200' },
        // { id: 'bbdd', nombre: 'Bases de Datos', emoji: '🗄️', color: 'bg-indigo-200' },
    ],
    // ahora añado mas
};