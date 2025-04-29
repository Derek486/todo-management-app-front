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
    <div className="flex shadow-2xl rounded-lg overflow-clip">
      <article className="bg-ui-charcoal w-8 rounded-s-lg">
      </article>
      <article className="flex flex-col gap-4 bg-white/30 backdrop-blur-md p-12">
        <section className="flex flex-col gap-1">
          <h2 className="text-ui-soft-black font-semibold text-xl">{title}</h2>
          <p className="text-ui-charcoal">{subTitle}</p>
        </section>
        <section className="flex flex-col gap-2">
          {form}
        </section>
        <section className="flex flex-col gap-2">
          <Button onClick={submit} color="primary" variant="contained">{textButton}</Button>
          <div className="flex justify-center gap-2">
            <p>{textFooter}</p> 
            <Link to={linkFooter} className="text-ui-soft-grayblue hover:text-ui-soft-black transition-colors">{textFooterLink}</Link>
          </div>
        </section>
      </article>
    </div>
  )
}

export default AuthCard