import Component from "../Component.js";
import Input from "../formComponents/Input.js";
import ButtonForm from "../formComponents/Button.js";
import SelectForm from "../formComponents/Select.js";
import Textarea from "../formComponents/Textarea.js";
import Span from "../formComponents/Span.js";

class Visit extends Component {
  constructor(selectSettings, config) {
    super();
    this.config = config;
    this.selectSettings = selectSettings;
  }
  // clearGeneralFields() {
  //   this.generalFieldsContainer.innerHTML = "";
  // }
  renderSelect() {
    this.selectContainer = this.createElement("div", ["select-container"]);
    if (this.selectSettings.label) {
      this.selectLabel = this.createElement("span", ["_info-title"]);
      this.selectLabel.innerText = this.selectSettings.label;
      this.selectContainer.append(this.selectLabel);
    }
    this.generalSelect = new SelectForm(this.selectSettings).render();
    this.selectContainer.append(this.generalSelect);
    // console.log(this.selectContainer);
    return this.selectContainer;
  }
  renderFields() {
    this.generalFieldsContainer = this.createElement("div", [
      "form-general-fields",
    ]);
    // console.log(this.config);

    const items = this.config.map((configItem) => {
      let element;
      if (configItem.elType === "input") {
        element = new Input().render();
        // const element = input.render();
        element.name = configItem.name;
        element.type = configItem.type;
        element.placeholder = configItem.placeholder;
      } else if (configItem.elType === "button") {
        element = new ButtonForm().render();
        element.textContent = configItem.innerText;
      } else if (configItem.elType === "select") {
        element = new SelectForm(configItem).render();
        element.classList.add(configItem.className);
        // const element = button.render();
        // element.append(...selOptions);
        // console.log(element);
      } else if (configItem.elType === "textarea") {
        element = new Textarea(configItem.options).render();
        element.placeholder = configItem.placeholder;
      } else if (configItem.elType === "span") {
        // console.log(configItem);
        element = new Span(configItem.options).render();
        element.innerHTML = configItem.innerHTML;
      }
      // this.containerForm.append(element);
      return element;
    });
    // console.log(items);
    this.generalFieldsContainer.append(...items);
    // console.log(this.containerForm);
    return this.generalFieldsContainer;
  }
}

const generalFields = new Visit(
  {
    elType: "select",
    name: "doctor",
    options: ["Select specialist", "Cardiologist", "Dantist", "Therapist"],
  },
  [
    {
      elType: "span",
      innerHTML: "Enter the purpose of your visit",
    },
    {
      elType: "input",
      type: "text",
      name: "visitpurpose",
      placeholder: "Enter the purpose of your visit",
    },
    {
      elType: "span",
      name: "visitpurpose",
      innerHTML: "Enter a short description of the visit",
    },
    {
      elType: "input",
      type: "text",
      name: "description",
      placeholder: "Enter a short description of the visit",
    },
    {
      elType: "span",
      name: "visitpurpose",
      innerHTML: "Urgency",
    },
    {
      elType: "select",
      name: "urgency",
      options: ["Urgency of the visit ", "Regular", "Priority", "Urgent"],
      className: "urgency",
    },
    {
      elType: "span",
      name: "visitpurpose",
      innerHTML: "Patient name",
    },
    {
      elType: "input",
      type: "text",
      name: "username",
      placeholder: "Enter your full name",
    },
  ]
);

const statusSelect = new Visit(
  {
    elType: "select",
    name: "status",
    options: ["Visit Status", "Active", "Done"],
    label: "Visit status",
  },
  []
);
export { statusSelect };
export { generalFields };
