import { API_URL } from "../config"
import { IResponse } from "../shared/types"
import { ITodoCreateModel, ITodoModel, ITodoUpdateModel } from "./todo.service-types"

const BASE_ENDPOINT = `${API_URL}/todos`

export const getTodos = async () => {
  const response = await fetch(BASE_ENDPOINT)
  return response.json() as Promise<IResponse<ITodoModel[]>>
}

export const getTodo = async (id: string) => {
  const response = await fetch(`${BASE_ENDPOINT}/${id}`)
  return response.json() as Promise<IResponse<ITodoModel>>
}

export const postTodo = async (form: ITodoCreateModel) => {
  const response = await fetch(BASE_ENDPOINT, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(form)
  })
  return response.json() as Promise<IResponse<ITodoModel>>
}

export const putTodo = async (id: string, form: ITodoUpdateModel) => {
  const response = await fetch(`${BASE_ENDPOINT}/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(form)
  })
  return response.json() as Promise<IResponse<ITodoModel>>
}

export const patchTodo = async (id: string, form: Partial<ITodoUpdateModel>) => {
  const response = await fetch(`${BASE_ENDPOINT}/${id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(form)
  })
  return response.json() as Promise<IResponse<ITodoModel>>
}

export const deleteTodo = async (id: string) => {
  const response = await fetch(`${BASE_ENDPOINT}/${id}`, {
    method: 'DELETE',
  })
  return response.json() as Promise<IResponse<void>>
}