import estilos from '../estilos/Inicio.module.css';
import MiIcono from "../assets/logo.svg";
import IconoTexto from "../assets/iconoTexto.png";

type InicioProps= {
    setPage: React.Dispatch<React.SetStateAction<string | null>>;
}

export function Inicio({setPage}: InicioProps) {
    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        const element = event.target as HTMLAnchorElement;
        if (element.href) {
            setPage(element.id);
            window.history.pushState(null, "", element.href);
        }
    }

    return (
        <div className={estilos.inicio}>
            <span className={estilos.spanTop}>⬤ Mente abierta ante cualquier desafío</span>
            <div className={estilos.divTexto}>
                <h2 className={estilos.titulo}>Crear software que <span>simplifique la vida</span>, inspire confianza y entienda al usuario.</h2>
                <p>Soy un desarrollador Full Stack competente para crear soluciones en cada nivel y desarrollar aplicaciones completas desde el principio. Dispongo de proyectos en producción que operan en tiempo real para compañías y empresas. Asimismo, elaboro sitios y aplicaciones que se ajustan a lo que cada empresa o negocio necesita y diseño páginas web intuitivas.</p>
                <div id='botones' className={estilos.divBotones} onClick={handleClick}>
                    {/* <button>Mis Proyectos</button>
                    <button>Mi Diferencial</button> */}
                    <a id='proyectos' href='/proyectos'>Mis Proyectos</a>
                    <a id='diferenciador' href='/diferenciador'>Mi Diferencial</a>
                </div>
            </div>

            <div className={estilos.divAnimacion}>
                <img src={MiIcono} alt="icono" className={estilos.icono} />
                <div className={estilos.divTextoAnimacion}>
                    <img src={IconoTexto} alt="icono" className={estilos.iconoTexto} />
                    <h3>Filosofia de codigo limpio</h3>
                    <p>Fácil de leer, comprender, mantener y modificar por cualquier persona (o por el mismo autor en el futuro)</p>
                </div>
            </div>
        </div>
    )
}