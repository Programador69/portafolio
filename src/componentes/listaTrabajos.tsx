import { Proyecto } from "./extras/proyecto";
import data from "../data/trabajos.json";
import estilos from "../estilos/ListaTrabajos.module.css";

export function ListaTrabajos() {
    return (
        <div className={estilos.listaTrabajos}>
            {
                data.map(dato => {
                    return (
                        <Proyecto 
                            titulo={dato.proyecto} 
                            fecha={dato.periodo} 
                            descripcion={dato.descripcion} 
                            tecnologias={dato.tecnologiasPrincipales} 
                            url={dato.url} 
                        />
                    )
                })
            }
        </div>
    )
}