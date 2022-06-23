import { MVCController } from "../Libs/MVC";
import iTodoController from "./iTodoController";

import iTodo from "../models/iTodo";

const NAME = 'TodoController';
class TodoController extends MVCController implements iTodoController {

  
  constructor(model: iTodo) {
    super(NAME, model);
  }

  callAction(item: string, action: string, id: number = 0) {
    switch (action) {
      case "add":
        this.MODELS["todo"].addItem(item);
        break;

      case "update":
        this.MODELS["todo"].updateItem(id, item);
        break;

      case "remove":
        this.MODELS["todo"].removeItem(id, item);
        break;
    }
  }

  
}

export default TodoController;
