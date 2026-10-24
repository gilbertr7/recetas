import React from "react";
import "./HomeView.css";
import Receta1 from "../components/Recetas/Receta1";
import Receta2 from "../components/Recetas/Receta2";
import data from "@emoji-mart/data";
import { init } from "emoji-mart";

init({ data });

export default function HomeView() {
  return (
    <div>
      <h1 className="home__titulo">
        <em-emoji id="hamburger" set="apple" size="1em"></em-emoji>
        {" Recetas UT "}
        <em-emoji id="pizza" set="apple" size="1em"></em-emoji>
      </h1>
      <p className="autor">Por Gilberto Ruiz</p>
    </div>
  );
}
