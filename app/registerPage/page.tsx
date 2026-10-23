"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.error === "USER_ALREADY_EXISTS") {
          setError("An account with this email already exists.");
        } else if (result.error === "INVALID_INPUT") {
          setError(
            "Enter a valid email and a password of at least 8 characters.",
          );
        } else {
          setError("Something went wrong. Please try again.");
        }

        return;
      }

      router.replace("/loginPage?registered=1");
    } catch {
      setError("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 flex items-center justify-center bg-[#08080f] font-sans">
        <div className="container px-4 mx-auto">
          <div className="max-w-sm mx-auto">
            <div className="mb-6 text-center">
              <div className="flex justify-center mb-1 font-bold">
                <p className="text-[#14b8a6] text-3xl">Peda</p>
                <p className="text-white text-3xl">lini</p>
              </div>

              <p className="text-sm text-[#85859b]">
                Start your learning journey.
              </p>
            </div>

            <div className="my-4 flex h-11 rounded-xl border border-[#24243a] bg-[#12121e] p-1">
              <a
                href="/loginPage"
                className="flex flex-1 items-center justify-center rounded-lg text-sm text-[#85859b] hover:text-white"
              >
                Sign in
              </a>

              <a
                href="/registerPage"
                className="flex flex-1 items-center justify-center rounded-lg bg-[#0d0d17] text-sm font-medium text-white"
              >
                Register
              </a>
            </div>

            <form onSubmit={handleSubmit} className="my-6 flex flex-col gap-3">
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email address"
                aria-label="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="h-11 w-full px-4 text-white bg-[#12121e] border border-[#24243a] focus:border-[#14b8a6] focus:outline-none rounded-xl"
              />

              <input
                type="password"
                name="password"
                autoComplete="new-password"
                placeholder="Password (at least 8 characters)"
                aria-label="Password"
                minLength={8}
                maxLength={128}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="h-11 w-full px-4 text-white bg-[#12121e] border border-[#24243a] focus:border-[#14b8a6] focus:outline-none rounded-xl"
              />

              {error && (
                <p role="alert" className="text-sm text-red-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="h-11 w-full font-medium text-[#07100f] bg-[#14b8a6] hover:bg-[#2dd4bf] rounded-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Creating account..." : "Create account"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
