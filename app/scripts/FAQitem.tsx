"use client";

import { useState } from "react";
import Image from "next/image";
import { string } from "zod";

type FAQitem = {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQitem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#292938] bg-[#141420] rounded-md">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-white text-sm">
        {question}

        <Image
          src="/strzalkapzdr.png"
          alt="Arrow"
          width={32}
          height={32}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="px-4 pb-4 text-sm text-[#9292b5] leading-7">
          {answer}
        </div>
      )}
    </div>
  );
}