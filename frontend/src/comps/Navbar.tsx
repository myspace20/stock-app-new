import Link from "next/link";
import navbarStyle from "../styles/navbar.module.scss"
import { CSSProperties } from "react"



export default function Navbar() {

      
    return (
        <nav className={navbarStyle.nav}>
            <h1>
                Grocery Galore
            </h1>
            <ul className="desktopLinks">
                <li>
                    <Link href='/about'>
                        About
                    </Link>
                </li>
                <li>
                    <Link href='/payouts'>
                        Payouts
                    </Link>
                </li>
                <li>
                    <Link href='/profile'>
                        Profile
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
