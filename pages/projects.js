import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


const Projects = () => {
    const project = [
        {text:'LJ-Gram App', description:'A Social Media styled website', github:'https://github.com/ljelfswebdev/LJGram-server', github2:'https://github.com/ljelfswebdev/LJGram-client', site:'https://ljgram-client.vercel.app/'},
        {text:'Recipe App', description: 'A recipe app with a randomiser', github: 'https://github.com/ljelfswebdev/Recipe', site:'https://recipe-liart.vercel.app/'},
        {text:'An eDino App', description:'An ecommerce styled website', github:'https://github.com/ljelfswebdev/ecommerce', site:'https://github.com/ljelfswebdev/ecommerce'},
        {text:' A DinoDex App', description:'A dinosaur randomiser game', github:'https://github.com/ljelfswebdev/dinodex', site:'https://dinodex.vercel.app/game'}
    ] 
    return ( 
    <div className={styles.container}>
        <Head>
            <title>Lewis Jelfs | Projects</title>
            <meta name="description" content="Profile Page for Lewis Jelfs" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title} id="underline">
            My Projects 
            </h1>
            <div className="container my-12 mx-auto ">
                <div className="flex flex-wrap ">
                    {project.map(project => {
                        return(
                            <div key={project.text} className="w-full p-5 md:w-1/2 lg:w-1/3 text-center rounded overflow-hidden shadow-2xl hover:bg-lemon">
                                <div className="flex flex-wrap lg:-mx-4 justify-center items-center hover:rounded">
                                    <div className="font-bold text-xl mb-2 items-center ">
                                        <header className="flex items-center justify-between leading-tight p-2 mt-5">
                                        <h1>{project.text}</h1>
                                        </header>
                                    </div>
                                    <div className="font-bold text-xl mb-2 items-center ">
                                        {project.description}
                                    </div>
                                    <br></br>
                                    <div >
                                        <Link href={project.github}>
                                            <a><button className="bg-green hover:bg-gray hover:text-green text-gray font-bold py-2 px-2 mb-2 mr-2 rounded-full">View Code</button></a>
                                        </Link>
                                        <Link href={project.site}>
                                            <a><button className="bg-green hover:bg-gray hover:text-green text-gray font-bold py-2 px-2 mb-2 mr-2 rounded-full">View Site</button></a>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </main>
    </div>
    );
}
 
export default Projects;