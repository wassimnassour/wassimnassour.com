import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import { Footer, Nav } from 'components'
import { DefaultSeo } from 'next-seo'
import { PROFILE_DESCRIPTION, SITE_URL } from 'constant'
import { GoogleAnalytics } from '@next/third-parties/google'

export type PageWithLayout = NextPage & { standalone?: boolean }

function MyApp({ Component, pageProps }: AppProps & { Component: PageWithLayout }) {
  return (
    <>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string} />
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: SITE_URL,
          site_name: 'Wassim',
          description: PROFILE_DESCRIPTION
        }}
        twitter={{
          handle: '@wassimanssour',
          cardType: 'summary_large_image'
        }}
      />
      <div id="top" className="min-h-screen bg-primary">
        {Component.standalone && (
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-30 focus:rounded focus:bg-primary focus:p-3 focus:outline"
          >
            Skip to content
          </a>
        )}
        <Nav />
        <Component {...pageProps} />
        {!Component.standalone && <Footer />}
      </div>
    </>
  )
}
export default MyApp
