import Head from 'next/head'
import styles from '../styles/Home.module.css'


const Skills = () => {
    return ( 
    <div className={styles.container}>
        <Head>
            <title>Lewis Jelfs | Skills</title>
            <meta name="description" content="Profile Page for Lewis Jelfs" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
            Lewis Jelfs - Skills 
            </h1>

        </main>
    </div>
    );
}
 
export default Skills;