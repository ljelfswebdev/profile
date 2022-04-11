import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const bio = () => {
    return ( 
    <div className={styles.container}>
        <Head>
            <title>Lewis Jelfs | 404</title>
            <meta name="description" content="Profile Page for Lewis Jelfs" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title} id="underline">
            Ooops!!! This web page doesn't exist
            </h1>
            <div>
              <Link href="/" >
                <button className="bg-blue2 hover:bg-white hover:text-blue2 text-white font-bold py-2 px-12 mb-2 rounded-full">
                Go Home
                </button>
              </Link>
              </div>

        </main>
    </div>
    );
}
 
export default bio;