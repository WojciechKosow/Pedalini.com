"use client";

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
                href="/registerPage"
                className="bg-[#12121e] w-full h-35 rounded-xl flex items-center justify-center"
              >
                My Library
              </Link>
              <Link
                href="/registerPage"
                className="bg-[#12121e] w-full h-35 rounded-xl flex items-center justify-center"
              >
                Create course
              </Link>
            </div>
            <div className="mt-12 flex flex-col gap-3">
              <div>
                <FAQItem
                  question="How do I preview a course before buying?"
                  answer='Every course has free preview lessons marked with a "Free preview" label. Click on any course card to open its detail page, then click the lesson to watch the preview. You can also click "Watch free preview" in the sidebar.'
                ></FAQItem>
              </div>

              <div>
                <FAQItem
                  question="How do I purchase a course?"
                  answer="Sign in to your account, open the course detail page, and click the purchase button in the sidebar. A confirmation step will show your total before confirming. After purchase, the course is immediately added to your library."
                ></FAQItem>
              </div>

              <div>
                <FAQItem
                  question="Where are my purchased courses?"
                  answer='All purchased courses appear in "My Library" (available in the navigation when signed in). You can also access them from your profile page.'
                ></FAQItem>
              </div>

              <div>
                <FAQItem
                  question="How do I create and publish my own course?"
                  answer={`Sign in, then click "Create" in the navigation. Fill in your course title, description, price, category, and level. After creation, you'll be taken to your course page where you can preview and publish it. Published courses become immediately visible to all users.`}
                ></FAQItem>
              </div>

              <div>
                <FAQItem
                  question="How do I rate a course?"
                  answer='You must complete a course before rating it. Open the course, click "Mark as completed" in the sidebar, then return to the course detail page. A rating section will appear at the bottom where you can select 1–5 stars and write an optional review.'
                ></FAQItem>
              </div>

              <div>
                <FAQItem
                  question="How does the trending/promotion system work?"
                  answer='Courses are ranked by a popularity score that weighs total purchases (heavily), total views, and average rating. Courses with a score above 1000 receive a "Trending" badge. The Browse page defaults to this ranking, though you can switch to any sort order.'
                ></FAQItem>
              </div>

              <div>
                <FAQItem
                  question="Can I edit a course after publishing it?"
                  answer='Yes. Open your course page and click "Edit course" in the sidebar. You can update the title, description, and price at any time. Changes are saved immediately and reflected on the public course page.'
                ></FAQItem>
              </div>

              <div>
                <FAQItem
                  question="How do I contact support?"
                  answer="Pedalini is a demonstration platform. In a production environment, a support email and live chat would be available. For now, all data is stored in-memory and resets on page refresh."
                ></FAQItem>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
