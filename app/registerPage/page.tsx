import Navbar from "../components/Navbar";

export default function RegisterPage(){
    return(
        <>
        <Navbar />
        <section className="py-24 md:py-64 bg-[#08080f] font-sans">
            <div className="container px-4 mx-auto">
                <div className="max-w-sm mx-auto">
                    <div className=" mb-6 text-center">
                        <div className="flex justify-center mb-1 font-bold">
                            <p className="text-[#14b8a6] text-3xl">Peda</p>
                            <p className="text-white text-3xl">lini</p> 
                        </div> 
                        <p className="text-lg text-[#85859b] text-sm ">Start your learning journey.</p>
                    </div>

                    <div className="my-4 flex h-11 rounded-xl border boder-[#24243a] bg-[#12121e] p-1">
                        <a href="#" className="flex flex-1 items-center justify-center rounded-lg text-sm text-[#85859b] transition-colors hover:text-white">Sign in</a>
                        <a href="#" className="flex flex-1 items-center justify-center rounded-lg text-sm bg-[#0d0d17] font-medium text-white transition-colors">Register</a>
                    </div>

                    <form className="my-6 flex flex-col gap-3">
                        <input 
                            type="text" 
                            placeholder="Full name" 
                            className="h-11 w-full pl-4 flex items-center text-[#85859b] bg-[#12121e] border border-[#24243a] focus:border-[#14b8a6] focus:outline-none rounded-xl"></input>
                            
                        <input 
                            type="email"
                            placeholder="Email address"
                            className="h-11 w-full pl-4 flex items-center text-[#85859b] bg-[#12121e] border border-[#24243a] focus:border-[#14b8a6] focus:outline-none rounded-xl"></input>
                    
                        <input
                            type="password"
                            placeholder="Password"
                            className="h-11 w-full pl-4 flex items-center text-[#85859b] bg-[#12121e] border border-[#24243a] focus:border-[#13b8a6] focus:outline-none rounded-xl"></input>
                    
                        <button 
                            type="submit"
                            className="h-11 w-full font-medium text-[#07100f] bg-[#14b8a6] transition-colors hover:bg-[#2dd4bf] rounded-xl cursor-pointer">Create account</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    );
}