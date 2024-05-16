import React from "react";

export default function Delete(props) {
  return (
    <div className="modal-container">
      <div className="modal-title">Warning deleting the Appointment</div>
      <p>Are you sure you want to delete the Appointment?</p>

      <div className="row justify-btw modal-action-container mt-15">
        <div className="btn">Cancel</div>
        <div className="btn">Yes</div>
      </div>
    </div>
  );
}
