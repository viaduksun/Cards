import { editVisitCard } from "./ajax/api.js";
import modal from "./modal/Modal.js";
import { updateCard } from "./main.js";

export const editCardForm = (form, userData) => {
  // console.log(form);
  // console.log(userData);
  const purposeInput = form.elements["visitpurpose"];
  const descriptionInput = form.elements["description"];
  const urgencyInput = form.elements["urgency"];
  const usernameInput = form.elements["username"];
  const ageInput = form.elements["age"];
  // console.log(ageInput);
  const statusInput = form.elements["status"];
  const lastvisitdateInput = form.elements["lastvisitdate"];
  const pressureInput = form.elements["pressure"];
  const bodymassInput = form.elements["bodymass"];
  const diseasesInput = form.elements["diseases"];

  // general fields

  purposeInput.value = userData.visitpurpose;
  descriptionInput.value = userData.description;
  urgencyInput.value = userData.urgency;
  usernameInput.value = userData.userName;
  statusInput.value = userData.visitStatus;

  // console.log(userData.visitStatus);
  // console.log(statusInput);
  // console.log(statusInput.value);
  // console.log(urgencyInput.value);

  if (userData.visitType === "Dantist") {
    lastvisitdateInput.value = userData.lastvisitdate;
  } else if (userData.visitType === "Therapist") {
    ageInput.value = userData.age;
  } else if (userData.visitType === "Cardiologist") {
    pressureInput.value = userData.pressure;
    bodymassInput.value = userData.bodymass;
    diseasesInput.value = userData.diseases;
    ageInput.value = userData.age;
  }
  // console.log(statusInput.value);
  // console.log(userData.visitType);

  const editCardBtn = document.querySelector(".btn-modal");
  editCardBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let customFields = {};

    const visitpurpose = purposeInput.value;
    const description = descriptionInput.value;
    const urgency = urgencyInput.value;
    const userName = usernameInput.value;
    const id = userData.id;
    const visitType = userData.visitType;
    const visitStatus = statusInput.value;
    // console.log(visitStatus);
    if (userData.visitType === "Dantist") {
      const lastvisitdate = lastvisitdateInput.value;
      customFields = { lastvisitdate };
    } else if (userData.visitType === "Therapist") {
      const age = ageInput.value;
      customFields = { age };
    } else if (userData.visitType === "Cardiologist") {
      const pressure = pressureInput.value;
      const bodymass = bodymassInput.value;
      const diseases = diseasesInput.value;
      const age = ageInput.value;
      customFields = {
        pressure,
        bodymass,
        diseases,
        age,
      };
    }

    const generalFields = {
      visitType,
      visitpurpose,
      description,
      urgency,
      userName,
      id,
      visitStatus,
    };
    const newUserData = Object.assign(generalFields, customFields);
    const targetElement = document.querySelector(`.user-card[userid='${id}']`);
    modal.hide();
    // console.log(targetElement.parentNode);
    editVisitCard(newUserData, id);
    updateCard(id, targetElement.parentNode);
  });
};
