import iController from "../Libs/MVC/interface/Controller";
import iTodo from "../models/iTodo";

interface iTodoController extends iController {
  MODELS: {
    [key: string]: iTodo;
  };
  callAction(title: string, action: string, id?: number): void;
}

export default iTodoController;
