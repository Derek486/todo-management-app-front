import { ITodoEditModel, ITodoModel } from "@/services/todo.service-types"
import { useCallback, useState } from "react"
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Icon } from "../icons/Icon"
import { deleteTodo, patchTodo } from "@/services/todo.service"
import { useTodos } from "@/storage/todos.storage"
import { useForm } from "@/hooks/useForm"
import { Button } from "../Button"
import { Input } from "../Input"

interface ITaskProps {
  todo: ITodoModel
}

export const Task = ({ todo }: ITaskProps) => {
  const [open, setOpen] = useState(false)
  const [form, handleForm] = useForm({
    ...todo
  } as ITodoEditModel)
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
              className="relative transform overflow-hidden rounded-lg bg-ui-background text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="flex flex-col bg-ui-stroke/50">
                <DialogTitle className="flex flex-col gap-2 bg-ui-highlight p-4">
                  <span className="flex items-center justify-center rounded-full border-2 border-ui-main mx-auto p-3">
                    <Icon name="Edit" className="w-6 h-6 fill-ui-button-text" />
                  </span>
                </DialogTitle>
                <div className="flex flex-col gap-2 p-3">
                  <p className="text-base text-center font-semibold text-ui-headline">Update task</p>
                  <div className="flex flex-col gap-2">
                    <Input
                      type="text"
                      name="title"
                      value={form.title || ''}
                      onChange={(e: any) => handleForm(e)}
                      placeholder="Input the task..."
                    />
                    <Input
                      isTextArea={true}
                      name="description"
                      value={form.description || ''}
                      onChange={(e: any) => handleForm(e)}
                      placeholder="Input the description..."
                    />
                  </div>
                </div>
              </div>
              <footer className="bg-ui-stroke/50 border-t-2 border-ui-secondary/20 p-3 sm:flex sm:flex-row-reverse sm:px-6 gap-2">
                <Button
                  onClick={handleUpdate}
                >
                  Update
                </Button>
                <Button
                  typeButton="outlined"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
              </footer>
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