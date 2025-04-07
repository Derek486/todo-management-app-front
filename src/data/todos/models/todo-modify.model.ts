import { ITodoCreateModel } from "./todo-create.model";

export interface ITodoUpdateModel extends ITodoCreateModel {
  isComplete: boolean
}

export interface ITodoEditModel extends Partial<ITodoUpdateModel> { }