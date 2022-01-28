import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import NextNProgress from 'nextjs-progressbar'

import * as gtag from 'lib/gtag'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'
import Analytics from 'components/Analytics'

import Layout from 'components/Layout'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>Bruno Ardel</title>
        <link rel="shortcut icon" href="/assets/img/blog-icon.svg" />
        <link rel="apple-touch-icon" href="/assets/img/blog-icon.svg" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="google-site-verification"
          content="PR4Us9x-G0Tng0qfy1NrLfp8v-2CM1xY-2GvX-86g8g"
        />
        <meta
          name="description"
          content="Um bloco de notas melhorado de um desenvolvedor Front End, aqui contem Javascript, React, Next, Node, Css, Testes e mais algumas coisas úteis para um dev front."
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <Layout>
        <NextNProgress
          color="#f2a365"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
          options={{ showSpinner: false }}
        />
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  )
}

export default App
