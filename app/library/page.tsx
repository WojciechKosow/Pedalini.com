import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function LibraryPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <section className="flex-1 bg-[#08080f] font-sans text-white">
                <div className="container mx-auto max-w-[1120px] px-4 py-10">

                    {/* Header */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold">My Library</h1>
                        </div>

                        {/* Filter (na razie sam wygląd) */}
                        <div className="flex h-11 rounded-xl border border-[#24243a] bg-[#12121e] p-1">
                            <button className="rounded-lg bg-[#0d0d17] px-4 text-sm font-medium text-white">
                                All
                            </button>
                            <button className="rounded-lg px-4 text-sm text-[#85859b] transition-colors hover:text-white">
                                In progress
                            </button>
                            <button className="rounded-lg px-4 text-sm text-[#85859b] transition-colors hover:text-white">
                                Completed
                            </button>
                        </div>
                    </div>

                    {/*kupione kursy w sumie*/}
                    <div>
                        <h2 className="text-2xl font-bold">Purchased courses</h2>
                        tu dodać kupione
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">My courses</h2>
                        tu dodać moje zrobione pzdr
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
