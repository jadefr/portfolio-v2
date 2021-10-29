import '../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Jade Ferreira</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
                      rel="stylesheet"
                      integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                      crossOrigin="anonymous"/>
            </Head>

            <div className="container">
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
