import "./styles.css";
import TareaForm from "./components/tareasForm";
import React, { useState } from "react";
import Tarea from "./components/tarea";

export default function App() {
  const [listaTarea, setListaTarea] = useState([]);

  const nuevaTarea = (tarea) => {
    setListaTarea([tarea, ...listaTarea]);
  };

  const borrar = (id) => {
    const listaFiltrada = listaTarea.filter((e, index) => index !== id);
    setListaTarea(listaFiltrada);
  };
  const actualizarTarea = (id, tarea) => {
    const listaActualizada = listaTarea.map((e, index) => {
      if (index === id) {
        e = tarea;
      }
      return e;
    });
    setListaTarea(listaActualizada);
  };
  return (
    <div className="App">
      <TareaForm nuevaTarea={nuevaTarea} />

      <div className="lista">
        {listaTarea.map((e, index) => (
          <Tarea
            tarea={e}
            borrar={borrar}
            id={index}
            editar={actualizarTarea}
          />
        ))}
      </div>
    </div>
  );
}
