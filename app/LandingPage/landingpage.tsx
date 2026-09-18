const CATEGORIES = [
    { label: "Development", desc: "Code, ship, and debug real projects" },
    { label: "Design", desc: "Interfaces, brand, and visual craft" },
    { label: "Business", desc: "Strategy, finance, and operations" },
    { label: "Marketing", desc: "Growth, content, and paid channels" },
];

const STEPS = [
    {
        n: "1",
        title: "Find a course",
        desc: "Search by topic and skill level. Every listing shows a real syllabus, not just a trailer.",
    },
    {
        n: "2",
        title: "Enroll instantly",
        desc: "Pay once through Pedalini and get access right away. No subscriptions, no upsells.",
    },
    {
        n: "3",
        title: "Learn at your pace",
        desc: "Lessons stay yours to revisit. Message the instructor directly if you get stuck.",
    },
];

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            {}
            <section className="bg-[#08080f] font-sans">
                <div className="container mx-auto px-6 py-20 max-w-[1120px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                                Learn from people who've actually done it.
                            </h1>
                            <p className="mt-5 text-[#85859b] text-lg max-w-md">
                                Pedalini is a marketplace where instructors sell courses directly to
                                learners. Browse by topic, pay once, and keep the lessons for good.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <a
                                    href="/browse"
                                    className="h-11 px-6 flex items-center justify-center rounded-xl bg-[#14b8a6] text-sm font-medium text-[#07100f] transition-colors hover:bg-[#2dd4bf]"
                                >
                                    Browse courses
                                </a>
                                <a
                                    href="/registerPage"
                                    className="h-11 px-6 flex items-center justify-center rounded-xl border border-[#24243a] text-sm font-medium text-white transition-colors hover:border-[#14b8a6]"
                                >
                                    Teach a course
                                </a>
                            </div>

                            <p className="mt-6 text-sm text-[#85859b]">
                                Free to browse. Instructors keep 85% of every sale.
                            </p>
                        </div>

                        {/* Course player panel */}
                        <div className="rounded-xl border border-[#24243a] bg-[#12121e] p-6">
                            <div className="flex items-center justify-between">
                                <p className="text-sm text-white font-medium">Advanced TypeScript Patterns</p>
                                <span className="h-2 w-2 rounded-full bg-[#14b8a6]" />
                            </div>
                            <p className="mt-1 text-xs text-[#85859b]">Lesson 4 of 12 &middot; Generics in practice</p>

                            <div className="mt-5 h-1.5 w-full rounded-full bg-[#24243a] overflow-hidden">
                                <div className="h-full w-1/3 rounded-full bg-[#14b8a6]" />
                            </div>

                            <div className="mt-6 flex flex-col gap-2">
                                {[
                                    { label: "Intro to the type system", done: true },
                                    { label: "Narrowing and inference", done: true },
                                    { label: "Utility types from scratch", done: true },
                                    { label: "Generics in practice", done: false, active: true },
                                    { label: "Building a typed API client", done: false },
                                ].map((lesson) => (
                                    <div
                                        key={lesson.label}
                                        className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                                            lesson.active ? "bg-[#101b1e]" : ""
                                        }`}
                                    >
                                        <span
                                            className={`h-4 w-4 flex-shrink-0 rounded-full border ${
                                                lesson.done
                                                    ? "bg-[#14b8a6] border-[#14b8a6]"
                                                    : lesson.active
                                                    ? "border-[#14b8a6]"
                                                    : "border-[#24243a]"
                                            }`}
                                        />
                                        <p
                                            className={`text-sm ${
                                                lesson.active ? "text-white" : "text-[#85859b]"
                                            }`}
                                        >
                                            {lesson.label}
                                        </p>
                                        <span className="ml-auto font-mono tabular-nums text-xs text-[#85859b]">
                                            {lesson.done ? "12:04" : lesson.active ? "18:40" : "09:52"}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {}
            <section className="bg-[#08080f] font-sans border-t border-[#15151f]">
                <div className="container mx-auto px-6 py-16 max-w-[1120px]">
                    <h2 className="text-2xl font-bold text-white">Find your next course</h2>
                    <p className="mt-2 text-[#85859b] max-w-md">
                        Every course is built and sold by a single instructor, not a studio.
                    </p>

                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {CATEGORIES.map((category) => (
                            <a
                                key={category.label}
                                href={`/browse?category=${category.label.toLowerCase()}`}
                                className="rounded-xl border border-[#24243a] bg-[#12121e] p-5 transition-colors hover:border-[#14b8a6]"
                            >
                                <p className="text-white font-medium">{category.label}</p>
                                <p className="mt-1 text-sm text-[#85859b]">{category.desc}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {}
            <section className="bg-[#08080f] font-sans border-t border-[#15151f]">
                <div className="container mx-auto px-6 py-16 max-w-[1120px]">
                    <h2 className="text-2xl font-bold text-white">How Pedalini works</h2>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {STEPS.map((step) => (
                            <div key={step.n} className="rounded-xl border border-[#24243a] bg-[#12121e] p-6">
                                <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-[#101b1e] text-[#14b8a6] font-mono text-sm">
                                    {step.n}
                                </div>
                                <p className="mt-4 text-white font-medium">{step.title}</p>
                                <p className="mt-2 text-sm text-[#85859b]">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {}
            <section className="bg-[#08080f] font-sans border-t border-[#15151f]">
                <div className="container mx-auto px-6 py-16 max-w-[1120px]">
                    <div className="rounded-xl border border-[#24243a] bg-[#12121e] px-6 py-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
                        <div>
                            <p className="font-mono tabular-nums text-3xl text-white">8,200+</p>
                            <p className="mt-1 text-sm text-[#85859b]">courses listed</p>
                        </div>
                        <div>
                            <p className="font-mono tabular-nums text-3xl text-white">1,900</p>
                            <p className="mt-1 text-sm text-[#85859b]">active instructors</p>
                        </div>
                        <div>
                            <p className="font-mono tabular-nums text-3xl text-white">4.8</p>
                            <p className="mt-1 text-sm text-[#85859b]">average course rating</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="bg-[#08080f] font-sans border-t border-[#15151f]">
                <div className="container mx-auto px-6 py-20 max-w-[1120px] text-center">
                    <h2 className="text-3xl font-bold text-white">Your next skill is one course away.</h2>
                    <p className="mt-3 text-[#85859b]">Create an account and start browsing courses.</p>
                    <div className="mt-8 flex justify-center gap-3">
                        <a
                            href="/registerPage"
                            className="h-11 px-6 flex items-center justify-center rounded-xl bg-[#14b8a6] text-sm font-medium text-[#07100f] transition-colors hover:bg-[#2dd4bf]"
                        >
                            Get started
                        </a>
                        <a
                            href="/browse"
                            className="h-11 px-6 flex items-center justify-center rounded-xl border border-[#24243a] text-sm font-medium text-white transition-colors hover:border-[#14b8a6]"
                        >
                            Browse courses
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}
