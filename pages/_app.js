import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'

function MyApp({ Component, pageProps }) {
  return <> 
  <Head>
    <link rel="shortcut icon" href="/Encodin.png" type="image/x-icon" />
  </Head>
  <Topbar />
  <Navbar />
  <Component {...pageProps} />
  </>
}

export default MyApp
