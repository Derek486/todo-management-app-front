import { ITodoModel } from "@/data/todos/models/todo.model";
import { ITodoEntitie } from "../entities/todo.entitie";

export const mapFromEntity = (todo: ITodoEntitie): ITodoModel => {
  return {
    id: todo.id,
    title: todo.title,
    description: todo.description,
    isComplete: todo.isComplete,
  }
}