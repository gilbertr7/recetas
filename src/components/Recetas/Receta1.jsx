import React from 'react'
import "./Receta1.css";

export default function Receta1() {
  return (
    <article className="receta">
      <p className="receta__descripcion">
        Una hamburguesa casera con queso derretido y tus ingredientes favoritos.
      </p>
      <section className="receta__ingredientes">
        <h3 className="receta__subtitulo">Ingredientes</h3>

        <ul className="receta__lista">
          <li>1 pan para hamburguesa</li>
          <li>150 g de carne molida de res</li>
          <li>1 rebanada de queso</li>
          <li>1 hoja de lechuga</li>
          <li>2 rodajas de tomate</li>
          <li>Mayonesa y kétchup al gusto</li>
          <li>Sal y pimienta al gusto</li>
        </ul>
      </section>
      <section className="receta__preparacion">
        <h3 className="receta__subtitulo">Preparación</h3>

        <ol className="receta__lista">
          <li>Lava la lechuga y el tomate. Corta el tomate en rodajas.</li>
          <li>
            Forma una hamburguesa con la carne molida y sazona con sal y
            pimienta.
          </li>
          <li>
            Calienta una sartén a fuego medio y cocina la carne por ambos lados
            hasta que alcance 71 °C en el centro, comprobándolo con un
            termómetro de cocina.
          </li>
          <li>
            Coloca el queso sobre la carne al final de la cocción y deja que
            se derrita.
          </li>
          <li>Tuesta ligeramente el pan y unta la mayonesa y el kétchup.</li>
          <li>
            Coloca la carne con queso, la lechuga y el tomate sobre el pan.
            Cierra la hamburguesa y sirve caliente.
          </li>
        </ol>
      </section>
    </article>
  );
}
