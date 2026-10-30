"use client";
import { courses } from "../data/courses";
import { useCourses } from "../hooks/useCourses";
import Kurs from "../components/kurs";

export default function LandingPage() {
  const { filteredCourses, sortedCourses, setSortBy } = useCourses(courses);
  const totalHours = courses.reduce((total, course) => total + course.duration, 0);
  const totalInstructors = new Set(courses.map((course) => course.creatorName)).size;
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
                Pedalini is where experts share knowledge and learners build
                skills. Create a course, or discover something worth knowing.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="/browsePage"
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
            </div>
          </div>
        </div>
      </section>

      {/*Lekkie menu tutaj pod każdy widzi pod co*/}
      <section className="bg-[#08080f] font-sans border-t border-[#15151f]">
        <div className="container mx-auto py-10 max-w-[1120px]">
          <div className="rounded-xl border border-[#24243a] bg-[#12121e] grid grid-cols-1 sm:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="text-center">
              <p className="font-mono tabular-nums text-4xl text-white font-bold">
                {filteredCourses.length}
              </p>
              <p className="mt-1 text-sm text-[#85859b]">Courses published </p>
            </div>
            <div>
              <p className="font-mono tabular-nums text-4xl text-white">-</p>
              <p className="mt-1 text-sm text-[#85859b]">Active learners</p>
            </div>
            <div className="text-center">
              <p className="font-bold font-mono tabular-nums text-4xl text-white">{totalInstructors}</p>
              <p className="mt-1 text-sm text-[#85859b]">Expert instructors</p>
            </div>
            <div className="text-center">
              <p className="font-bold font-mono tabular-nums text-4xl text-white">{totalHours}</p>
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

          {sortedCourses.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sortedCourses.slice(0, 3).map((course) => (
                <Kurs key={course.title} {...course} />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-[#9293b5]">No courses available yet.</p>
          )}
        </div>
      </section>

      {/*Tutaj wyszukiwanie kurcze kursów każdy widzi*/}
      <section className="bg-[#08080f] font-sans border-t border-[#15151f]">
        <div className="container mx-auto py-20 max-w-[1120px]">
          <h2 className="text-2xl font-bold text-white">Browse by category</h2>
          <div className="container mx-auto max-w-[1120px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
              <a
                href="/browsePage?category=Design"
                className="text-[#85859b] rounded-xl border border-[#24243a] bg-[#08080f] p-6 transition-colors duration-200 hover:bg-[#12121e] hover:border-[#14b8a6]/40"
              >
                🎨 Design
              </a>
              <a
                href="/browsePage?category=Engineering"
                className="text-[#85859b] rounded-xl border border-[#24243a] bg-[#08080f] p-6 transition-colors duration-200 hover:bg-[#12121e] hover:border-[#14b8a6]/40"
              >
                ⚙️ Engineering
              </a>
              <a
                href="/browsePage?category=Data%20Science"
                className="text-[#85859b] rounded-xl border border-[#24243a] bg-[#08080f] p-6 transition-colors duration-200 hover:bg-[#12121e] hover:border-[#14b8a6]/40"
              >
                📊 Data Science
              </a>
              <a
                href="/browsePage?category=Creative"
                className="text-[#85859b] rounded-xl border border-[#24243a] bg-[#08080f] p-6 transition-colors duration-200 hover:bg-[#12121e] hover:border-[#14b8a6]/40"
              >
                🎬 Creative
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tutaj ostatnio dodane pzdr */}
      <section className="bg-[#08080f] font-sans border-t border-[#15151f]">
        <div className="container mx-auto py-20 max-w-[1120px]">
          <h2 className="text-2xl font-bold text-white">Just added</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...courses]
              .sort(
                (a, b) =>
                  new Date(b.createdAt ?? "1970-01-01").getTime() -
                  new Date(a.createdAt ?? "1970-01-01").getTime()
              )
              .slice(0, 3)
              .map((course) => (
                <Kurs key={course.title} {...course} />
              ))}
          </div>
        </div>
      </section>

      {/*Tutaj odnośnik do logowania każdy widzi*/}
      <section className="bg-[#08080f] font-sans border-t border-[#15151f]">
        <div className="container mx-auto max-w-[1120px] px-4 py-20 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to share your expertise?
          </h2>
          <p className="mt-3 text-[#85859b]">
            Join thousands of instructors earning income by teaching what they
            know.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a
              href="/registerPage"
              className="h-11 px-6 flex items-center justify-center rounded-xl bg-[#14b8a6] text-sm font-medium text-[#07100f] transition-colors hover:bg-[#2dd4bf]"
            >
              Create your free account
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
