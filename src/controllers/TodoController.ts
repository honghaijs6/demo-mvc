import AbtractController from "../Libs/MVC/AbtractController";
import iTodoController from "./iTodoController";

import iTodo from "../models/iTodo";

class TodoController extends AbtractController implements iTodoController {
  constructor(model: iTodo) {
    super("TodoController");

    model.subscribe(this);
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

  /*onChange(props: propsType | string, value: any) {
    this.model.update(props, value);
  }*/
}

export default TodoController;
