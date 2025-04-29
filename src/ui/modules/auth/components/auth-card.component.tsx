import { Button } from "@mui/material"
import { ReactNode } from "react"
import { Link } from "react-router"

interface IProps {
  title: string
  subTitle: string
  form: ReactNode
  textButton: string
  submit?: () => void 
  textFooter: string
  textFooterLink: string
  linkFooter: string
}

const AuthCard = ({
  form,
  linkFooter,
  subTitle,
  textButton,
  textFooter,
  textFooterLink,
  title,
  submit
}: IProps) => {
  return (
    <article className="flex flex-col gap-4 bg-white/30 backdrop-blur-md p-12 rounded-lg">
      <section className="flex flex-col gap-1">
        <h2 className="text-ui-soft-black font-semibold text-xl">{title}</h2>
        <p className="text-ui-charcoal">{subTitle}</p>
      </section>
      <section className="flex flex-col gap-2">
        {form}
      </section>
      <section className="flex flex-col gap-2">
        <Button onClick={submit} color="primary" variant="contained">{textButton}</Button>
        <div className="flex">
          <p>{textFooter}</p> 
          <Link to={linkFooter}>{textFooterLink}</Link>
        </div>
      </section>
    </article>
  )
}

export default AuthCard