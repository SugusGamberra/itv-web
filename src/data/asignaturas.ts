// defino aqui tb xk el import ya me estaba dando dolor d cabeza
interface Asignatura {
    id: string;
    nombre: string;
}

// bbdd local
export const ASIGNATURAS_DB: Record<string, Asignatura[]> = {
    '2daw-2026': [
        { id: 'cliente', nombre: 'Desarrollo Web Entorno Cliente'},
        { id: 'servidor', nombre: 'Desarrollo Web Entorno Servidor'},
        { id: 'despliegue', nombre: 'Despliegue de Aplicaciones Web'},
        { id: 'interfaces', nombre: 'Diseño de Interfaces Web'},
        { id: 'sostenibilidad', nombre: 'Sostenibilidad'},
        { id: 'digitalizacion', nombre: 'Digitalización'},
        { id: 'ingles', nombre: 'Inglés Técnico'},
        { id: 'empleabilidadII', nombre: 'Itinerario Personal Empleabilidad II'}
    ],
    '2dam-2026': [
        { id: 'datos', nombre: 'Acceso a Datos'},
        { id: 'di', nombre: 'Desarrollo de Interfaces'},
        { id: 'servproc', nombre: 'Prog. Servicios y Procesos'},
        { id: 'multdisp', nombre: 'Prog. Multimedia y Dispositivos'},
        { id: 'gestion', nombre: 'Sistemas de Gestión Empresarial'},
        { id: 'sost', nombre: 'Sostenibilidad'},
        { id: 'digt', nombre: 'Digitalización'},
        { id: 'ing', nombre: 'Inglés'},
        { id: 'ipe', nombre: 'Itinerario Personal Empleabilidad II'}
    ],
    '1dam-2026': [
        { id: 'marcas', nombre: 'Lenguaje de Marcados' },
        { id: 'bbdd', nombre: 'Bases de Datos' },
        { id: 'programacion', nombre: 'Programación' },
        { id: 'entornos', nombre: 'Entornos de Desarrollo'},
        { id: 'sistemas', nombre: 'Sistemas Informáticos'},
        { id: 'jesubuntu', nombre: 'Dios Jesubuntu'},
        { id: 'empleabilidad', nombre: 'Empleabilidad'}
    ],
};