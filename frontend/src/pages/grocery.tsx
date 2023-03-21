import Image from "next/image";
import vegeImage from '../assets/Grocery.jpeg'
import Link from "next/link";
import Navbar from "../comps/Navbar";
import vegeStyles from "../styles/grocerylist.module.scss"


export default function grocery() {
    return (
        <section>
            <Navbar />
            <section className={vegeStyles.vegeList}>
                <h1>Vege List</h1>
                <section className={vegeStyles.vegeCard}>
                    <Image src={vegeImage} alt="vegecard" width={200} height={200} />
                    <h2>Cucumber</h2>
                    <small>Delicious Suculent</small>
                    {/* <p>Price: $20</p>
                <p>Date Received: 12/03</p>
                <p>Vendor: Acade Farms</p>
                <p>Quantity: 20 pieces</p> */}
                    <section className={vegeStyles.vegeButton}>
                        <Link href='#'>
                            <button>View Details</button>
                        </Link>
                    </section>
                </section>
                <section className={vegeStyles.vegeCard}>
                    <Image src={vegeImage} alt="vegecard" width={200} height={200} />
                    <h2>Cucumber</h2>
                    <small>Delicious Suculent</small>
                    {/* <p>Price: $20</p>
                <p>Date Received: 12/03</p>
                <p>Vendor: Acade Farms</p>
                <p>Quantity: 20 pieces</p> */}
                    <section className='splash-buttons'>
                        <Link href='/register'>
                            <button>View Details</button>
                        </Link>
                    </section>
                </section>
                <section className={vegeStyles.vegeCard}>
                    <Image src={vegeImage} alt="vegecard" width={200} height={200} />
                    <h2>Cucumber</h2>
                    <small>Delicious Suculent</small>
                    {/* <p>Price: $20</p>
                <p>Date Received: 12/03</p>
                <p>Vendor: Acade Farms</p>
                <p>Quantity: 20 pieces</p> */}
                    <section className='splash-buttons'>
                        <Link href='/register'>
                            <button>View Details</button>
                        </Link>
                    </section>
                </section>
                <section className={vegeStyles.vegeCard}>
                    <Image src={vegeImage} alt="vegecard" width={200} height={200} />
                    <h2>Cucumber</h2>
                    <small>Delicious Suculent</small>
                    {/* <p>Price: $20</p>
                <p>Date Received: 12/03</p>
                <p>Vendor: Acade Farms</p>
                <p>Quantity: 20 pieces</p> */}
                    <section className='splash-buttons'>
                        <Link href='/register'>
                            <button>View Details</button>
                        </Link>
                    </section>
                </section>
            </section>
        </section>
    )
}
