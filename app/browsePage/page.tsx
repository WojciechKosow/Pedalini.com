"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const categories = [
    "All", 
    "Design",
    "Engineering",
    "Data science",
    "Creative",
    "Business",
    "Photography",
];

export default function browsePage(){
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortOption, setSortOption] = useState("Most Popular");
    return(
        <>
        <Navbar />
            <main className="min-h-screen bg-[#08080f] text-white">
                <div className="mx-auto max-w-[1120px] px-6 py-8">
                    <h1 className="mb-6 text-3xl font-bold">
                        Browse courses
                    </h1>

                    <div className="relative mb-6">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777797]">
                            ⌕
                        </span>
                        <input 
                            type="text" 
                            placeholder="Search by title, category, creator..."
                            className="h-12 w-full rounded-xl border border-[#24243a] bg-[#12121e] pl-11 pr-4 text-sm text-white outline-none placeholder:text-[#777797] focus:border-[#14b8a6]" 
                            />
                    </div>
                    
                    <div className="mb-8 flex flex-wrap gap-2">
                        {categories.map((category) => {
                            const isSelected = selectedCategory === category;
                                return (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
                                            isSelected
                                            ? "border-[#14b8a6] bg-[#14b8a6] text-[#071313]"
                                            : "border-[#29293d] bg-[#12121e] text-[#9293b5] hover:border-[#3b3b55] hover:text-white"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                );
                        })}
                    </div>

                    <div className="mb-5 flex items-center justify-between">
                        <p className="text-sm text-[#9293b5]">0 courses</p>
                        <select 
                            value={sortOption} 
                            onChange={(e) => setSortOption(e.target.value)}
                            className="rounded-lg border border-[#29293d] bg-[#12121e] px-4 py-2 text-sm text-white outline-none transition-colors focus:border-[#14b8a6]">
                                <option>Most popular</option>
                                <option>Highest rated</option>
                                <option>Newest</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                        </select>
                    </div>

                </div>
            </main>
        <Footer />
        </>
    )
}