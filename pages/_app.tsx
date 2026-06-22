import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <title>Get Your First Freelance Clients — The Complete Guide</title>
        <meta name="title" content="Get Your First Freelance Clients — The Complete Guide" />
        <meta name="description" content="Learn exactly how to land your first freelance clients — even with zero experience. Step-by-step strategies that work on any platform, any niche." />
        <meta name="keywords" content="how to get freelance clients, first freelance client, freelancing for beginners, freelance guide, find clients online, start freelancing, freelance tips, how to freelance" />
        <meta name="author" content="DigitalSolutions.io" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://freelancewebdesign.store/" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://freelancewebdesign.store/" />
        <meta property="og:title" content="Get Your First Freelance Clients — The Complete Guide" />
        <meta property="og:description" content="No experience? No problem. This guide shows you the exact steps to land your first paying freelance client — fast." />
        <meta property="og:image" content="https://raw.githubusercontent.com/jmbrsxx/freelance_webdesign_guide/refs/heads/main/public/preview-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="DigitalSolutions.io" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter / X Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://freelancewebdesign.store/" />
        <meta name="twitter:title" content="Get Your First Freelance Clients — The Complete Guide" />
        <meta name="twitter:description" content="No experience? No problem. This guide shows you the exact steps to land your first paying freelance client — fast." />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/jmbrsxx/freelance_webdesign_guide/refs/heads/main/public/preview-image.png" />

        {/* Fonts */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" />

        {/* Schema.org / Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Get Your First Freelance Clients — The Complete Guide",
              "description": "A step-by-step guide to landing your first freelance clients, no matter your niche or experience level.",
              "url": "https://freelancewebdesign.store/",
              "image": "https://raw.githubusercontent.com/jmbrsxx/freelance_webdesign_guide/refs/heads/main/public/preview-image.png",
              "brand": {
                "@type": "Brand",
                "name": "DigitalSolutions.io"
              },
              "offers": {
                "@type": "Offer",
                "price": "27.00",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      </Head>
      <main className={`${inter.className} overflow-x-hidden`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}