import estilos from "../estilos/Nav.module.css";
import React from "react";
import { useState } from "react";

type NavProps = {
    page: string | null;
    setPage: React.Dispatch<React.SetStateAction<string | null>>;
};

export function Nav({ page, setPage }: NavProps) {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const handleClick = (event: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
        event.preventDefault();
        const element = event.target as HTMLAnchorElement;

        if (element.href) {
            setPage(element.id);
            window.history.pushState(null, "", element.href);
        }
    };

    const handleClickMobile = (event: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
        event.preventDefault();
        const element = event.target as HTMLAnchorElement;

        if (element.href) {
            setPage(element.dataset.valor!);
            window.history.pushState(null, "", element.href);
            setMenuAbierto(false);
        }
    }

    return (
        <nav className={estilos.nav}>
            <div>
                <h1 className={estilos.h1}>
                    Manolo Ortiz
                </h1>
                <span className={estilos.span}>Trabajo Presencial / Remoto / Freelance</span>    
            </div>
            <ul className={estilos.laptop} onClick={handleClick} >
                <li><a id="inicio" className={page === "inicio" ? estilos.isActive : estilos.notActive} href="/inicio">/Inicio</a></li>
                <li><a id="proyectos" className={page === "proyectos" ? estilos.isActive : estilos.notActive} href="/proyectos">/Proyectos</a></li>
                {/* <li><a id="contacto" className={page === "contacto" ? estilos.isActive : estilos.notActive} href="/contacto">/Contacto</a></li> */}
                <li><a id="diferenciador" className={page === "diferenciador" ? estilos.isActive : estilos.notActive} href="/diferenciador">/Diferenciador</a></li>
            </ul>

            <div className={`${estilos.mobile} ${menuAbierto ? estilos.abierto : ""}`}>
                <button
                    className={estilos.hamburguesa}
                    onClick={() => setMenuAbierto((prev) => !prev)}
                    aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuAbierto}
                >
                    {menuAbierto ? "✕" : "☰"}
                </button>
                <ul onClick={handleClickMobile}>
                    <li><a data-valor="inicio" className={page === "inicio" ? estilos.isActive : estilos.notActive} href="/inicio">/Inicio</a></li>
                    <li><a data-valor="proyectos" className={page === "proyectos" ? estilos.isActive : estilos.notActive} href="/proyectos">/Proyectos</a></li>
                    <li><a data-valor="diferenciador" className={page === "diferenciador" ? estilos.isActive : estilos.notActive} href="/diferenciador">/Diferenciador</a></li>
                </ul>
            </div>

        </nav>
    )
}