import { useParams, Link } from 'react-router-dom';
import ArtCard from '../ui/components/ArtCard';
import PageLayout from '../ui/layout/PageLayout';
import { ASIGNATURAS_DB } from '../data/asignaturas';

// imagenes pa asignaturas de 1º
import imgC2 from '../assets/images/c2.jpg';
import imgC3 from '../assets/images/c3.jpg';
import imgC4 from '../assets/images/c4.jpg';
import imgC5 from '../assets/images/c5.jpg';
import imgC6 from '../assets/images/c6.jpg';
import imgC7 from '../assets/images/c7.jpg';
import imgC8 from '../assets/images/c8.jpg';

// imagenes para 2º DAW
import imgD1 from '../assets/images/d1.jpg';
import imgD2 from '../assets/images/d2.jpg';
import imgD3 from '../assets/images/d3.jpg';
import imgD4 from '../assets/images/d4.jpg';
import imgD5 from '../assets/images/d5.jpg';
import imgD6 from '../assets/images/d6.jpg';
import imgD7 from '../assets/images/d7.jpg';
import imgD8 from '../assets/images/d8.jpg';
import imgD9 from '../assets/images/d9.jpg';

// img para 2ºdam
import imgE1 from '../assets/images/e1.jpg';
import imgE2 from '../assets/images/e2.jpg';
import imgE3 from '../assets/images/e3.jpg';
import imgE4 from '../assets/images/e4.jpg';
import imgE5 from '../assets/images/e5.jpg';
import imgE6 from '../assets/images/e6.jpg';
import imgE7 from '../assets/images/e7.jpg';
import imgE8 from '../assets/images/e8.jpg';
import imgE9 from '../assets/images/e9.jpg';
import imgE10 from '../assets/images/e10.jpg';

const IMAGENES_ASIGNATURAS = [imgC2, imgC3, imgC4, imgC5, imgC6, imgC7, imgC8];
const IMG_DAW = [imgD1, imgD2, imgD3, imgD4, imgD5, imgD6, imgD7, imgD8, imgD9];
const IMG_DAM = [imgE1, imgE2, imgE3, imgE4, imgE5, imgE6, imgE7, imgE8, imgE9, imgE10];

export default function SeleccionAsignaturas() {
    const { gradoID, year } = useParams();
    const dbKey = `${gradoID}-${year}`;
    const asignaturas = ASIGNATURAS_DB[dbKey] || [];

    const getTitulo = () => {
        if (gradoID === '1dam') return '1º DAM/DAW';
        if (gradoID === '2dam') return '2º DAM';
        if (gradoID === '2daw') return '2º DAW';
        return gradoID;
    };

    const getImagenesCurso = () => {
        if (gradoID === '2daw') return IMG_DAW;
        if (gradoID === '2dam') return IMG_DAM;
        return IMAGENES_ASIGNATURAS;
    };

    const imagenesActuales = getImagenesCurso();

    return (
        <PageLayout backTo={`/${gradoID}`} backText="Volver atrás">
            
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-serif font-black capitalize mb-2 drop-shadow-sm text-white">
                    {getTitulo()} 
                </h1>
                <p className="text-lg opacity-60 font-medium text-white mb-4">Asignaturas del Curso {year}</p>

                <Link 
                    to="/info-examenes"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
                >
                    Info Exámenes
                </Link>

            </div>

            {asignaturas.length === 0 ? (
                <div className="glass-card p-12 text-center rounded-3xl max-w-2xl mx-auto bg-white/5 border border-white/10">
                    <p className="text-2xl opacity-60 font-bold text-white">🚫 No hay asignaturas registradas</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {asignaturas.map((asig, index) => (
                        <ArtCard 
                            key={asig.id} 
                            title={asig.nombre} 
                            subtitle="Asignatura Troncal"
                            to={`/${gradoID}/${year}/${asig.id}`}
                            // rotar imagene spa que no sean todas iguales
                            image={imagenesActuales[index % imagenesActuales.length]}
                        />
                    ))}
                </div>
            )}
        </PageLayout>
    );
}