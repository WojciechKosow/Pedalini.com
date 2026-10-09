import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Kurs from "../components/kurs";

const categories = [
  "All",
  "Design",
  "Engineering",
  "Data science",
  "Creative",
  "Business",
  "Photography",
];

const courses = [
  {
    title: "React 19 & TypeScript: Build Production-Grade Apps",
    description:
      "Learn modern React development with TypeScript and industry best practices.",
    category: "Engineering",
    level: "Intermediate",
    price: 119,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    trending: true,
    creatorName: "Marcus Chen",
    creatorAvatar: "https://i.pravatar.cc/100?img=12",
  },

  {
    title: "Machine Learning Fundamentals with Python",
    description:
      "Learn to build machine learning models with practical Python examples.",
    category: "Data science",
    level: "Beginner",
    price: 99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
    trending: true,
    creatorName: "Priya Nair",
    creatorAvatar: "https://i.pravatar.cc/100?img=47",
  },
];

export default function BrowsePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#08080f] text-white">
        <div className="mx-auto max-w-[1120px] px-6 py-8">
          <h1 className="mb-6 text-3xl font-bold">Browse courses</h1>

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
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
                  category === "All"
                    ? "border-[#14b8a6] bg-[#14b8a6] text-[#071313]"
                    : "border-[#29293d] bg-[#12121e] text-[#9293b5] hover:border-[#3b3b55] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-sm text-[#9293b5]">{courses.length} courses</p>

            <select
              defaultValue="Most Popular"
              className="rounded-lg border border-[#29293d] bg-[#12121e] px-4 py-2 text-sm text-white outline-none transition-colors focus:border-[#14b8a6]"
            >
              <option value="Most Popular">Most Popular</option>
              <option value="Highest Rated">Highest Rated</option>
              <option value="Newest">Newest</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Kurs key={course.title} {...course} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
