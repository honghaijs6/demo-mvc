
import { iMVCController } from "../Libs/MVC/interface";
import iTodo from "../models/iTodo";

interface iTodoController extends iMVCController {
  MODELS: {
    [key: string]: iTodo;
  };
  callAction(title: string, action: string, id?: number): void;
}

export default iTodoController;
