
"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Browse", href: "/browsePage" },
    { name: "Help", href: "/help" },
  ];

  return (
    <nav className="h-[52px] bg-[#08080f] border-b border-gray-800 font-sans">
      <div className="mx-auto flex h-full max-w-[1120px] items-center justify-between px-6">

        {/* Logo */}
        <div className="flex font-bold">
          <a href="/" className="flex items-center mr-1">
            <img
              src="/pedalinilogo.png"
              alt="Pedalini"
              className="h-6 w-auto"
            />
          </a>
          <p className="text-[#14b8a6]">Peda</p>
          <p className="text-white">lini</p>
        </div>

        {/* Options */}
        <div>
          <ul className="flex items-center gap-1">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(link.href + "/");

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#101b1e] text-[#14b8a6]"
                        : "text-[#85859b] hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Sign in / Register */}
        <div>
          <div className="flex items-center gap-5">
            <a
              href="/loginPage"
              className="text-sm text-[#85859b] transition-colors hover:text-white"
            >
              Log in
            </a>

            <a
              href="/registerPage"
              className="rounded-lg bg-[#14b8a6] px-4 py-2 text-sm font-medium text-[#07100f] transition-colors hover:bg-[#2dd4bf]"
            >
              Get started
            </a>
          </div>
        </div>

      </div>
    </nav>
  );
}
