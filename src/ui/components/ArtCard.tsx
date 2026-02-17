import { Link } from 'react-router-dom';

interface Props {
    title: string;
    subtitle?: string;
    description?: string;
    image?: string;
    to: string;
}

export default function ArtCard({ title, subtitle, description, image, to }: Props) {
    return (
        <Link to={to} className="block w-full h-full">
            <article className="magic-card group">
                {/* IMAGEN DE FONDO */}
                {image ? (
                    <img src={image} alt={title} className="backdrop-img" />
                ) : (
                    // fallback si no hay imagen
                    <div className="backdrop-img w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-black" />
                )}

                <div className="card-content">
                    {/* SUBTITULO (Categoria) */}
                    {subtitle && <div className="card-category">{subtitle}</div>}
                    
                    {/* TITULO PRINCIPAL */}
                    <div className="card-title">{title}</div>
                    
                    {/* DESCRIPCION (Aparece al hover) */}
                    <div className="card-description">
                        <p className="line-clamp-2">{description || "Entrar al módulo"}</p>
                        <span className="ml-2">
                            {/* Icono Flecha SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="arrow-icon">
                                <path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}