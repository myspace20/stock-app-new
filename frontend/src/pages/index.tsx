import  Link  from 'next/link'
import { motion } from 'framer-motion'
import homeStyle from "../styles/home.module.scss"


export default function Home() {
  return (
      <section className={homeStyle.splash}>
        <h1>Grocery Galore</h1>
        <section className={homeStyle.splashButtons}>
          <Link href='/login'>
            <button>Login</button>
          </Link>
          <Link href='/register'>
            <button>Register</button>
          </Link>
        </section>
      </section>
  )
}
