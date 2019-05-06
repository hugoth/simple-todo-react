import React from "react";

const DeleteButton = props => {
  return (
    <span onClick={() => props.onDelete(props.value)}>
      <i className="fas fa-trash-alt trash" />
    </span>
  );
};

export default DeleteButton;
