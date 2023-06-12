import '@/styles/globals.css'
import { Poppins } from 'next/font/google'
import axios from 'axios'
const poppin = Poppins({weight: '400', subsets: ['latin']})

axios.defaults.baseURL = "http://localhost:8000/"

export default function App({ Component, pageProps: { ...pageProps } }) {
  return(
  <>
    <style jsx global>{`
      html {
        font-family: ${poppin.style.fontFamily};
      }
    `}</style>
    <Component {...pageProps} />
  </>
  )
}


