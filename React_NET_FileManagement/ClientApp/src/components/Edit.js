import React, { useEffect, useState } from "react";
import { closeModal, entry, updateAppointment } from "./Lib";

export default function Edit(props) {
  const [done_, setDone_] = useState(false);
  const [deleted_, setDeleted_] = useState(0);
  const [importance_, setImportance_] = useState(0);
  const [titleLength, setTitleLength] = useState(0);
  const [desLength, setDesLength] = useState(0);
  const [addrLength, setAddrLength] = useState(0);
  const [data, setData] = useState({});

  const editApp = (e) => {
    const name_ = e.target.name;
    let v_ = e.target.value;
    if (name_ === "title") {
      setTitleLength(v_.length);
    }
    if (name_ === "description") {
      setDesLength(v_.length);
    }
    if (name_ === "address") {
      setAddrLength(v_.length);
    }
    if (name_ === "date") {
      v_ = new Date(v_);
    }
    if (name_ === "done") {
      v_ = e.target.checked;
      setDone_(v_);
    }
    if (name_ === "deleted") {
      v_ = e.target.checked;
      setDeleted_(v_);
    }
    if (name_ === "leavelOfImportence") {
      v_ = Number(v_);
      setImportance_(v_);
    }
    entry[name_] = v_;
  };

  const updateApp = () => {
    console.log("Entry before Update: ", entry);
    updateAppointment(entry)
      .then((r) => console.log("Update successfully: ", r))
      .catch((e) => console.log("Could not update the appointment: ", e));
    props.refreshData(Math.random() * 125 * Math.random());
    closeModal("edit-modal");
  };

  const defaultDate =
    typeof entry.date === "string" ? entry.date.split("T")[0] : "";
  useEffect(() => {
    console.log("Edit Component");
    setDone_(entry.done);
    setDeleted_(entry.deleted);
    setImportance_(entry.levelOfImportence);
    setData(entry);
  }, [props.stateListener]);

  return (
    <div className="modal-container">
      <div className="modal-title">Edit Appointment</div>

      <div className="mt-15">
        <label htmlFor="Title_e">Title</label> <br />
        <input
          type="text"
          className="mt-5"
          id="Title_e"
          maxLength={150}
          name="title"
          onChange={editApp}
          defaultValue={data.title}
        />
        <span className="ms-10">{titleLength}/150</span>
      </div>

      <div className="mt-15">
        <label htmlFor="Description_e">Description</label> <br />
        <textarea
          id="Description_e"
          maxLength={300}
          className="mt-5"
          name="description"
          cols={102}
          rows={10}
          onChange={editApp}
          defaultValue={data.discription}
        ></textarea>{" "}
        <br />
        <span className="float-right me-10">{desLength}/300</span>
      </div>

      <div className="row mt-15">
        <div>
          <label htmlFor="Address_e">Address</label>
          <input
            type="text"
            id="Address_e"
            name="address"
            maxLength={100}
            onChange={editApp}
            defaultValue={data.address}
          />
          <br />
          <span className=" ms-10"> {addrLength}/ 100</span>
        </div>

        <div className="ms-10">
          <label htmlFor="leavelOfImportence_e">Importance</label>
          <select
            name="leavelOfImportence"
            id="leavelOfImportence_e"
            value={importance_}
            onChange={editApp}
            defaultValue={data.levelOfImportence}
          >
            <option value={5}>Very High</option>
            <option value={4}>High</option>
            <option value={3}>Medium</option>
            <option value={2}>Normal</option>
            <option value={1}>Low</option>
            <option value={0}>Very Low</option>
          </select>
        </div>
      </div>

      <div className="row mt-15 items-center">
        <div>
          <label htmlFor="Date_e">Date</label>
          <input
            type="date"
            id="Date_e"
            name="date"
            onChange={editApp}
            defaultValue={defaultDate}
          />
        </div>

        <div className="ms-10">
          <label htmlFor="Time_e">Time</label>
          <input
            type="time"
            id="Time_e"
            name="time"
            onChange={editApp}
            defaultValue={data.time}
          />
        </div>

        <div className="ms-10 row items-center">
          <label htmlFor="Done_e">Done</label>
          <input
            type="checkbox"
            id="Done_e"
            name="done"
            checked={done_}
            onChange={editApp}
          />
        </div>

        <div className="ms-10 row items-center">
          <label htmlFor="Deleted_e">Deleted</label>
          <input
            type="checkbox"
            id="Deleted_e"
            name="deleted"
            checked={deleted_}
            onChange={editApp}
          />
        </div>
      </div>

      <div className="row justify-btw modal-action-container mt-15">
        <div className="btn" onClick={() => closeModal("edit-modal")}>
          Cancel
        </div>
        <div className="btn" onClick={updateApp}>
          Update
        </div>
      </div>
    </div>
  );
}
