import "./Receta2.css";

export default function Receta2() {
  return (
    <article className="receta2">
      <p className="receta2__descripcion">
        Una pizza casera con tomate, mozzarella y albahaca fresca.
      </p>
      <section className="receta2__seccion">
        <h3 className="receta2__subtitulo">Ingredientes</h3>
        <ul className="receta2__lista">
          <li>1 base de masa para pizza</li>
          <li>4 cucharadas de salsa de tomate</li>
          <li>150 g de queso mozzarella</li>
          <li>Hojas de albahaca fresca</li>
          <li>1 cucharadita de aceite de oliva</li>
          <li>Sal al gusto</li>
        </ul>
      </section>
      <section className="receta2__seccion">
        <h3 className="receta2__subtitulo">Preparación</h3>
        <ol className="receta2__lista">
          <li>Precalienta el horno según las indicaciones de la masa.</li>
          <li>Coloca la base en una bandeja y extiende la salsa de tomate.</li>
          <li>Distribuye la mozzarella y agrega el aceite y la sal.</li>
          <li>
            Hornea según las indicaciones de la base, hasta que la masa esté
            cocida y el queso se haya derretido.
          </li>
          <li>Añade las hojas de albahaca al servir.</li>
        </ol>
      </section>
    </article>
  );
}
