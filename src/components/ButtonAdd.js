import React from "react";

const ButtonAdd = props => {
  return (
    <button id="button" onSubmit={props.onClick}>
      Ajouter une tâches
    </button>
  );
};

export default ButtonAdd;
