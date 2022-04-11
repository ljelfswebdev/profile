import Head from 'next/head'
import styles from '../styles/Home.module.css'


const Bio = () => {
    return ( 
    <div className={styles.container}>
        <Head>
            <title>Lewis Jelfs | Bio</title>
            <meta name="description" content="Profile Page for Lewis Jelfs" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
            Bio 
            </h1>
            <div className="grid grid-cols-3 gap-4 mt-5">
                <div className="col-span-2">
                    <h1 className={styles.heading}>About Me</h1>
                    <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quae natus quidem! Illo nam, unde nostrum dolorum saepe velit! Deleniti ab error hic cupiditate tenetur tempora eum quos molestias nisi?</h2>
                </div>
                <div>
                    <img src="./bio/car.jpeg" alt="lana" width={300} className='rounded hover:shadow-xl' />
                </div>
                <div>
                    <img src="./bio/lana.jpeg" alt="car" width={300} className='rounded hover:shadow-xl' />
                </div>
                <div className="col-span-2">
                    <h1 className={styles.heading}>Why Web Development?</h1>
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste illum quos provident porro nemo deleniti repellendus, eligendi dicta, voluptatem laudantium nostrum magni quam rerum, est ipsa sunt quaerat sapiente libero!</h2>
                </div>
            </div>
        </main>
    </div>
    );
}
 
export default Bio;