import Footer from "../components/Footer";
import LoginNavbar from "../components/loginnavbar";

const inputClass = "w-full rounded-xl border border-white bg-[#12121c] px-4 py-3 text-white placeholder:text-[#5f5f78] focus:outline-none focus:border-[#14b8a6]";
const labelClass = "block mb-2 text-sm text-white";
const categories = ["Design", "Engineering", "Data Science", "Creative", "Business", "Photography"];
const levels = ["Beginner", "Indermediate", "Advanced"];

export default function CreatePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <LoginNavbar />

            <main className="flex-1 px-4 py-16">
                <div className="mx-auto w-full max-w-[650px]">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                        Create a new course
                    </h1>
                    <p className="mt-2 text-[#85859b]">
                        Fill in the details below to get started. You can add lessons and publish later.
                    </p>

                    <form className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="title" className={labelClass}>Course title</label>
                            <input
                                id="title"
                                type="text"
                                placeholder="e.g. Advanced Python for Data Scientists"
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label htmlFor="short" className={labelClass}>Short description</label>
                            <input
                                id="short"
                                type="text"
                                placeholder="One sentence about what students will learn"
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label htmlFor="price" className={labelClass}>Price (USD)</label>
                            <input
                                id="price"
                                type="number"
                                min="0"
                                placeholder="e.g. 49 — use 0 for free"
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label htmlFor="tags" className={labelClass}>Tags (comma separated)</label>
                            <input
                                id="tags"
                                type="text"
                                placeholder="e.g. Python, ML, scikit-learn"
                                className={inputClass}
                            />
                        </div>

                        <div>
                            <label htmlFor="long" className={labelClass}>Long description</label>
                            <textarea
                                id="long"
                                rows={6}
                                placeholder="Describe in detail what students will learn, prerequisites, and what makes this course unique..."
                                className={inputClass}
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
                            <div>
                                <label htmlFor="category" className={labelClass}>Category</label>
                                <select id="category" name="category" defaultValue="" className={inputClass}>
                                    <option value="" disabled>Select category</option>
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="level" className={labelClass}>Level</label>
                                <select id="level" name="level" defaultValue="" className={inputClass}>
                                    <option value="" disabled>Select level</option>
                                    {levels.map((lvl) => (
                                        <option key={lvl} value={lvl}>{lvl}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-[#14b8a6] px-6 py-3 font-semibold text-black hover:opacity-90">
                            Create course
                        </button>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
}