import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HomePage from './homePage'
const poppins = Poppins({ weight: '400', subsets: ['latin'] })

export default function Home() {

  

  

  
  return (
    <>
      <Head>
        <title>PdfShareX</title>
      </Head>

      <div className={`${styles.titlecontainer} ${poppins.className}`}>
        <h1>
          PdfShareX
        </h1>
      </div>
<div>
<HomePage />
</div>
       
       
      
    </>
  )
}
