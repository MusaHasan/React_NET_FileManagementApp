export const testData = [
  {
    ID: 1,
    Title: "Title one",
    Description: "Description one",
    LevelOfImportance: 3,
    Date: "14-04-2023",
    Time: "17:32",
    Address: "Be 8500",
  },
  {
    ID: 2,
    Title: "Title two",
    Description: "Description two",
    LevelOfImportance: 4,
    Date: "13-04-2023",
    Time: "13:32",
    Address: "Be 9000",
  },
  {
    ID: 3,
    Title: "Title three",
    Description: "Description three",
    LevelOfImportance: 5,
    Date: "12-04-2023",
    Time: "10:32",
    Address: "Be 2000",
  },
  {
    ID: 4,
    Title: "Title four",
    Description: "Description four",
    LevelOfImportance: 0,
    Date: "10-04-2023",
    Time: "19:09",
    Address: "Be 1000",
  },
];

export const entry = {
  title: "Test title",
  description: "Test Description",
  address: "Test Address",
  Date: new Date(),
  time: formatedTimeToStr(),
  done: false,
  deleted: false,
  levelOfImportence: 2,
};

export const filter = {
  levelOfImportance: null,
  All: false,
  Deleted: false,
  Done: false,
  StartDate: null,
  EndDate: null,
  SpecifiedDate: null,
  SpecifiedTime: null,
};

export const activeId = {
  id: 0,
};

const url = "api/appointment";

// export async function getDefault() {
//   const res = await fetch(url);

//   if (!res.ok && res.status !== 200) {
//     console.log("It sucked at getting default data: ", res);
//     notifyUser("Something went wrong, please refresh the page.");
//     return [];
//   }

//   const result = await res.json();
//   return result;
// }

export async function getDefault() {
  const res = await fetch(url);

  if (!res.ok && res.status !== 200) {
    console.log("Error fetching data: ", res.statusText);
    notifyUser("Something went wrong, please refresh the page.");
    return [];
  }

  try {
    const result = await res.json();
    return result;
  } catch (error) {
    console.log("Error parsing JSON: ", error);
    notifyUser("Error parsing data, please refresh the page.");
    return [];
  }
}

export async function postAppointment(newApp) {
  // Post Date to .net Controller
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(newApp),
    headers: {
      "content-type": "application/json",
    },
  });

  if (!res.ok) {
    console.log("It sucked at creating new appointment: ", res);
    notifyUser("We could not create your appointment, please try again.");
    return { msg: res };
  }

  return await res.json();
}
export async function updateAppointment(updateApp) {
  // Update Date to .net Controller
  const res = await fetch(url + "/" + updateApp.id, {
    method: "PUT",
    body: JSON.stringify(updateApp),
    headers: {
      "content-type": "application/json",
    },
  });

  if (!res.ok) {
    console.log("It sucked at updating appointment: ", res);
    notifyUser("We could not update your appointment, please try again.");
    return { msg: res };
  }

  return res;
}
export async function deleteAppointment(id) {
  // Deleteing an Appointment
  const res = await fetch(url + "/" + id, {
    method: "DELETE",
  });

  if (!res.ok && res.status !== 200) {
    console.log("Error deleting data: ", res.statusText);
    notifyUser("Something went wrong, please refresh the page.");
    return [];
  }

  try {
    const result = await res;
    return result;
  } catch (error) {
    console.log("Error parsing JSON: ", error);
    notifyUser("Error deleting data, please refresh the page.");
    return [];
  }
}

export function notifyUser(msg) {
  // Show user error massage
  const notificationsEl = document.querySelector(".notifications");
  notificationsEl.innerHTML = msg ? msg : "";
  if (msg)
    setTimeout(() => {
      notificationsEl.innerHTML = "";
    }, 12000);
}

export function openModal(modal) {
  // Open the Modal Popup
  const modal_ = document.querySelector("." + modal);
  if (modal_) {
    modal_.classList.remove("hidden");
  }
}
export function closeModal(modal) {
  // Close the Modal Popup
  const modal_ = document.querySelector("." + modal);
  if (modal_) {
    modal_.classList.add("hidden");
  }
}

export function formatedDateToStr(d) {
  // Date Formate String
  const nd = d ? new Date(d) : new Date();
  const month_ = nd.getMonth() + 1;
  const monthStr = month_ > 9 ? month_ : 0 + "" + month_;
  const day_ = nd.getDate() > 9 ? nd.getDate() : 0 + "" + nd.getDate();
  return nd.getFullYear() + "-" + monthStr + "-" + day_;
}

export function formatedTimeToStr(d) {
  // Time Formate String
  const nd = d ? new Date(d) : new Date();
  const hr_ = nd.getHours() > 9 ? nd.getHours() : 0 + "" + nd.getHours();
  const min_ = nd.getMinutes() > 9 ? nd.getMinutes() : 0 + "" + nd.getHours();
  return hr_ + ":" + min_;
}
