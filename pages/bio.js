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
            <h1 className={styles.title} id="underline">
            Bio 
            </h1>
            <div className='flex flex-wrap'>
                <div>
                  <h1 className={styles.heading}>About Me</h1>
                    <p className='mt-3 text-center'>
                        Hi everyone, I'm Lewis and I'm a web developer!<br></br>
                        I was born in Wolverhampton, UK and enjoyed many activities growing up. Most notably cricket in which I reached junior representative level for Staffordshire.
                        I am also an avid Birmingham City fan, something I blame my father for each day.<br></br>
                        I have been living in Murcia, Spain since I was 21 and have been an English Teacher throughout my time here.
                    </p>  
                </div>
                <div className='homepage-image'>
                <img src="./bio/car.jpeg" alt="lana" width={300} className='rounded hover:shadow-xl' />
                </div>     
            </div>
            <div className='flex flex-wrap'>
                <div>
                    <h1 className={styles.heading}>Why Web Dev?</h1>
                    <p className='mt-3 text-center'>
                        This section really got my stumped (cricket pun right there). Do I go the standard way of how I've always been obsessed with web development, or tell the truth. Well mother always did say honesty was the best policy. <br></br> 
                        I.C.T at school was a pain, I couldn't stand it! The computer never did what I asked and had a mind of its own, I don't know how I blagged 2 b's in my G.C.S.E. <br></br>
                        However, like everyone in the world, March 2020 changed everything. Now I found myself working from home with my laptop. And I'll be honest, i quite liked this working from home with a laptop gig. <br></br>
                        So a simple google search of 'highest paid jobs working from home' gave me two possibilities.<br></br>
                        The first option was to become an author, now I did like English but a bit more research revealed how lucky I had to be to break into the industry, and well, I wouldn't be paid tomorrow...<br></br>
                        So option 2 was web development. I spoke to a close friend of mine who is a backend developer about it and he told me that I should have a look and its worth looking into. <br></br>
                        I enrolled onto Harvard's CS50 course and started watching the lectures, this was extremely interesting, despite the tasks that were being set were far too advanced for me at the time. <br></br>
                        Thus I paid for Colt Steele's Web Developer Bootcamp on Udemy and since then I have been hooked. I've done many courses ranging from simple JavaScripts and CSS courses, to React, Next, MERN stack, TypeScript, Tailwind etc, the list goes on. <br></br>
                        And well here I am now, I find myself in a position where I feel ready to enter the real world, yet still the desire to do more courses and expland my ever increasing knowledge in this.
                    </p>
                </div>
                <div className='homepage-image'>
                    <img src="./bio/lana.jpeg" alt="car" width={300} className='rounded hover:shadow-xl' />
                </div>
            </div>
        </main>
    </div>
    );
}
 
export default Bio;