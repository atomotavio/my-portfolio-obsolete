import Maincontainer from '@/components/MainContainer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <Maincontainer>
      <Component {...pageProps} />
    </Maincontainer>
  )
}
