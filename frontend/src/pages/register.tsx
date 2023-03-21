import registerStyle from "../styles/register.module.scss"

export default function login() {
    return (
        <section className={registerStyle.register}>
            <h1>Register</h1>
            <form className={registerStyle.form}>
                <section className={registerStyle.inputGroup}>
                    <span>Email</span>
                    <input type='email' />
                </section>
                <section className={registerStyle.inputGroup}>
                    <span>Name</span>
                    <input type='text' />
                </section>
                <section className={registerStyle.inputGroup}>
                    <span>Position</span>
                    <input type='text' />
                </section>
                <section className={registerStyle.inputGroup}>
                    <span>Password</span>
                    <input type='password' />
                </section>
                <section className={registerStyle.button}>
                    <button>Register</button>
                </section>
            </form>
        </section>
    )
}