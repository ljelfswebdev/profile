import Head from 'next/head'
import styles from '../styles/Home.module.css'


const Skills = () => {
    const skill = [
        { text: 'HTML', imageUrl:"./skillstn/HTML.png"},
        { text: 'CSS', imageUrl:"./skillstn/CSS.png" },
        { text: 'JavaScript', imageUrl:"./skillstn/JavaScript.png" },
        { text: 'Tailwind CSS', imageUrl:"./skillstn/Tailwind.png" },
        { text: 'Bootstrap', imageUrl:"./skillstn/Bootstrap.png" },
        { text: 'React JS', imageUrl:"./skillstn/React JS.png" },
        { text: 'Next JS', imageUrl:"./skillstn/Next JS.png" },
        { text: 'MERN', imageUrl:"./skillstn/MERN Stack.png" },
        { text: "API's", imageUrl:"./skillstn/API's.png" },
        { text: 'Github', imageUrl:"./skillstn/Github.png" },
        { text: 'TypeScript', imageUrl:"./skillstn/TypeScript.png"},
        { text: 'Spanish', imageUrl:"./skillstn/Spanish.png"}
    ];

    return ( 
    <div className={styles.container}>
        <Head>
            <title>Lewis Jelfs | Skills</title>
            <meta name="description" content="Profile Page for Lewis Jelfs" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title} id="underline">
             My Skills 
            </h1>
            <div className="container my-12 mx-auto ">
                <div className="flex flex-wrap ">
                    {skill.map(skill => {
                        return(
                            <div key={skill.text} className="w-full p-5 md:w-1/2 lg:w-1/3 text-center rounded overflow-hidden shadow-2xl hover:bg-lemon mb-5">
                                <div className="flex flex-wrap lg:-mx-4 justify-center items-center hover:rounded">
                                    <div className='absolute mr-64'>
                                        <img className="block h-20 w-20 rounded object-fit" src={skill.imageUrl} alt={skill.text}/>
                                    </div>
                                    <div className="font-bold text-xl mb-2 items-center ml-64 ">
                                        <header className="flex items-center justify-between leading-tight p-2 mt-5">
                                        <h1>{skill.text}</h1>
                                        </header>
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
 
export default Skills;