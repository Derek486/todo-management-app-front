import { IResponse } from "@/shared/types"
import { ITodoEntitie } from "../entities/todo.entitie"
import { ITodoCreateModel } from "@/data/todos/models/todo-create.model"
import { ITodoEditModel, ITodoUpdateModel } from "@/data/todos/models/todo-modify.model"
import { TTodoDelete, TTodoGetAll, TTodoGetById, TTodoPatch, TTodoPost, TTodoPut } from "./todo.service.types"
import { mapFromEntity } from "../mappers/todo.mapper"
import { API_URL } from "@/shared/config"

const BASE_ENDPOINT = `${API_URL}/todos`

export const getTodos: TTodoGetAll = async () => {
  const response = await fetch(BASE_ENDPOINT)
  const json = await (response.json() as Promise<IResponse<ITodoEntitie[]>>)
  return {
    ...json,
    data: json.data?.map(d => mapFromEntity(d))
  }
}

export const getTodo: TTodoGetById = async (id: string) => {
  const response = await fetch(`${BASE_ENDPOINT}/${id}`)
  const json = await (response.json() as Promise<IResponse<ITodoEntitie>>)
  return {
    ...json,
    data: json.data && mapFromEntity(json.data)
  }
}

export const postTodo: TTodoPost = async (form: ITodoCreateModel) => {
  const response = await fetch(BASE_ENDPOINT, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(form)
  })
  const json = await (response.json() as Promise<IResponse<ITodoEntitie>>)
  return {
    ...json,
    data: json.data && mapFromEntity(json.data)
  }
}

export const putTodo: TTodoPut = async (id: string, form: ITodoUpdateModel) => {
  const response = await fetch(`${BASE_ENDPOINT}/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(form)
  })
  const json = await (response.json() as Promise<IResponse<ITodoEntitie>>)
  return {
    ...json,
    data: json.data && mapFromEntity(json.data)
  }
}

export const patchTodo: TTodoPatch = async (id: string, form: ITodoEditModel) => {
  const response = await fetch(`${BASE_ENDPOINT}/${id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(form)
  })
  const json = await (response.json() as Promise<IResponse<ITodoEntitie>>)
  return {
    ...json,
    data: json.data && mapFromEntity(json.data)
  }
}

export const deleteTodo: TTodoDelete = async (id: string) => {
  const response = await fetch(`${BASE_ENDPOINT}/${id}`, {
    method: 'DELETE',
  })
  const json = await (response.json() as Promise<IResponse<void>>)
  return json
}