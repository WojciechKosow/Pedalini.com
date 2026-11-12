import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { courses } from "../../data/courses";
import { notFound } from "next/navigation";
import { Play, Lock } from "lucide-react";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;

  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <section className="bg-[#08080f] py-24 md:py-32 text-[#85859b]">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            href="/browsePage"
            className="inline-block mb-6 text-sm text-teal-400"
          >
            ← Back to courses
          </Link>

          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 space-y-6">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-72 object-cover rounded-xl"
              />

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs bg-[#12121e] rounded-full">
                  {course.category}
                </span>

                <span className="px-3 py-1 text-xs bg-[#12121e] rounded-full">
                  {course.level}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-white">{course.title}</h1>

              <p className="leading-relaxed">{course.description}</p>

              {/* Author */}
              <div className="flex items-center gap-4 p-5 bg-[#12121e] rounded-xl">
                <img
                  src={course.creatorAvatar}
                  alt={course.creatorName}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold text-white">
                    {course.creatorName}
                  </p>
                  <p className="text-sm">Course instructor</p>
                </div>
              </div>

              {/* Course statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-[#12121e] border border-[#252538] rounded-xl p-4 text-center">
                  <p className="text-xl font-bold text-white">
                    {course.lessons}
                  </p>
                  <p className="text-xs text-[#85859b] mt-1">Lessons</p>
                </div>

                <div className="bg-[#12121e] border border-[#252538] rounded-xl p-4 text-center">
                  <p className="text-xl font-bold text-white">
                    {course.duration * 60}m
                  </p>
                  <p className="text-xs text-[#85859b] mt-1">Total time</p>
                </div>

                <div className="bg-[#12121e] border border-[#252538] rounded-xl p-4 text-center">
                  <p className="text-xl font-bold text-white">—</p>
                  <p className="text-xs text-[#85859b] mt-1">Students</p>
                </div>

                <div className="bg-[#12121e] border border-[#252538] rounded-xl p-4 text-center">
                  <p className="text-xl font-bold text-white">—</p>
                  <p className="text-xs text-[#85859b] mt-1">Views</p>
                </div>
              </div>

              {/* Curriculum */}
              <div className="mt-10">
                <h2 className="text-xl font-bold text-white mb-5">
                  Curriculum
                </h2>

                <div className="space-y-2">
                  {course.curriculum.map((lesson, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-4 p-4 bg-[#12121e] border border-[#252538] rounded-xl"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-7 h-7 shrink-0 rounded-lg flex items-center justify-center ${
                            lesson.preview
                              ? "bg-teal-500/15 text-teal-400"
                              : "bg-[#1a1a2a] text-[#85859b]"
                          }`}
                        >
                          {lesson.preview ? (
                            <Play size={14} fill="currentColor" />
                          ) : (
                            <Lock size={14} />
                          )}
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white truncate">
                            {lesson.title}
                          </p>

                          {lesson.preview && (
                            <p className="text-xs text-teal-400 mt-1">
                              Free preview
                            </p>
                          )}
                        </div>
                      </div>

                      <span className="text-xs text-[#85859b] shrink-0">
                        {lesson.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Purchase panel */}
            <aside className="sticky top-24 self-start p-6 bg-[#12121e] rounded-xl">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-yellow-400">★★★★★</span>

                <span className="font-semibold text-white">
                  {course.rating.toFixed(1)}
                </span>
              </div>

              <p className="my-4 text-4xl font-bold text-white">
                ${course.price}
              </p>

              <Link
                href="/registerPage"
                className="block w-full py-3 font-semibold text-center text-black bg-teal-500 rounded-xl"
              >
                Sign up to enroll
              </Link>

              <button className="w-full py-3 mt-3 bg-[#08080f] rounded-xl">
                Watch free preview
              </button>

              <div className="pt-4 mt-6 space-y-2 text-sm border-t border-[#08080f]">
                <div className="flex justify-between">
                  <span>Category</span>
                  <span className="text-white">{course.category}</span>
                </div>

                <div className="flex justify-between">
                  <span>Level</span>
                  <span className="text-white">{course.level}</span>
                </div>

                <div className="flex justify-between">
                  <span>Duration</span>
                  <span className="text-white">{course.duration} hours</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
