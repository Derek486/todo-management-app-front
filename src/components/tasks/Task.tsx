import { ITodoModel, ITodoUpdateModel } from "@/services/todo.service-types"
import { useCallback, useState } from "react"
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Icon } from "../icons/Icon"
import { deleteTodo, patchTodo } from "@/services/todo.service"
import { useTodos } from "@/storage/todos.storage"
import { useForm } from "@/hooks/useForm"

interface ITaskProps {
  todo: ITodoModel
}

export const Task = ({ todo }: ITaskProps) => {
  const [open, setOpen] = useState(false)
  const [form, handleForm] = useForm({
    ...todo
  } as ITodoUpdateModel)
  const todosStore = useTodos();
  const handleDelete = useCallback(() => {
    deleteTodo(todo.id)
      .then(response => {
        if (response.status === 204) {
          todosStore.removeTodo(todo.id)
        }
      })
  }, [todo])

  const handleUpdate = useCallback(() => {
    patchTodo(todo.id, form)
      .then(res => {
        if (res.data) {
          todosStore.removeTodo(todo.id)
          todosStore.addTodo(res.data)
          setOpen(false)
        }
      })
  }, [form])

  const handleEdit = useCallback(() => {
    setOpen(true)
  }, [todo])

  return (
    <>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-ui-background/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-ui-background text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-ui-stroke/50 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-green-100/10 sm:mx-0 sm:size-10">
                    <Icon name="Edit" className="w-5 h-5 fill-green-500" /> 
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold text-ui-headline">
                      Update task
                    </DialogTitle>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={(e) => handleForm(e)}
                        className="flex-1 p-2 rounded transition-shadow border-2 border-ui-highlight/50 focus:outline-none focus:border-ui-highlight focus:shadow-xs focus:shadow-ui-highlight text-ui-button-text"
                        placeholder="Input the task..."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-ui-stroke/50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-2">
                <button
                  onClick={handleUpdate}
                  className="h-full px-3 py-1.5 cursor-pointer rounded transition-colors border-2 border-ui-stroke/40 hover:border-ui-stroke/30 active:border-ui-stroke/20 bg-ui-button hover:bg-ui-button/80 active:bg-ui-button/60 disabled:cursor-default disabled:bg-ui-button/40 disabled:border-ui-stroke/20 disabled:text-ui-button-text/40 font-semibold text-ui-button-text"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="h-full px-3 py-1.5 cursor-pointer rounded transition-colors border-2 border-ui-button/40 hover:border-ui-button/30 active:border-ui-button/20 disabled:cursor-default disabled:border-ui-button/20 disabled:text-ui-button-text/40 font-semibold text-ui-button-text/80 hover:text-ui-button-text/70 active:text-ui-button-text/60"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <div className="flex justify-between p-3 rounded bg-ui-stroke/25">
        <p className="text-ui-main">{todo.title}</p>
        <div className="flex items-center gap-2">
          <button onClick={() => handleDelete()} className="cursor-pointer">
            <Icon name="Trash" className="w-5 h-5 transition-colors fill-red-500 hover:fill-red-600 active:fill-red-400" />
          </button>
          <button onClick={() => handleEdit()} className="cursor-pointer">
            <Icon name="Edit" className="w-5 h-5 transition-colors fill-green-500 hover:fill-green-600 active:fill-green-400" />
          </button>
        </div>
      </div>
    </>
  )
}