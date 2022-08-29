import React, { useState } from "react";
import "../styles.css";

const TareaForm = (props) => {
  const [inpuText, setInputText] = useState("");
  const [validacion, setValidacion] = useState(true);

  const manejarForm = (event) => {
    setInputText(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (inpuText.trim() !== "") {
      props.nuevaTarea(inpuText);
      setInputText("");
      setValidacion(true);
    } else {
      setValidacion(false);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={submit}>
        <span>Añador tarea</span>
        <input value={inpuText} onChange={manejarForm} />
        <button>Add</button>
      </form>
      {!validacion && (
        <div className="validacion">Añada una tarea porfavor</div>
      )}
    </div>
  );
};
export default TareaForm;
