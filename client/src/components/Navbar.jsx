import { Inter } from 'next/font/google'
import styles from "@/styles/Home.module.css"

import Link from "next/link"
import { useState, useEffect} from "react"
const inter = Inter({ subsets: ['latin'] })


 
const Navbar = () => {
        const [activateLink, setActivateLink] = useState(false)

        const handleClick = () => {
            setActivateLink(!activateLink)
        }


    return (
        <>
        <div className={`${styles.title} ${inter.className}`}>


            <img src='/cover-icon.png' alt='' width={50}  />
            <h1>PdfShareX</h1>
            <Link 
           
            href="#link1" 
            onClick={handleClick}
            className={activateLink ? styles.iconactive : styles.icon}
            >
                
                    {activateLink ? <img src="/home-click.png" alt="doc-img" />
                :
                <img src="/home.png" alt="doc-img" /> }
               
                </Link>
            <img src="/document.png" alt="doc-img" />
            <Link href="#" className={styles.search}><img src="/search.png" alt="doc-img" /></Link>
            
            
            
           
            </div>
            </>
    )
}

export default Navbar