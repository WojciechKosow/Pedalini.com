"use client";

import { useState } from "react";

export default function Help() {
  const [answer1, setAnswer1] = useState(false);
  const [answer2, setAnswer2] = useState(false);
  const [answer3, setAnswer3] = useState(false);
  const [answer4, setAnswer4] = useState(false);
  const [answer5, setAnswer5] = useState(false);
  const [answer6, setAnswer6] = useState(false);
  const [answer7, setAnswer7] = useState(false);
  const [answer8, setAnswer8] = useState(false);
  const [answer9, setAnswer9] = useState(false);
  const [answer10, setAnswer10] = useState(false);

  return (
    <section className="bg-[#08080f] py-24 md:py-32 text-[#85859b]">
      <div className="grid grid-cols-12">
        <div className="col-span-6 col-start-4">
          <h1 className="text-3xl text-white">Help & Guide</h1>
          <p>Everything you need to know about using Pedalini</p>

          <div className="mt-8 flex gap-4">
            <button className="bg-[#12121e] w-full h-35 rounded-xl">
              Create Account
            </button>
            <button className="bg-[#12121e] w-full h-35 rounded-xl">
              Browse courses
            </button>
            <button className="bg-[#12121e] w-full h-35 rounded-xl">
              My Library
            </button>
            <button className="bg-[#12121e] w-full h-35 rounded-xl">
              Create course
            </button>
          </div>

          <div
            onClick={() => setAnswer1(!answer1)}
            className="mt-4 p-5 cursor-pointer bg-[#12121e] rounded-xl w-full "
          >
            <p className="text-white">How do I create an account?</p>
            {answer1 && (
              <div className="mt-2">
                Click "Get started" in the top navigation bar, fill in your
                name, email address, and a password of at least 6 characters.
                Your account is created instantly — no email verification
                required for the demo.
              </div>
            )}
          </div>

          <div
            onClick={() => setAnswer2(!answer2)}
            className="mt-4 p-5 cursor-pointer bg-[#12121e] rounded-xl w-full "
          >
            <p className="text-white">
              How do I browse and search for courses?
            </p>
            {answer2 && (
              <div className="mt-2">
                Click "Browse" in the navigation. You can search by keyword
                (title, creator, or tag), filter by category, and sort by
                popularity, rating, price, or date. Results update in real time.
              </div>
            )}
          </div>

          <div
            onClick={() => setAnswer3(!answer3)}
            className="mt-4 p-5 cursor-pointer bg-[#12121e] rounded-xl w-full "
          >
            <p className="text-white">
              How do I preview a course before buying?
            </p>
            {answer3 && (
              <div className="mt-2">
                Every course has free preview lessons marked with a "Free
                preview" label. Click on any course card to open its detail
                page, then click the lesson to watch the preview. You can also
                click "Watch free preview" in the sidebar.
              </div>
            )}
          </div>

          <div
            onClick={() => setAnswer4(!answer4)}
            className="mt-4 p-5 cursor-pointer bg-[#12121e] rounded-xl w-full "
          >
            <p className="text-white">How do I purchase a course?</p>
            {answer4 && (
              <div className="mt-2">
                Sign in to your account, open the course detail page, and click
                the purchase button in the sidebar. A confirmation step will
                show your total before confirming. After purchase, the course is
                immediately added to your library.
              </div>
            )}
          </div>

          <div
            onClick={() => setAnswer5(!answer5)}
            className="mt-4 p-5 cursor-pointer bg-[#12121e] rounded-xl w-full"
          >
            <p className="text-white">Where are my purchased courses?</p>
            {answer5 && (
              <div className="mt-2">
                All purchased courses appear in "My Library" (available in the
                navigation when signed in). You can also access them from your
                profile page.
              </div>
            )}
          </div>

          <div
            onClick={() => setAnswer6(!answer6)}
            className="mt-4 p-5 cursor-pointer bg-[#12121e] rounded-xl w-full "
          >
            <p className="text-white">
              How do I create and publish my own course?
            </p>
            {answer6 && (
              <div className="mt-2">
                Sign in, then click "Create" in the navigation. Fill in your
                course title, description, price, category, and level. After
                creation, you'll be taken to your course page where you can
                preview and publish it. Published courses become immediately
                visible to all users.
              </div>
            )}
          </div>

          <div
            onClick={() => setAnswer7(!answer7)}
            className="mt-4 p-5 cursor-pointer bg-[#12121e] rounded-xl w-full "
          >
            <p className="text-white">How do I rate a course?</p>
            {answer7 && (
              <div className="mt-2">
                You must complete a course before rating it. Open the course,
                click "Mark as completed" in the sidebar, then return to the
                course detail page. A rating section will appear at the bottom
                where you can select 1–5 stars and write an optional review.
              </div>
            )}
          </div>

          <div
            onClick={() => setAnswer8(!answer8)}
            className="mt-4 p-5 cursor-pointer bg-[#12121e] rounded-xl w-full "
          >
            <p className="text-white">
              How does the trending/promotion system work?
            </p>
            {answer8 && (
              <div className="mt-2">
                Courses are ranked by a popularity score that weighs total
                purchases (heavily), total views, and average rating. Courses
                with a score above 1000 receive a "Trending" badge. The Browse
                page defaults to this ranking, though you can switch to any sort
                order.
              </div>
            )}
          </div>

          <div
            onClick={() => setAnswer9(!answer9)}
            className="mt-4 p-5 cursor-pointer bg-[#12121e] rounded-xl w-full "
          >
            <p className="text-white">
              Can I edit a course after publishing it?
            </p>
            {answer9 && (
              <div className="mt-2">
                Yes. Open your course page and click "Edit course" in the
                sidebar. You can update the title, description, and price at any
                time. Changes are saved immediately and reflected on the public
                course page.
              </div>
            )}
          </div>

          <div
            onClick={() => setAnswer10(!answer10)}
            className="mt-4 p-5 cursor-pointer bg-[#12121e] rounded-xl w-full "
          >
            <p className="text-white">How do I contact support?</p>
            {answer10 && (
              <div className="mt-2">
                Pedalini is a demonstration platform. In a production
                environment, a support email and live chat would be available.
                For now, all data is stored in-memory and resets on page
                refresh.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
