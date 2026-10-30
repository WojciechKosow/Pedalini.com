
"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Kurs from "../components/kurs";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { courses } from "../data/courses";
import { useCourses } from "../hooks/useCourses";

export default function BrowsePage() {
  const searchParams = useSearchParams();
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    filteredCourses,
    sortedCourses,
  } = useCourses(courses);

  useEffect(() => {
    const category = searchParams.get("category");

    if(category){
      setSelectedCategory(category);
    }
  }, [searchParams, setSelectedCategory]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#08080f] text-white">
        <div className="mx-auto max-w-[1120px] px-6 py-8">
          <h1 className="mb-6 text-3xl font-bold">
            Browse courses
          </h1>

          {/* Wyszukiwanie */}
          <div className="relative mb-6">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777797]">
              ⌕
            </span>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, category, creator..."
              className="h-12 w-full rounded-xl border border-[#24243a] bg-[#12121e] pl-11 pr-4 text-sm text-white outline-none placeholder:text-[#777797] focus:border-[#14b8a6]"
            />
          </div>

          {/* Kategorie */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "border-[#14b8a6] bg-[#14b8a6] text-[#071313]"
                      : "border-[#29293d] bg-[#12121e] text-[#9293b5] hover:border-[#3b3b55] hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Liczba kursów i sortowanie */}
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-sm text-[#9293b5]">
              {filteredCourses.length} courses
            </p>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as typeof sortBy
                )
              }
              className="rounded-lg border border-[#29293d] bg-[#12121e] px-4 py-2 text-sm text-white outline-none transition-colors focus:border-[#14b8a6]"
            >
              <option value="Most Popular">Most Popular</option>
              <option value="Highest Rated">Highest Rated</option>
              <option value="Newest">Newest</option>
              <option value="Price: Low to High">
                Price: Low to High
              </option>
              <option value="Price: High to Low">
                Price: High to Low
              </option>
            </select>
          </div>

          {/* Lista kursów */}
          {sortedCourses.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sortedCourses.map((course) => (
                <Kurs key={course.title} {...course} />
              ))}
            </div>
          ) : (
            <p className="py-12 text-center text-[#9293b5]">
              No courses found.
            </p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
