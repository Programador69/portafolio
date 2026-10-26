import { Nav, Footer } from './componentes';
import { useState } from "react";
import { Inicio, Proyectos, Diferenciador, Error404 } from './paginas';
import './App.css';

function App() {
  const [page, setPage] = useState<string | null>("inicio");

  return (
    <>
      <Nav page={page} setPage={setPage} />
      <main>
        {
          page === "inicio" ? <Inicio setPage={setPage} /> :
            page === "proyectos" ? <Proyectos /> :
            page === "diferenciador" ? <Diferenciador /> : <Error404 />
              // page === "contacto" ? <Contacto /> :
        }
      </main>
      
      <Footer />
    </>
  )
}

export default App
