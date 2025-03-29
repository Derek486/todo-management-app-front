import { ITodoCreateModel } from "@/services/todo.service-types"
import { ChangeEvent } from "react"

interface IFormTaskProps {
  form: ITodoCreateModel,
  handleForm: (event: ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: () => void,
}

export const FormTask = ({ form, handleForm, handleSubmit }: IFormTaskProps) => {
  return (
    <section className="flex items-center gap-2">
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={(e) => handleForm(e)}
        className="flex-1 p-2 rounded transition-shadow border-2 border-ui-highlight/50 focus:outline-none focus:border-ui-highlight focus:shadow-xs focus:shadow-ui-highlight text-ui-button-text"
        placeholder="Input the task..."
      />
      <button
        onClick={() => handleSubmit()}
        disabled={!form.title}
        className="h-full px-3 py-1.5 cursor-pointer rounded transition-colors border-2 border-ui-stroke/40 hover:border-ui-stroke/30 active:border-ui-stroke/20 bg-ui-button hover:bg-ui-button/80 active:bg-ui-button/60 disabled:cursor-default disabled:bg-ui-button/40 disabled:border-ui-stroke/20 disabled:text-ui-button-text/40 font-semibold text-ui-button-text"
      >
        + Add
      </button>
    </section>
  )
}
