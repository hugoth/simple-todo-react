import React from "react";
import DeleteButton from "./DeleteButton";

const Spot = props => {
  return (
    <ul>
      {props.value.map((spot, id) => {
        let stack = "";
        if (props.value[id].isDone) {
          stack = "line-through";
        }
        return (
          <div key={spot._id} className="spotList">
            <DeleteButton onDelete={props.onClickDelete} value={spot} />
            <li
              className="spots"
              onClick={() => props.onClickDone(spot._id, id)}
              style={{ textDecoration: stack }}
            >
              {spot.title}
            </li>
          </div>
        );
      })}
    </ul>
  );
};

export default Spot;
