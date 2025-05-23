import spriteHref from "/icons/sprites.svg"
import type { SVGProps } from "react"
import type { IconName } from "./icons.ts"

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName
}) {
  return (
    <svg {...props}>
      <use href={`${spriteHref}#${name}`} />
    </svg>
  )
}