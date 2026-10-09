"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DEMO_USER = {
    name: "Marcin Majkut",
    email: "marcinmajkut@gmail.com",
    password: "1234",
};

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const fillInfo = () => {
        setEmail(DEMO_USER.email);
        setPassword(DEMO_USER.password);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (email === DEMO_USER.email && password === DEMO_USER.password) {
            try {
                sessionStorage.setItem("demoUser", "true");
            } catch {}
            router.push("/dashboard");
        } else {
            setError("Invalid email or password.");
        }
    };

    const initials = DEMO_USER.name.split(" ").map((n) => n[0]).join("");

    const inputClass =
        "h-11 w-full px-4 text-white placeholder:text-[#85859b] bg-[#12121e] border border-[#24243a] focus:border-[#14b8a6] focus:outline-none rounded-xl";

    return (
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
                            <p className="text-[#85859b] text-sm">Welcome back.</p>
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
                        <form onSubmit={handleSubmit} className="my-6 flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={inputClass}
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={inputClass}
                            />

                            {error && <p className="text-sm text-red-400">{error}</p>}

                            <button
                                type="submit"
                                className="h-11 w-full font-medium text-[#07100f] bg-[#14b8a6] transition-colors hover:bg-[#2dd4bf] rounded-xl cursor-pointer"
                            >Sign in</button>
                        </form>

                        {/* konto kurcze demo */}
                        <button
                            type="button"
                            onClick={fillInfo}
                            className="mt-4 flex w-full items-center gap-3 rounded-xl border border-[#24243a] bg-[#12121e] p-3 text-left transition-colors hover:border-[#14b8a6] cursor-pointer"
                        >
                            <div className="min-w-0">
                                <p className="text-sm font-medium text-white">{DEMO_USER.name}</p>
                                <p className="truncate text-sm text-[#85859b]">{DEMO_USER.email}</p>
                            </div>
                        </button>

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}