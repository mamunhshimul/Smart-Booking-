import PageWithLayoutType from '../types/pageWithLayout'
import '../styles/globals.css'


type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any
}


function MyApp({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || ((children) => <>{children}</>)
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
