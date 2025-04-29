import { Button, TextField } from "@mui/material"
import { Link } from "react-router"

const RegisterPage = () => {
  return (
    <div className="bg-[url(/images/background-auth.jpg)] h-full bg-cover">
      <div className="flex items-center justify-center size-full">
        <article className="flex flex-col gap-4 bg-white/30 backdrop-blur-md p-12 rounded-lg">
          <section className="flex flex-col gap-1">
            <h2 className="text-ui-soft-black font-semibold text-xl">Sign Up</h2>
            <p className="text-ui-charcoal">Enter your email and confirm your password</p>
          </section>
          <section className="flex flex-col gap-2">
            <TextField label="Email" size="medium" />
            <TextField label="Password" size="medium" />
            <TextField label="Confirm password" size="medium" />
          </section>
          <section className="flex flex-col gap-2">
            <Button color="primary" variant="contained">Register</Button>
            <div className="flex">
              <p>Have an account?</p> 
              <Link to="/auth/login">Sign In</Link>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}

export default RegisterPage