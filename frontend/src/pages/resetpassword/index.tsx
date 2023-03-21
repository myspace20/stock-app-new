import loginStyle from '/Users/Roger/Projects/Stock App/frontend/src/styles/login.module.scss'


export default function index() {
  return (
    <section className={loginStyle.login}>
            <h1>Reset Password</h1>
            <form className={loginStyle.form}>
                <section className={loginStyle.inputGroup}>
                    <span>Email</span>
                    <input type='email' />
                </section>
                <section className={loginStyle.button}>
                    <button>Reset Password</button>
                </section>
            </form>
        </section>
  )
}
