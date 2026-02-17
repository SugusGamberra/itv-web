// defino aqui tb xk el import ya me estaba dando dolor d cabeza
interface Asignatura {
    id: string;
    nombre: string;
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
        { id: 'marcas', nombre: 'Lenguaje de Marcados' },
        { id: 'bbdd', nombre: 'Bases de Datos' },
        { id: 'programacion', nombre: 'Programación' },
        { id: 'entornos', nombre: 'Entornos de Desarrollo'},
        { id: 'sistemas', nombre: 'Sistemas Informáticos'},
        { id: 'jesubuntu', nombre: 'Dios Jesubuntu'}
    ],
};