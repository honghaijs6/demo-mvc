import iController from "./Controller";

type propsType = {
  [key: string]: any;
};

interface iModel {
  _name: string;
  CTRL: iController;
  state: propsType;
  setState(props: propsType): void;
  notify(): void;
  update(props: propsType | string, value: any): void;
  subscribe(ctrl: iController): void;
}

export default iModel;
