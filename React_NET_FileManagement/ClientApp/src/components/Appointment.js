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
        props.item.Deleted ? " bc-red" : props.item.Done ? " bc-green" : ""
      }`}
      key={props.item.ID}
    >
      <div className="column id">{props.item.ID}</div>
      <div className="column title">{props.item.Title}</div>
      <div className="column description">{props.item.Description}</div>
      <div
        className={`column importance ${
          props.item.LevelOfImportance === 0
            ? " bc-green"
            : props.item.LevelOfImportance === 4
            ? " bc-gold"
            : props.item.LevelOfImportance === 5
            ? " bc-red"
            : ""
        }`}
      >
        {levelOfImportance[props.item.LevelOfImportance]}
      </div>
      <div className="column date">{props.item.Date}</div>
      <div className="column time">{props.item.Time}</div>
      <div className="column addr">{props.item.Address}</div>
      <div className="column edit">
        <div className="btn edit">Edit</div>
      </div>
      <div
        className={`column delete  ${props.item.Deleted ? " not-allowed" : ""}`}
      >
        <div className={`btn delete ${props.item.Deleted ? " no-event" : ""}`}>
          Delete
        </div>
      </div>
    </div>
  );
}
