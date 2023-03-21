import loginStyle from 'src/styles/login.module.scss'



export default function newPassword() {
  return (
    <section className={loginStyle.login}>
            <h1>New Password</h1>
            <form className={loginStyle.form}>
                <section className={loginStyle.inputGroup}>
                    <span>Enter New Password</span>
                    <input type='password' />
                </section>
                <section className={loginStyle.inputGroup}>
                    <span>Confirm New Password</span>
                    <input type='password' />
                </section>
                <section className={loginStyle.button}>
                    <button>Reset</button>
                </section>
            </form>
        </section>
  )
}
