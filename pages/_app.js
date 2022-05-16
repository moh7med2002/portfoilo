import Nav from '../components/Navbar'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
