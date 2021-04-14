import Component from "../Component.js";

class Select extends Component {
  constructor(settings) {
    super();
    this.settings = settings;
  }
  render() {
    const selectEl = this.createElement("select", ["modal-select"]);
    selectEl.setAttribute('name', this.settings.name)
    // console.log(this.settings);
    const testArr = this.settings.options.slice(0, 1);
    // console.log(testArr);
    const optionDisabled = this.createElement(
      "option",
      [],
      testArr[0],
      testArr[0],
      "disabled"
    );
    const selOptions = this.settings.options.map((optEl) => {
      const option = this.createElement("option", [], optEl, optEl);
      // console.log(option);
      return option;
    });
    const finish = selOptions.splice(1);
    selectEl.append(optionDisabled, ...finish);
    // console.log(optionDisabled);
    // console.log(this.options);
    return selectEl;
  }
}

export default Select;
