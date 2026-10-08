export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            {/*Góra strony*/}
            <section className="bg-[#08080f] font-sans">
                <div className="container mx-auto py-20 max-w-[1120px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                                Learn anything.
                            </h1>
                            <h1 className="text-4xl sm:text-5xl font-bold text-[#14b8a6] leading-tight">
                                Teach everyone.
                            </h1>
                            <p className="mt-5 text-[#85859b] text-lg max-w-md">
                                Pedalini is where experts share knowledge and learners build skills. Create a course, or discover something worth knowing.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <a
                                    href="/browse"
                                    className="h-11 px-6 flex items-center justify-center rounded-xl bg-[#14b8a6] text-sm font-medium text-[#07100f] transition-colors hover:bg-[#2dd4bf]">
                                    Browse courses
                                </a>
                                <a
                                    href="/registerPage"
                                    className="h-11 px-6 flex items-center justify-center rounded-xl border border-[#24243a] text-sm font-medium text-white transition-colors hover:border-[#14b8a6]">
                                    Teach a course
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Lekkie menu tutaj pod każdy widzi pod co*/}
            <section className="bg-[#08080f] font-sans border-t border-[#15151f]">
                <div className="container mx-auto py-10 max-w-[1120px]">
                    <div className="rounded-xl border border-[#24243a] bg-[#12121e] grid grid-cols-1 sm:grid-cols-4 gap-6 text-center sm:text-left">
                        <div>
                            <p className="font-mono tabular-nums text-4xl text-white">-</p>
                            <p className="mt-1 text-sm text-[#85859b]">Courses published</p>
                        </div>
                        <div>
                            <p className="font-mono tabular-nums text-4xl text-white">-</p>
                            <p className="mt-1 text-sm text-[#85859b]">Active learners</p>
                        </div>
                        <div>
                            <p className="font-mono tabular-nums text-4xl text-white">-</p>
                            <p className="mt-1 text-sm text-[#85859b]">Expert instructors</p>
                        </div>
                        <div>
                            <p className="font-mono tabular-nums text-4xl text-white">-</p>
                            <p className="mt-1 text-sm text-[#85859b]">Hours of content</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*Tutaj lista kursów fajnie*/}
            <section className="bg-[#08080f] font-sans border-t border-[#15151f]">
                <div className="container mx-auto py-20 max-w-[1120px]">
                    <h2 className="text-2xl font-bold text-white">Trendning courses</h2>
                    <p className="mt-2 text-[#85859b] max-w-md">
                        Ranked by popularity and ratings
                    </p>

                    Tutaj wsadzic kursy

                </div>
            </section>

            {/*Tutaj wyszukiwanie kurcze kursów każdy widzi*/}
            <section className="bg-[#08080f] font-sans border-t border-[#15151f]">
                <div className="container mx-auto py-20 max-w-[1120px]">
                    <h2 className="text-2xl font-bold text-white">Browse by category</h2>
                    <div className="container mx-auto max-w-[1120px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
                            <div className="rounded-xl border border-[#24243a] bg-[#08080f] p-6 transition-colors duration-200 hover:bg-[#12121e] hover:border-[#14b8a6]/40">
                                🎨
                                Design
                            </div>
                            <div className="rounded-xl border border-[#24243a] bg-[#08080f] p-6 transition-colors duration-200 hover:bg-[#12121e] hover:border-[#14b8a6]/40">
                                ⚙️
                                Engineering
                            </div>
                            <div className="rounded-xl border border-[#24243a] bg-[#08080f] p-6 transition-colors duration-200 hover:bg-[#12121e] hover:border-[#14b8a6]/40">
                                📊
                                Data Science
                            </div>
                            <div className="rounded-xl border border-[#24243a] bg-[#08080f] p-6 transition-colors duration-200 hover:bg-[#12121e] hover:border-[#14b8a6]/40">
                                🎬
                                Creative
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Tutaj odnośnik do logowania każdy widzi*/}
            <section className="bg-[#08080f] font-sans border-t border-[#15151f]">
                <div className="container mx-auto max-w-[1120px] grid grid-cols-1 sm:grid-cols-4 text-center">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 py-6">
                        <h2 className="text-3xl font-bold text-white">Ready to share your expertise?</h2>
                        <p className="mt-3 text-[#85859b]">Join thousands of instructors earning income by teaching what they know.</p>
                        <div className="mt-8 flex justify-center gap-3">
                            <a
                                href="/registerPage"
                                className="h-11 px-6 flex items-center justify-center rounded-xl bg-[#14b8a6] text-sm font-medium text-[#07100f] transition-colors hover:bg-[#2dd4bf]">
                                Create your free account
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
