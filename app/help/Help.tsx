export default function Help() {
    return (
        <section className="bg-[#08080f] py-24 md:py-32 text-[#85859b]">
    
            <div className="grid grid-cols-12">
            
                <div className="col-span-6 col-start-4">
                    
                    <h1 className="text-3xl text-white">
                        Help & Guide
                    </h1>
                    <p>
                        Everything you need to know about using Pedalini
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="bg-[#12121e] w-full h-35 rounded-xl">
                            Create Account
                        </button>

                        <button className="bg-[#12121e] w-full h-35 rounded-xl">
                            Browse courses
                        </button>

                        <button className="bg-[#12121e] w-full h-35 rounded-xl">
                            My Library
                        </button>

                        <button className="bg-[#12121e] w-full h-35 rounded-xl">
                            Create course
                        </button>
                    </div>

                </div>

            </div>
            
        </section>
    )
}