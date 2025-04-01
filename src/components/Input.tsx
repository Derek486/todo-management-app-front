import clsx from 'clsx'
import { ComponentProps } from 'react'

export const Input = (props: ComponentProps<'input'>) => {
  return (
    <input
      {...props}
      className={clsx("flex-1 p-2 rounded transition-shadow border-2 border-ui-highlight/50 focus:outline-none focus:border-ui-highlight focus:shadow-xs focus:shadow-ui-highlight text-ui-button-text", props.className)}
    />
  )
}
