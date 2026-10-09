import React from "react";

const loginnavbar = () => {
  return (
    <div>
      <nav className="h-[52px] bg-[#08080f] border-b border-gray-800 font-sans">
        <div className="mx-auto flex h-full max-w-[1120px] items-center justify-between px-6">
          {/*Logo */}
          <div>
            <a href="#" className="flex items-center">
              <img
                src="pedalinilogo.png"
                alt="Pedalini"
                className="h-6 w-auto"
              />
            </a>
          </div>

          {/*Options (home, browse, help) */}
          <div>
            <ul className="flex items-center gap-1">
              <li>
                <a
                  href="#"
                  className="rounded-lg px-3 py-2 text-sm text-[#85859b] transition-colors hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="rounded-lg px-3 py-2 text-sm text-[#85859b] transition-colors hover:text-white"
                >
                  Browse
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="rounded-lg px-3 py-2 text-sm text-[#85859b] transition-colors hover:text-white"
                >
                  My library
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="rounded-lg px-3 py-2 text-sm text-[#85859b] transition-colors hover:text-white"
                >
                  Create
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="rounded-lg px-3 py-2 text-sm text-[#85859b] transition-colors hover:text-white"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/*Buttons Profile and username*/}
          <div>
            <div className="flex items-center gap-5">
              <a
                href="/loginPage"
                className="text-sm text-[#85859b] transition-colors hover:text-white"
              >
                Nazwa Uzytkownika nie wiem jak to zrobic
              </a>

              <a
                href="#"
                className="rounded-lg px-3 py-2 text-sm text-[#85859b] transition-colors hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default loginnavbar;
