import { ListFormat } from 'typescript'
import loginStyle from '../styles/login.module.scss'
import Link from 'next/link'


export default function login() {
    return (
        <section className={loginStyle.login}>
            <h1>Login</h1>
            <form className={loginStyle.form}>
                <section className={loginStyle.inputGroup}>
                    <span>Email</span>
                    <input type='email' />
                </section>
                <section className={loginStyle.inputGroup}>
                    <span>Password</span>
                    <input type='password' />
                    <Link href='resetpassword'>Forgot password ?</Link>
                </section>
                <section className={loginStyle.button}>
                    <button>Login</button>
                </section>
            </form>
        </section>
    )
}
