"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import FAQItem from "../scripts/FAQitem";

export default function Help() {
  return (
    <>

      <Navbar />
      <section className="bg-[#08080f] py-24 md:py-32 text-[#85859b]">
        <div className="grid grid-cols-12">
          <div className="col-span-6 col-start-4">
            <h1 className="text-3xl text-white">Help & Guide</h1>
            <p>Everything you need to know about using Pedalini</p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/registerPage"
                className="bg-[#12121e] w-full h-35 rounded-xl flex items-center justify-center"
              >
                Create Account
              </Link>
              <Link
                href="/registerPage"
                className="bg-[#12121e] w-full h-35 rounded-xl flex items-center justify-center"
              >
                Browse courses
              </Link>
              <Link
                href="/library"
                className="bg-[#12121e] w-full h-35 rounded-xl flex items-center justify-center"
              >
                My Library
              </Link>
              <Link
                href="/createPage"
                className="bg-[#12121e] w-full h-35 rounded-xl flex items-center justify-center"
              >
                Create Courses
              </Link>
            </div>
            <div>
              <FAQItem
              question="How do I Create an Account?"
              answer="Click 'Get started' in the top navigation bar, fill in your name
              , email address, and a password of at least 6 characters. Your account is created instantly — no email verification required for the demo.">
              </FAQItem>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
