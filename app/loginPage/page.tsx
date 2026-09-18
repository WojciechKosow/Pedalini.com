import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LoginPage(){
    return(
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <section className="flex-1 flex items-center justify-center bg-[#08080f] font-sans">
                <div className="container px-4 mx-auto">
                    <div className="max-w-sm mx-auto">
                        
                        {/* Header */}
                        <div className="mb-6 text-center">
                            <div className="flex justify-center mb-1 font-bold">
                                <p className="text-[#14b8a6] text-3xl">Peda</p>
                                <p className="text-white text-3xl">lini</p>
                            </div>
                            <p className="text-lg text-[#85859b] text-sm">
                                Welcome back.</p>
                        </div>

                        {/* Sign in/Register */}
                        <div className="my-4 flex h-11 rounded-xl border border-[#24243a] bg-[#12121e] p-1">
                            <a 
                                href="/loginPage" 
                                className="flex flex-1 items-center justify-center rounded-lg bg-[#0d0d17] text-sm font-medium text-white transition-colors"
                                >Sign in</a>  

                             <a 
                                href="/registerPage"
                                className="flex flex-1 items-center justify-center rounded-lg text-sm text-[#85859b] transition-colors hover:text-white"
                                >Register</a>     
                        </div>

                        {/* Form */}
                        <form className="my-6 flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="h-11 w-full pl-4 flex items-center text-[#85859b] bg-[#12121e] border border-[#24243a] focus:border-[#14b8a6] focus:outline-none rounded-xl"
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                className="h-11 w-full pl-4 flex items-center text-[#85859b] bg-[#12121e] border border-[#24243a] focus:border-[#14b8a6] focus:outline-none rounded-xl"
                            />

                            <button
                                type="submit"
                                className="h-11 w-full font-medium text-[#07100f] bg-[#14b8a6] transition-colors hover:bg-[#2dd4bf] rounded-xl cursor-pointer"
                                >Sign in</button>
                        </form>
                    
                    </div>
                </div>
            </section>
            <Footer />
        </div>
        
        
    );
}