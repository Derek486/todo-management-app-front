import { getTodos } from '@/services/todo.service'
import { ITodoModel } from '@/services/todo.service-types'
import { create } from 'zustand'

type TTodoStore = {
  todos: ITodoModel[],
  loadData: () => Promise<void>,
  addTodo: (todo: ITodoModel) => void,
  removeTodo: (id: ITodoModel["id"]) => void,
}

export const useTodos = create<TTodoStore>()((set) => ({
  todos: [],
  loadData: () => getTodos().then(res => set(() => ({ todos: res.data || [] }))),
  addTodo: (todo) => set((state) => ({ todos: state.todos.concat(todo) })),
  removeTodo: (id) => set((state) => ({ todos: state.todos.filter(t => t.id !== id) })),
}))