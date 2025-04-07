import clsx from 'clsx'
import { ComponentProps } from 'react'

type TInputProps = (ComponentProps<'input'> | ComponentProps<'textarea'>) & {
  isTextArea?: boolean
}

export const Input = ({ isTextArea, ...props }: TInputProps) => {
  if (isTextArea) {
    return (
      <textarea
        {...props as ComponentProps<'textarea'>}
        className={clsx("p-2 rounded transition-shadow border-2 border-ui-highlight/50 focus:outline-none focus:border-ui-highlight focus:shadow-xs focus:shadow-ui-highlight text-ui-button-text", props.className)}
      ></textarea>
    )
  } else {
    return (
      <input
        {...props as ComponentProps<'input'>}
        className={clsx("p-2 rounded transition-shadow border-2 border-ui-highlight/50 focus:outline-none focus:border-ui-highlight focus:shadow-xs focus:shadow-ui-highlight text-ui-button-text", props.className)}
      />
    )
  }
}
