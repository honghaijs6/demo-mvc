import iController from "./interface/Controller";
import iModel from "./interface/Model";

type propType = {
  [key: string]: any;
};

class AbtractModel implements iModel {
  _name: string;
  CTRL: iController = Object();
  state: propType;

  constructor(name: string, defineState: propType) {
    this._name = name;
    this.state = defineState;
  }

  setState(props: propType) {
    this.state = {
      ...this.state,
      ...props
    };

    this.notify();
  }

  // NOTIFY TO CONTROLLER STATE CHANGED
  notify() {
    this.CTRL.onStateChanged(this.state);
  }

  update(props: propType, value?: any) {
    props = typeof props === "string" ? { [props]: value } : props;
    this.setState(props);
  }

  // COMMUNICATE ZONE
  subscribe(ctrl: iController) {
    this.CTRL = ctrl;
    ctrl.setModel(this);
  }
}

export default AbtractModel;
