import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

function page() {
  return (
    <div>
      <>
        <Navbar />
        <section className="bg-[#08080f] py-24 md:py-32 text-[#85859b]">
          <div className="grid grid-cols-12">
            <div className="col-span-6 col-start-4">
              <h1 className="text-3xl text-white">Create a new course</h1>
              <p>
                Fill in the details below to get started. You can add lessons
                and publish later.
              </p>
              <div className="mt-6 flex flex-col gap-1">
                <p>Course title</p>
                <input
                  type="text"
                  placeholder="e.g. Advanced Python for Data Science"
                  className="p-5 cursor-pointer bg-[#12121e] border border-[#1c1c2b] text-white rounded-xl w-full placeholder:text-[#85859b]"
                />
              </div>
              <div className="mt-6 flex flex-col gap-1">
                <p>Short description</p>
                <input
                  type="text"
                  placeholder="One sentence about what students will learn"
                  className="p-5 cursor-pointer bg-[#12121e] border border-[#1c1c2b] text-white rounded-xl w-full placeholder:text-[#85859b]"
                />
              </div>

              <div className="mt-6 flex flex-col gap-1">
                <p>Price (USD)</p>
                <input
                  type="number"
                  placeholder="e.g. 49 - use 0 for free"
                  className="p-5 cursor-pointer bg-[#12121e] border border-[#1c1c2b] text-white rounded-xl w-full placeholder:text-[#85859b]"
                />
              </div>
              <div className="mt-6 flex flex-col gap-1">
                <p>Tags (comma separated)</p>
                <input
                  type="text"
                  placeholder="e.g Python, ML, scikit-learn"
                  className="p-5 cursor-pointer bg-[#12121e] border border-[#1c1c2b] text-white rounded-xl w-full placeholder:text-[#85859b]"
                />
              </div>
              <div className="mt-6 flex flex-col gap-1">
                <p>Long describtion</p>
                <input
                  type="text"
                  placeholder="Describe in detail what students will learn, prerequisites, and what makes this course unique..."
                  className="p-5 cursor-pointer bg-[#12121e] border border-[#1c1c2b] text-white rounded-xl w-full placeholder:text-[#85859b]"
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <p className="text-[#85859b]">Category</p>
                  <select className="p-4 bg-[#12121e] border border-[#1c1c2b] text-white rounded-xl w-full cursor-pointer">
                    <option>Design</option>
                    <option>Engineering</option>
                    <option>Data Science</option>
                    <option>Business</option>
                    <option>Photography</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-[#85859b]">Level</p>
                  <select className="p-4 bg-[#12121e] border border-[#1c1c2b] text-white rounded-xl w-full cursor-pointer">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
              </div>
              <button className=" mt-4 border border-[#14b8a6] bg-[#14b8a6] text-black rounded-xl p-4 w-full">
                Create Course
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </>
    </div>
  );
}

export default page;
