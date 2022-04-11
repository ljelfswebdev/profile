import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const Contact = () => {
    const contact = [
        {text:'Github', link:'https://github.com/ljelfswebdev', avatar:'./contacts/Github.png'},
        {text:'LinkedIn', link: 'https://www.linkedin.com/in/lewis-jelfs-b715b921b/', avatar:'./contacts/LinkedIn.png'}
    ]
    return ( 
    <div className={styles.container}>
        <Head>
            <title>Lewis Jelfs | Contact</title>
            <meta name="description" content="Profile Page for Lewis Jelfs" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
            Contact 
            </h1>
            <div className="container my-12 mx-auto ">
                <div className="flex flex-wrap ">
                    {contact.map(contact => {
                        return(
                            <div key={contact.text} className="w-full p-5 md:w-1/2 lg:w-1/3 text-center rounded overflow-hidden shadow-2xl hover:bg-lemon">
                                <div className="flex flex-wrap lg:-mx-4 justify-center items-center hover:rounded">
                                    <div >
                                        <Link href={contact.link}>
                                            <a><button className="bg-green hover:bg-gray hover:text-green text-gray font-bold py-2 px-2 mb-4 m-auto rounded-full">View {contact.text}</button></a>
                                        </Link>
                                        <img src={contact.avatar} alt={contact.text} width={80} height={80} className="rounded items-center m-auto"/>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="w-full p-5 md:w-1/2 lg:w-1/3 text-center rounded overflow-hidden shadow-2xl hover:bg-lemon">
                                <div className="flex flex-wrap lg:-mx-4 justify-center items-center hover:rounded">
                                    <div >       
                                        <a href="mailto:ljelfswebdev@gmail.com"><button className="bg-green hover:bg-gray hover:text-green text-gray font-bold py-2 px-12 mb-4 m-auto rounded-full">Email</button></a>
                                        <img src="./contacts/Email.png" alt="email" width={80} height={80} className="rounded items-center m-auto"/> 
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </main>
    </div>
    );
}
 
export default Contact;