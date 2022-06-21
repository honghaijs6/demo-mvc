import iModel from "../Libs/MVC/interface/Model";
type propsType = {
  [key: string]: any;
};

interface iTodo extends iModel {
  state: propsType;
  addItem(title: string): void;
  updateItem(id: number, title: string): void;
  removeItem(id: number): void;
  editItem(id: number): void;
  toogleCheck(id: number): void;
}

export default iTodo;
