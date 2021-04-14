import Component from "../Component.js";

class Span extends Component {
  constructor() {
    super();
    // this.conf = conf;
  }
  render() {
    const element = this.createElement("span", ['_info-title']);   
    return element;
  }
}

export default Span;
