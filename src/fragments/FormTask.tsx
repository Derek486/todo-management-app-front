import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
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
      <Input
        type="text"
        name="title"
        value={form.title}
        onChange={(e) => handleForm(e)}
        placeholder="Input the task..."
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
