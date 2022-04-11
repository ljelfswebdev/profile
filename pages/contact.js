import Head from 'next/head'
import styles from '../styles/Home.module.css'


const Contact = () => {
    return ( 
    <div className={styles.container}>
        <Head>
            <title>Lewis Jelfs | Contact</title>
            <meta name="description" content="Profile Page for Lewis Jelfs" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
            Lewis Jelfs - Contact 
            </h1>

        </main>
    </div>
    );
}
 
export default Contact;