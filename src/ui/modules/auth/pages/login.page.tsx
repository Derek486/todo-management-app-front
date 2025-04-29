import { TextField } from "@mui/material"
import AuthCard from "../components/auth-card.component"

const LoginPage = () => {
  return (
    <div className="bg-[url(/images/background-auth.jpg)] h-full bg-cover flex items-center justify-center">
      <AuthCard
        title="Sign In"
        subTitle="Enter your email and your password"
        form={
          <>
            <TextField label="Email" size="medium" />
            <TextField label="Password" size="medium" />
          </>
        }
        textButton="Log in"
        textFooter="New user?"
        textFooterLink="Sign Up"
        linkFooter="/auth/register"
      />
    </div>
  )
}

export default LoginPage