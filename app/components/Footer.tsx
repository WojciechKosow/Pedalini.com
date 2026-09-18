export default function Footer(){
    return(
        <footer className="h-[52px] border-t border-gray-800 bg-[#08080f] ">
            <div className="mx-auto flex h-full max-w-[1120px] items-center justify-between px-6">
                
                {/* Pedalini text */}
                <div className="font-bold">
                    <div className="flex">
                        <p className="text-[#14b8a6]">Peda</p>
                        <p className="text-white">lini</p>
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <ul className="flex items-center gap-6">
                        <li>
                            <a 
                            href="#" 
                            className="text-xs text-[#85859b] transition-colors hover:text-white"
                            >Home</a>
                        </li>

                        <li>
                            <a 
                            href="#" 
                            className="text-xs text-[#85859b] transition-colors hover:text-white"
                            >Browse</a>
                        </li>

                        <li>
                            <a 
                            href="#" 
                            className="text-xs text-[#85859b] transition-colors hover:text-white"
                            >Help</a>
                        </li>
                    </ul>
                </div>

                {/* Copyright */}
                <div>
                    <p className="text-xs text-[#85859b]">© 2026 Pedalini. Knowledge marketplace.</p>    
                </div>    

            </div>
        </footer>
    );
}