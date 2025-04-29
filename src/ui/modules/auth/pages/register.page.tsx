import { TextField } from "@mui/material"
import AuthCard from "../components/auth-card.component"

const RegisterPage = () => {
  return (
    <div className="bg-[url(/images/background-auth.jpg)] h-full bg-cover flex items-center justify-center">
      <AuthCard
        title="Sign Up"
        subTitle="Enter your email and your password"
        form={
          <>
            <TextField label="Email" size="medium" />
            <TextField label="Password" size="medium" />
            <TextField label="Confirm password" size="medium" />
          </>
        }
        textButton="Register"
        textFooter="Have an account?"
        textFooterLink="Sign In"
        linkFooter="/auth/login"
      />
    </div>
  )
}

export default RegisterPage