import estilos from "../../estilos/Proyecto.module.css";

type ProyectoProps = {
    titulo: string;
    fecha: string;
    descripcion: string;
    tecnologias: Array<string>;
    url: string;
}

export function Proyecto ({titulo, fecha, descripcion, tecnologias, url}: ProyectoProps) {
    return (
        <article className={estilos.articleProyecto} >
            {
                url.startsWith("https") ? <div className={estilos.iframeWrapper} ><iframe className={estilos.iframe} src={url} width={300} height={300} ></iframe></div> : <img className={estilos.img} src={url} width={300} height={300} />
            }
            <span className={estilos.fecha} >{fecha}</span>
            <h3 className={estilos.titulo} >{titulo}</h3>
            <p className={estilos.descripcion} >{descripcion}</p>
            <div className={estilos.divTecnologias}>
                {
                    tecnologias.map((tec) => {
                        return <span>{tec}</span>
                    })
                }
            </div>
            {
                url.startsWith("https") ? <a href={url} rel="noreferrer noopener" target="_BLANK" className={estilos.enlace} >Visitala haciendo click aquí.</a> : <></>
            }
        </article>
    )
}