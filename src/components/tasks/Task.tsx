import { ITodoModel } from "@/services/todo.service-types"
import { useCallback } from "react"
import { Icon } from "../icons/Icon"
import { deleteTodo } from "@/services/todo.service"

interface ITaskProps {
  todo: ITodoModel
}

export const Task = ({ todo }: ITaskProps) => {
  const handleDelete = useCallback(() => {
    deleteTodo(todo.id)
      .then(response => {
        if (response.status === 204) {
          console.log("Deleted");
        }
      })
  }, [todo])

  const handleEdit = useCallback(() => {
    console.log(todo);
  }, [todo])

  return (
    <>
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