import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>
                {`
				        html {
					        font-family: ${montserrat.style.fontFamily};
				        }
			        `}
            </style>
            <Head>
                <title>Get Linked AI</title>
                <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Get Linked Artificial Intelligence" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
