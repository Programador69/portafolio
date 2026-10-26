import estilos from "../estilos/Proyectos.module.css";
import { ListaTrabajos } from "../componentes";

export function Proyectos() {
    return (
        <>
            <div className={estilos.divProyectos}>
                <span className={estilos.spanTop}>⬤ Archivos de trabajo</span>
                <h2 className={estilos.titulo}>Proyectos personales y para terceros</h2>
                <p className={estilos.parrafo}>
                    Selección de proyectos profesionales (desarrollados para empresas y negocios) y proyectos personales que reflejan 
                    mi versatilidad técnica. A lo largo de mi trayectoria he trabajado de forma integral en el ecosistema de desarrollo, 
                    abarcando Frontend, Backend, gestión de Bases de Datos y VPS, adaptándome a distintas tecnologías según las necesidades 
                    de cada solución. Nota: Algunos proyectos cuentan con enlaces públicos para su visualización, mientras que otros se 
                    mantienen privados o locales por acuerdos de confidencialidad.
                </p>

                <div className={estilos.divCards} >
                    <div>
                        <span>+25</span>
                        <p>Proyectos realizados</p>
                    </div>

                    <div>
                        <span>+8</span>
                        <p>Proyectos activos</p>
                    </div>

                    <div>
                        <span>3</span>
                        <p>Años de experiencia</p>
                    </div>
                </div>
            </div>

            <ListaTrabajos />
        </>
    )
}