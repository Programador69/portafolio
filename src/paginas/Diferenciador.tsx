import estilos from "../estilos/Diferenciador.module.css";

export function Diferenciador() {
    return (
        <div className={estilos.divContenedor}>
            <span className={estilos.spanTop}>⬤ Garantía de Calidad</span>
            <div className={estilos.divTexto} >
                <h2 className={estilos.h2} >IA como copiloto, no como piloto automático: Mi enfoque en la creación de software</h2>
                <p className={estilos.p}>No uso la IA para dejar que ella trabaje por mi o para copiar y pegar codigo. Si la uso para pedir ayuda, 
                    resolver dudas, buscar mejores practicas, encontrar soluciones a problemas, etc. Pero no le dejo que haga el trabajo 
                    por si sola y tampoco pongo las soluciones que me recomendo sin antes revisarlas primero.
                </p>
                <span className={estilos.span}>Si el cliente quiere un trabajo rapido y no le afecta o no le preocupa la seguridad de su programa o las practicas que emplea,
                    si la puedo usar para delegarle las tareas o el programa que me pida el cliente pero dejo claro que es bajo su propio riesgo y 
                    no tiene garantia de mi parte.
                </span>

                <div className={estilos.contenedorBotones}>
                    <a href="mailto:manolo1025@protonmail.com" rel="noreferrer noopener" target="_BLANK" className={estilos.link1}>Software con ayuda de IA</a>
                    <a href="mailto:manolo1025@protonmail.com" rel="noreferrer noopener" target="_BLANK" className={estilos.link2}>Software hecha por la IA</a>
                </div>
            </div>

            <div className={estilos.divImg}>
                <img src="paginaDiferenciador.jpg" alt="Imagen de un escritorio de un Desarrollador de Software" />
            </div>
        </div>
    )
}