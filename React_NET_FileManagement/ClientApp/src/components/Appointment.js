import React from "react";
import { activeId, entry, openModal } from "./Lib";

export default function Appointment(props) {
  const handlingDelete = (id) => {
    activeId.id = id;
    props.stateListener(Math.random() * 125 * Math.random());
    openModal("delete-modal");
  };
  const handlingEdit = (row) => {
    Object.assign(entry, row);
    //Update state
    props.stateListener(Math.random() * 125 * Math.random());
    //Poen edit model
    openModal("edit-modal");
  };
  const leavelOfImportence = [
    "Very Low",
    "Low",
    "Normal",
    "Medium",
    "High",
    "Very High",
  ];
  return (
    <div
      className={`row py-5 underline  ${
        props.item.deleted ? " bc-red" : props.item.done ? " bc-green" : ""
      }`}
      key={props.item.id}
    >
      <div className="column id">{props.item.id}</div>
      <div className="column title">{props.item.title}</div>
      <div className="column description">{props.item.description}</div>
      <div
        className={`column importance ${
          props.item.leavelOfImportence === 0
            ? "bc-green"
            : props.item.leavelOfImportence === 1
            ? "bc-green"
            : props.item.leavelOfImportence === 2
            ? "bc-green"
            : props.item.leavelOfImportence === 3
            ? "bc-green"
            : props.item.leavelOfImportence === 4
            ? "bc-gold"
            : props.item.leavelOfImportence === 5
            ? "bc-red"
            : ""
        }`}
      >
        {leavelOfImportence[props.item.leavelOfImportence]}
      </div>
      <div className="column date">{props.item.date.split("T")}</div>
      <div className="column time">{props.item.time}</div>
      <div className="column addr">{props.item.address}</div>
      <div className="column edit">
        <div className="btn edit" onClick={() => handlingEdit(props.item)}>
          Edit
        </div>
      </div>
      <div
        className={`column delete  ${props.item.deleted ? " not-allowed" : ""}`}
      >
        <div
          className={`btn delete ${props.item.deleted ? " no-event" : ""}`}
          onClick={() => handlingDelete(props.item.id)}
        >
          Delete
        </div>
      </div>
    </div>
  );
}
