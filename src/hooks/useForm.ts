import { ChangeEvent, useState } from "react"

type TInputValue = Record<string, any>
type THandleForm = (event: ChangeEvent<HTMLInputElement>) => void

export const useForm = <T extends TInputValue>(value: T): [TInputValue, THandleForm] => {
  const [state, setState] = useState<T>(value)

  const handleForm: THandleForm = (event) => {
    const name = event.target.name
    const value = event.target.value
    console.log(name, value);
    setState((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return [state, handleForm]
}