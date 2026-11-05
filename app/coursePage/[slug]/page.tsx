
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { courses } from "../../data/courses";
import { notFound } from "next/navigation";

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

              <h1 className="text-3xl font-bold text-white">
                {course.title}
              </h1>

              <p className="leading-relaxed">
                {course.description}
              </p>

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
                  <p className="text-sm">
                    Course instructor
                  </p>
                </div>

              </div>

            </div>

            {/* Purchase panel */}
            <aside className="sticky top-24 self-start p-6 bg-[#12121e] rounded-xl">

              <div className="flex items-center gap-2 text-sm">
                <span className="text-yellow-400">
                  ★★★★★
                </span>

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
                  <span className="text-white">
                    {course.category}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Level</span>
                  <span className="text-white">
                    {course.level}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Duration</span>
                  <span className="text-white">
                    {course.duration} hours
                  </span>
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
