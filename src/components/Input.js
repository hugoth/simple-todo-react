import React from "react";

const Input = props => {
  return (
    <div>
      <form>
        <input
          className="input"
          type="text"
          value={props.value}
          onChange={props.onChange}
          placeholder="Indiquez une tâche"
        />
      </form>
      <div className="buttons">
        <button
          id="button"
          type="submit"
          onClick={() =>
            props.value
              ? props.onSubmit()
              : alert("Veuillez indiquer une tâche !")
          }
        >
          Ajouter une tâche
        </button>
        <button id="button" type="submit" onClick={props.handleDeleteAllTasks}>
          Supprimer toutes les taches
        </button>
      </div>
    </div>
  );
};

export default Input;
