export default function Navbar(){
    return(
        <nav className="h-[52px] bg-[#08080f] border-b border-gray-800 font-sans" >
            <div className="mx-auto flex h-full max-w-[1120px] items-center justify-between px-6">
               
                {/*Logo */}
                <div>
                    <a href="#" className="flex items-center">
                        <img src="pedalinilogo.png" alt="Pedalini" className="h-6 w-auto"/>  
                    </a>
                </div>

                {/*Options (home, browse, help) */}
                <div>
                    <ul className="flex items-center gap-1">
                        <li>
                            <a 
                            href="#" 
                            className="rounded-lg bg-[#101b1e] px-3 py-2 text-sm font-medium text-[#14b8a6]"
                            >Home</a>
                        </li>

                        <li>
                            <a 
                            href="#" 
                            className="rounded-lg px-3 py-2 text-sm text-[#85859b] transition-colors hover:text-white"
                            >Browse</a>
                        </li> 

                        <li>
                            <a 
                            href="#" 
                            className="rounded-lg px-3 py-2 text-sm text-[#85859b] transition-colors hover:text-white"
                            >Help</a>
                        </li>
                    </ul>  
                </div>
                
                
                {/*Buttons Sign in/Register */}
                <div>
                    <div className="flex items-center gap-5">
                        <a 
                            href="/loginPage" 
                            className="text-sm text-[#85859b] transition-colors hover:text-white"
                            >Log in</a>                                                  
                        
                        <a 
                            href="/registerPage" 
                            className="rounded-lg bg-[#14b8a6] px-4 py-2 text-sm font-medium text-[#07100f] transition-colors hover:bg-[#2dd4bf]"
                            >Register</a>
                    </div>
                </div>

            </div>
        </nav>
    );
}