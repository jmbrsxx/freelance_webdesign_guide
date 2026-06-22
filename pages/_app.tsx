import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" />
        <meta property="og:image" content="https://raw.githubusercontent.com/jmbrsxx/freelance_webdesign_guide/refs/heads/main/public/preview-image.png" />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/jmbrsxx/freelance_webdesign_guide/refs/heads/main/public/preview-image.png" />
      </Head>
      <main className={`${inter.className} overflow-x-hidden`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
