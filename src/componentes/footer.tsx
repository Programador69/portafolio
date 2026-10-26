import estilos from '../estilos/Footer.module.css';

export function Footer() {
    return (
        <footer className={estilos.footer}>
            <h5>Página creada por Manolo Ortiz</h5>
            <p>Logotipo de la sección de filosofía Designed by Magnific: <a href="https://www.magnific.com" target="_blank" rel="noopener noreferrer">www.magnific.com</a></p>
        </footer>
    )
}