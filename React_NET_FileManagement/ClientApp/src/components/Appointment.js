import React from "react";

export default function Appointment(props) {
  const levelOfImportance = [
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
          props.item.levelOfImportance === 0
            ? " bc-green"
            : props.item.levelOfImportance === 4
            ? " bc-gold"
            : props.item.levelOfImportance === 5
            ? " bc-red"
            : ""
        }`}
      >
        {levelOfImportance[props.item.levelOfImportance]}
      </div>
      <div className="column date">{props.item.date}</div>
      <div className="column time">{props.item.time}</div>
      <div className="column addr">{props.item.address}</div>
      <div className="column edit">
        <div className="btn edit">Edit</div>
      </div>
      <div
        className={`column delete  ${props.item.deleted ? " not-allowed" : ""}`}
      >
        <div className={`btn delete ${props.item.deleted ? " no-event" : ""}`}>
          Delete
        </div>
      </div>
    </div>
  );
}
