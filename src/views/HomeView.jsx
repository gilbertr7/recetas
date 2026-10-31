import { useState } from "react";
import "./HomeView.css";
import Receta1 from "../components/Recetas/Receta1";
import Receta2 from "../components/Recetas/Receta2";
import data from "@emoji-mart/data";
import { init } from "emoji-mart";

init({ data });

const ANILLAS = Array.from({ length: 14 });

const RECETAS = [
  {
    id: 1,
    numero: "01",
    titulo: "Hamburguesa con queso",
    imagen: "/assets/images/hamburguesa.jpg",
    alt: "Hamburguesa con queso",
    color: "amarilla",
    Contenido: Receta1,
  },
  {
    id: 2,
    numero: "02",
    titulo: "Pizza margarita",
    imagen: "/assets/images/pizza.jpg",
    alt: "Pizza margarita",
    color: "azul",
    Contenido: Receta2,
  },
];

export default function HomeView() {
  const [recetaAbierta, setRecetaAbierta] = useState(null);

  const fecha = new Date().toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  function alternarReceta(numero) {
    setRecetaAbierta((actual) => (actual === numero ? null : numero));
  }

  return (
    <main className="libreta">
      <div className="libreta__espiral" aria-hidden="true">
        {ANILLAS.map((_, i) => (
          <span key={i} className="libreta__anilla" />
        ))}
      </div>

      <header className="home__cabecera">
        <p className="home__fecha">{fecha}</p>

        <h1 className="home__titulo">
          <em-emoji id="hamburger" set="apple" size="1em" />
          <span className="home__titulo-texto">
            Recetas <span className="home__ut">UT</span>
          </span>
          <em-emoji id="pizza" set="apple" size="1em" />
        </h1>

        <svg
          className="home__raya"
          viewBox="0 0 420 22"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M6 15C82 5 166 3 244 7c50 2.7 103 5 170 1"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M46 20c70-5 140-6 212-3"
            fill="none"
            stroke="#c2563a"
            strokeWidth="3"
            strokeLinecap="round"
            opacity=".5"
          />
        </svg>

        <p className="autor">por Gilberto Ruiz</p>
      </header>

      <div
        className={`home__recetas${
          recetaAbierta ? " home__recetas--con-abierta" : ""
        }`}
      >
        {RECETAS.map(
          ({ id, numero, titulo, imagen, alt, color, Contenido }) => {
            const abierta = recetaAbierta === id;

            return (
              <article
                key={id}
                className={`receta-card receta-card--${color}${
                  abierta ? " receta-card--abierta" : ""
                }`}
              >
                <span className="receta-card__cinta" aria-hidden="true" />
                <span className="receta-card__etiqueta" aria-hidden="true">
                  nº {numero}
                </span>

                <button
                  type="button"
                  className="receta-card__boton"
                  onClick={() => alternarReceta(id)}
                  aria-expanded={abierta}
                  aria-controls={`contenido-receta-${id}`}
                >
                  <span className="receta-card__titulo">{titulo}</span>

                  <span className="receta-card__foto">
                    <img
                      className="receta-card__imagen"
                      src={imagen}
                      alt={alt}
                    />
                  </span>

                  <span className="receta-card__enlace">
                    {abierta ? "Cerrar receta ↑" : "Ver receta →"}
                  </span>
                </button>

                <div
                  id={`contenido-receta-${id}`}
                  className="receta-card__contenido"
                  hidden={!abierta}
                >
                  <Contenido />
                </div>
              </article>
            );
          },
        )}
      </div>
    </main>
  );
}
