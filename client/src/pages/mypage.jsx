import { Inter } from 'next/font/google'
import styles from "@/styles/Home.module.css"
const inter = Inter({ subsets: ['latin'] })
import Navbar from '@/components/Navbar'
export default function MyPage(){
    return (
        <>
        <div>
        <Navbar />
            
        </div>
        </>
    )
}