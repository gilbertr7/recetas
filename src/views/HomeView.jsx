import { useState } from "react";
import "./HomeView.css";
import Receta1 from "../components/Recetas/Receta1";
import Receta2 from "../components/Recetas/Receta2";
import data from "@emoji-mart/data";
import { init } from "emoji-mart";

init({ data });

export default function HomeView() {
  const [recetaAbierta, setRecetaAbierta] = useState(null);

  function alternarReceta(numero) {
    setRecetaAbierta((actual) => (actual === numero ? null : numero));
  }
  
  return (
    <main>
      <div>
        <h1 className="home__titulo">
          <em-emoji id="hamburger" set="apple" size="1em"></em-emoji>
          {" Recetas UT "}
          <em-emoji id="pizza" set="apple" size="1em"></em-emoji>
        </h1>
        <p className="autor">Por Gilberto Ruiz</p>
      </div>
{      /**Recetas */}
      <div className="home__recetas">
{        /**Primera receta */}
        <div className={`receta-card receta-card--amarilla${recetaAbierta === 1 ? " receta-card--abierta" : ""}`}>
          <button
            type="button"
            className="receta-card__boton"
            onClick={() => alternarReceta(1)}
            aria-expanded={recetaAbierta === 1}
            aria-controls="contenido-receta-1"
          >
            <span className="receta-card__titulo">Hamburguesa con queso</span>

            <img
              className="receta-card__imagen"
              src="/assets/images/hamburguesa.jpg"
              alt="Hamburguesa con queso"
            />

            <span className="receta-card__enlace">
              {recetaAbierta === 1 ? "Cerrar receta ↑" : "Ver receta…"}
            </span>
          </button>

          <div id="contenido-receta-1" hidden={recetaAbierta !== 1}>
            <Receta1 />
          </div>
        </div>
{        /**Segunda receta */}
        <div className={`receta-card receta-card--azul${recetaAbierta === 2 ? " receta-card--abierta" : ""}`}>
          <button
            type="button"
            className="receta-card__boton"
            onClick={() => alternarReceta(2)}
            aria-expanded={recetaAbierta === 2}
            aria-controls="contenido-receta-2"
          >
          <span className="receta-card__titulo">Pizza margarita</span>

          <img className="receta-card__imagen" src="/assets/images/pizza.jpg" alt="Pizza margarita" />

          <span className="receta-card__enlace">
            {recetaAbierta === 2 ? "Cerrar receta ↑" : "Ver receta…"}
          </span>
          </button>
          <div id="contenido-receta-2" hidden={recetaAbierta !== 2}>
            <Receta2 />
          </div>
        </div>
      </div>
    </main>
  );
}
