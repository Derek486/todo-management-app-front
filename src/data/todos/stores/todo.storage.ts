import { deleteTodo, getTodo, patchTodo, putTodo } from '@/domain/todos/services/todo.service'
import { create } from 'zustand'
import { ITodoModel } from '../models/todo.model'
import { ITodoEditModel, ITodoUpdateModel } from '../models/todo-modify.model'

type TTodoStore = {
  todo: ITodoModel | undefined,
  loadData: (id: string) => Promise<void>,
  editTodo: (id: string, form: ITodoEditModel) => Promise<void>,
  updateTodo: (id: string, form: ITodoUpdateModel) => Promise<void>,
  removeTodo: (id: string) => Promise<void>,
}

export const useTodo = create<TTodoStore>()((set) => ({
  todo: undefined,
  loadData: (id) => getTodo(id).then(res => set(() => ({ todo: res.data }))),
  editTodo: (id, form) => patchTodo(id, form).then(res => set({ todo: res.data })),
  updateTodo: (id, form) => putTodo(id, form).then(res => set({ todo: res.data })),
  removeTodo: (id) => deleteTodo(id).then(_ => set({ todo: undefined })),
}))