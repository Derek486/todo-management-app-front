import { IResponse } from "@/shared/types";
import { ITodoCreateModel } from "@/data/todos/models/todo-create.model";
import { ITodoEditModel, ITodoUpdateModel } from "@/data/todos/models/todo-modify.model";
import { ITodoModel } from "@/data/todos/models/todo.model";

export type TTodoGetById =  (id: string) => Promise<IResponse<ITodoModel>>
export type TTodoGetAll =  () => Promise<IResponse<ITodoModel[]>>
export type TTodoPost =  (form: ITodoCreateModel) => Promise<IResponse<ITodoModel>>
export type TTodoPut =  (id: string, form: ITodoUpdateModel) => Promise<IResponse<ITodoModel>>
export type TTodoPatch =  (id: string, form: ITodoEditModel) => Promise<IResponse<ITodoModel>>
export type TTodoDelete =  (id: string) => Promise<IResponse<void>>