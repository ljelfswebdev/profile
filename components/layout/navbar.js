import {useState} from 'react'
import Link from 'next/link'



function NavLink({to, children}) {
    return <a href={to} className={`mx-4 hover:text-white`}>
        {children}
    </a>
}


function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-lemon transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-left p-2 filter drop-shadow-md bg-background h-20"> {/*logo container*/}
                <Link href="/">
                <a><img src="./favicon.ico" alt="LJ"/></a>
                </Link>     
            </div>
            <div className="flex flex-col ml-4">
                <Link href="/bio">
                    <a className="text-xl font-medium my-4 hover:text-white"onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        BIO
                    </a>
                </Link>
               <Link href="/skills">
                    <a className="text-xl font-normal my-4 hover:text-white"  onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                       SKILLS
                    </a> 
               </Link>
                <Link href="/projects">
                    <a className="text-xl font-normal my-4 hover:text-white"  onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        PROJECTS
                    </a>
                </Link>
                <Link href="/contact">
                    <a className="text-xl font-normal my-4 hover:text-white"  onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        CONTACT
                    </a> 
                </Link>
            </div>  
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
        return (
            <nav className="flex filter drop-shadow-md bg-lemon px-4 py-4 h-20 items-center">
                <MobileNav open={open} setOpen={setOpen}/>
                <div className="w-3/12 flex items-center">
                <Link href="/">
                <a><img src="./favicon.ico" alt="LJ"/></a>
                </Link> 
                </div>
                <div className="w-9/12 flex justify-end items-center">
                    <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                    </div>
    
                    <div className="hidden md:flex">
                        <NavLink to="/bio">                  
                              BIO  
                        </NavLink>
                        <NavLink to="/skills">
                              SKILLS  
                        </NavLink>
                        <NavLink to="/projects">
                              PROJECTS  
                        </NavLink>
                        <NavLink to="/contact">
                              CONTACT  
                        </NavLink>
                    </div>
                </div>
            </nav>
        )
    }