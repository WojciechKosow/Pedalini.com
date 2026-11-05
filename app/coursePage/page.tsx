import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const course = {
  title: "Machine Learning Fundamentals with Python",
  description:
    "A practical introduction to machine learning using Python, scikit-learn, and PyTorch. We focus on intuition over formulas — you'll understand what's happening under the hood through visualization and experimentation rather than pure mathematics. Includes five end-to-end projects.",
  image: "/ml-course.jpg",
  rating: "5.0",
  price: "99",
  level: "Beginner",
  tags: ["Data Science", "Beginner", "Python", "ML", "scikit-learn", "PyTorch"],
  author: {
    name: "Priya Nair",
    bio: "Data scientist specializing in ML pipelines. Making AI accessible to everyone.",
  },
  stats: [
    { value: "6", label: "Lessons" },
    { value: "184m", label: "Total time" },
    { value: "391", label: "Students" },
    { value: "5480", label: "Views" },
  ],
  lessons: [
    {
      title: "What is Machine Learning, Really?",
      duration: "16:00",
      free: true,
    },
    {
      title: "Python for ML: The Essential Toolkit",
      duration: "34:20",
      free: false,
    },
    { title: "Supervised Learning", duration: "52:00", free: false },
    { title: "Unsupervised Learning", duration: "38:15", free: false },
    {
      title: "Neural Networks & Deep Learning",
      duration: "1:10:00",
      free: false,
    },
    { title: "Project: House Price Predictor", duration: "42:00", free: false },
  ],
  reviews: [
    {
      author: "Elena Marchetti",
      date: "2026-09-01",
      text: "Finally a ML course that explains the intuition. Priya's visualizations are brilliant.",
    },
  ],
};

export default function CoursePage() {
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
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-[#12121e] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl font-bold text-white">{course.title}</h1>
              <p className="leading-relaxed">{course.description}</p>

              <div className="flex items-center gap-4 p-5 bg-[#12121e] rounded-xl">
                <div className="flex items-center justify-center w-12 h-12 text-lg font-bold text-black bg-teal-500 rounded-full">
                  {course.author.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-white">
                    {course.author.name}
                  </p>
                  <p className="text-sm">{course.author.bio}</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {course.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 text-center bg-[#12121e] rounded-xl"
                  >
                    <p className="text-2xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              <section>
                <h2 className="mb-4 text-xl font-bold text-white">
                  Curriculum
                </h2>
                <div className="space-y-3">
                  {course.lessons.map((lesson) => (
                    <div
                      key={lesson.title}
                      className="flex items-center gap-4 p-5 bg-[#12121e] rounded-xl"
                    >
                      <span>{lesson.free ? "▶" : "🔒"}</span>
                      <div className="flex-1">
                        <p className="text-white">{lesson.title}</p>
                        {lesson.free && (
                          <p className="text-xs text-teal-400">Free preview</p>
                        )}
                      </div>
                      <span className="text-sm">{lesson.duration}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-bold text-white">
                  Reviews{" "}
                  <span className="text-yellow-400">{course.rating}</span>
                </h2>
                {course.reviews.map((review, i) => (
                  <div key={i} className="p-5 bg-[#12121e] rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">
                          {review.author}
                        </span>
                        <span className="text-xs text-yellow-400">★★★★★</span>
                      </div>
                      <span className="text-sm">{review.date}</span>
                    </div>
                    <p className="text-sm">{review.text}</p>
                  </div>
                ))}
              </section>
            </div>

            <aside className="sticky top-24 self-start p-6 bg-[#12121e] rounded-xl">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-yellow-400">★★★★★</span>
                <span className="font-semibold text-white">
                  {course.rating}
                </span>
                <span>({course.reviews.length})</span>
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
                  <span>Lessons</span>
                  <span className="text-white">{course.lessons.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Level</span>
                  <span className="text-white">{course.level}</span>
                </div>
                <div className="flex justify-between">
                  <span>Students</span>
                  <span className="text-white">{course.stats[2].value}</span>
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
