import { getTodos, postTodo } from '@/domain/todos/services/todo.service'
import { create } from 'zustand'
import { ITodoCreateModel } from '../models/todo-create.model'
import { ITodoModel } from '../models/todo.model'

type TTodosStore = {
  todos: ITodoModel[],
  loadData: () => Promise<void>,
  createTodo: (form: ITodoCreateModel) => Promise<void>,
}

export const useTodos = create<TTodosStore>()((set) => ({
  todos: [],
  loadData: () => getTodos().then(res => set(() => ({ todos: res.data || [] }))),
  createTodo: (form) => postTodo(form).then(res => {
    if (res.data) {
      set((prev) => ({ todos: prev.todos.concat([res.data!]) }))
    }
  }),
}))