import {iMVCModel} from "../Libs/MVC/interface"

type propsType = {
  [key: string]: any;
};

interface iTodo extends iMVCModel {
  state: propsType;
  addItem(title: string): void;
  updateItem(id: number, title: string): void;
  removeItem(id: number): void;
  editItem(id: number): void;
  toogleCheck(id: number): void;
}

export default iTodo;
