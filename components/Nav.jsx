import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (

        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 border-bottom align-items-center">
        //     <a className="navbar-brand" href="#">Navbar</a>
        //     <Link href="/" passHref>
        //         <a className={styles.a}><h2 className="pointer navbar-brand">Jade Ferreira</h2></a>
        //     </Link>
        //
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        //             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //
        //
        //     <div className="collapse navbar-collapse" id="navbarNav">
        //         <ul className="navbar-nav">
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">Features</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="#">Pricing</a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link disabled" href="#">Disabled</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>


        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 border-bottom align-items-center">
        //
        //     <Link href="/" passHref>
        //         <a className={styles.a}><h2 className="pointer navbar-brand">Jade Ferreira</h2></a>
        //     </Link>
        //
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        //             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //
        //     <div className="collapse navbar-collapse" id="navbarNav">
        //         <Link href="/work" passHref className="navbar-nav">
        //             <a className={styles.a}><p className="ms-5 pointer lead my-auto nav-item active">Work</p></a>
        //         </Link>
        //
        //         <Link href="/education" passHref className="navbar-nav">
        //             <a className={styles.a}><p className="ms-5 pointer lead my-auto nav-item active">Education</p></a>
        //         </Link>
        //
        //         <Link href="/projects" passHref className="navbar-nav">
        //             <a className={styles.a}><p className="ms-5 pointer lead my-auto nav-item active">Projects</p></a>
        //         </Link>
        //     </div>
        //
        // </nav>




        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Features</a>
                    <a className="nav-item nav-link" href="#">Pricing</a>
                    <a className="nav-item nav-link disabled" href="#">Disabled</a>
                </div>
            </div>
        </nav>



        // <nav className="nav p-3 border-bottom align-items-center">
        //
        //     <Link href="/" passHref>
        //         <a className={styles.a}><h2 className="pointer">Jade Ferreira</h2></a>
        //     </Link>
        //
        //     <Link href="/work" passHref>
        //         <a className={styles.a}><p className="ms-5 pointer lead my-auto">Work</p></a>
        //     </Link>
        //
        //     <Link href="/education" passHref>
        //         <a className={styles.a}><p className="ms-5 pointer lead my-auto">Education</p></a>
        //     </Link>
        //
        //     <Link href="/projects" passHref>
        //         <a className={styles.a}><p className="ms-5 pointer lead my-auto">Projects</p></a>
        //     </Link>
        // </nav>
    )
}

export default Nav