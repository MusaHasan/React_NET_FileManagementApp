import React, { useEffect } from "react";
import { activeId, deleteAppointment, closeModal } from "./Lib";

export default function Delete(props) {
  const deleteApp = () => {
    deleteAppointment(activeId.id)
      .then((r) => console.log("Deleted successfully: ", r))
      .catch((e) => console.log("Could not delete the appointment: ", e));
    props.refreshData(Math.random() * 125 * Math.random());
    closeModal("delete-modal");
  };
  useEffect(() => {
    console.log("Delete Component");
  }, [props.stateListener]);
  return (
    <div className="modal-container">
      <div className="modal-title">Warning deleting the Appointment</div>
      <p>Are you sure you want to delete the Appointment?</p>

      <div className="row justify-btw modal-action-container mt-15">
        <div
          className="btn"
          onClick={() => {
            closeModal("delete-modal");
          }}
        >
          Cancel
        </div>
        <div className="btn" onClick={deleteApp}>
          Yes
        </div>
      </div>
    </div>
  );
}
