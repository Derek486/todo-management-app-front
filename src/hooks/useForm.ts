import { ChangeEvent, useState } from "react"

export type TInputValue = Record<string, any>
export type THandleForm = (event: ChangeEvent<HTMLInputElement>) => void
export type TResetForm = <T extends TInputValue>(value?: T) => void

export const useForm = <T extends TInputValue>(initial: T): [T, THandleForm, TResetForm] => {
  const [state, setState] = useState<T>(initial)

  const resetForm: TResetForm = () => setState(initial)

  const handleForm: THandleForm = (event) => {
    const name = event.target.name
    const value = event.target.value
    setState((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return [state, handleForm, resetForm]
}