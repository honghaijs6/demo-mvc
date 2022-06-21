import iModel from "./interface/Model";
import iControler from "./interface/Controller";
import React from "react";

type propsType = {
  [type: string]: any;
};

class AbtractController implements iControler {
  _name: string;
  model: iModel = Object();
  MODELS: {
    [key: string]: any;
  } = Object();

  react: React.ComponentState;
  constructor(name: string) {
    this._name = name;
  }

  /**
   * NEED OVERIDE
   */
  stateBuilder(strModel: string) {
    return this.MODELS[strModel].state;
  }

  onStateChanged(state: propsType) {
    this.react.setState(state);
    return state;
  }
  setModel(model: iModel) {
    if (!this.model._name) {
      this.model = model;
    }
    this.MODELS[model._name] = model;
  }

  connectView(ReactComponent: React.ComponentState) {
    this.react = ReactComponent;
  }

  /**
   * NEED OVERIDE
   
  onChange(props: propsType | string, value: any) {
    this.model.update(props, value);
  }
  */
}

export default AbtractController;
