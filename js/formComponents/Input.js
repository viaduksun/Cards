import Component from "../Component.js";

class Input extends Component {
  constructor() {
    super();
    // this.conf = conf;
  }
  render() {
    const element = this.createElement("input", ["input"]);
    return element;
  }
}
const test = new Input();
// console.log(test.render());

export default Input;
