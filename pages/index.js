import Head from 'next/head'
import styles from '../styles/Home.module.css'


const Home = () => {
    return ( 
    <div className={styles.container}>
        <Head>
            <title>Lewis Jelfs | Home</title>
            <meta name="description" content="Profile Page for Lewis Jelfs" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
            Hi, I'm <span className="homepage-lewis">Lewis</span> and I'm a Web Developer
            </h1>
            <h2 className={styles.heading}>Specialising in React Js & Next JS</h2>
            <div className="homepage-image">
                <img src='./homepage/lewis.jpeg' alt="" height="300" width="400" style={{'borderRadius':'100px'}}/>
            </div>
        </main>
    </div>
    );
}
 
export default Home;