const LoginPage = () => {
  return (
    <div className="bg-[url(/images/background-auth.jpg)] h-screen bg-cover">
      <div className="flex items-center justify-center size-full">
        <article className="bg-white/30 backdrop-blur-md p-4 rounded-lg">
          <h2 className="text-ui-soft-black font-bold">Sign In</h2>
          <p className="text-ui-charcoal mt-1">Enter your email and your password</p>
        </article>
      </div>
    </div> 
  )
}

export default LoginPage