import { Button } from "@/ui/components/Button"
import { Input } from "@/ui/components/Input"
import { ITodoCreateModel } from "@/data/todos/models/todo-create.model"
import { ChangeEvent } from "react"

interface IFormTaskProps {
  form: ITodoCreateModel,
  handleForm: (event: ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: () => void,
}

export const FormTask = ({ form, handleForm, handleSubmit }: IFormTaskProps) => {
  return (
    <section className="flex items-center gap-2">
      <Input
        type="text"
        name="title"
        value={form.title}
        onChange={(e: any) => handleForm(e)}
        placeholder="Input the task..."
        className="flex-1"
      />
      <Button
        onClick={() => handleSubmit()}
        disabled={!form.title}
      >
        + Add
      </Button>
    </section>
  )
}
