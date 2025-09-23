import '../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Jade Ferreira | Backend Engineer</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Backend Engineer specializing in Java, Kubernetes, Docker, and System Design" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="app">
                <Nav/>
                <main>
                    <Component {...pageProps} />
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default MyApp
