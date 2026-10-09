"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const USER = { name: "Maciek Psikutas", email: "maciekpsikutas67@gmail.com", bio: "Senior UX designer with 12 years at top tech firms. I teach design thinking and prototyping." };

const STATS = [
    { label: "Enrolled", value: "0" },
    { label: "Completed", value: "0" },
    { label: "Teaching", value: "0" },
];


export default function DashboardPage() {
    const router = useRouter();
    const [ready, setReady] = useState(false);

    // Prosty guard: bez zalogowania na konto demo wracamy do logowania
    useEffect(() => {
        let ok = false;
        try {
            ok = sessionStorage.getItem("demoUser") === "true";
        } catch { }
        if (!ok) {
            router.replace("/loginPage");
        } else {
            setReady(true);
        }
    }, [router]);

    const signOut = () => {
        try {
            sessionStorage.removeItem("demoUser");
        } catch { }
        router.push("/loginPage");
    };

    if (!ready) return <div className="min-h-screen bg-[#08080f]" />;

    return (
        <div className="min-h-screen bg-[#08080f] font-sans text-white">
            <Navbar />
            <main className="container mx-auto max-w-[740px] px-4 py-10">

                {/* Profile */}
                <div className="flex items-start gap-4">
                    <div>
                        <h1 className="text-2xl font-bold">{USER.name}</h1>
                        <p className="mt-0.5 text-sm text-[#85859b]">{USER.email}</p>
                        <p className="mt-2 max-w-md text-sm text-[#85859b]">{USER.bio}</p>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                    {STATS.map((s) => (
                        <div
                            key={s.label}
                            className="flex h-[84px] flex-col items-center justify-center rounded-xl border border-[#24243a] bg-[#12121e]"
                        >
                            <p className="text-2xl font-bold">{s.value}</p>
                            <p className="text-xs text-[#85859b]">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap gap-3">
                    <a
                        href="/library"
                        className="flex h-10 items-center rounded-lg bg-[#14b8a6] px-4 text-sm font-medium text-[#07100f] transition-colors hover:bg-[#2dd4bf]"
                    >
                        My Library
                    </a>
                    <a
                        href="#"
                        className="flex h-10 items-center rounded-lg border border-[#24243a] bg-[#0d0d17] px-4 text-sm text-[#85859b] transition-colors hover:border-[#14b8a6] hover:text-white"
                    >
                        Create course
                    </a>
                    <button
                        onClick={signOut}
                        className="flex h-10 cursor-pointer items-center rounded-lg border border-[#24243a] bg-[#0d0d17] px-4 text-sm text-[#85859b] transition-colors hover:border-[#14b8a6] hover:text-white"
                    >
                        Sign out
                    </button>
                </div>

            </main>
            <Footer />
        </div>
    );
}
