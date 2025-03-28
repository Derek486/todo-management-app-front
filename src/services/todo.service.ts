import { API_URL } from "../config"
import { IResponse } from "../shared/types"
import { ITodoCreateModel, ITodoModel } from "./todo.service-types"

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

export const putTodo = async () => {
  const res = await fetch(BASE_ENDPOINT, {
    method: 'GET'
  })
  const data = await res.json()
  return data
}

export const patchTodo = async () => {
  const res = await fetch(BASE_ENDPOINT, {
    method: 'GET'
  })
  const data = await res.json()
  return data
}

export const deleteTodo = async () => {
  const res = await fetch(BASE_ENDPOINT, {
    method: 'GET'
  })
  const data = await res.json()
  return data
}